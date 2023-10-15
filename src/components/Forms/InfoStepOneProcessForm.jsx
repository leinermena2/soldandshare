import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
  Grid,
  Switch,
  FormControlLabel,
} from "@mui/material";


//context
import { ClientContext } from "../../context/ClientContext";
import { UserContext } from "../../context/UserContext";
import { GeneralContext } from "../../context/GeneralContext";
//services
import { saveNewProgressHistory } from "../../services/clients";
import { getListType } from "../../services/list";

//components
import ModalConfirm from "../Modals/ModalConfirm";
import AlertBox from "../Alerts/AlertBox";

const InfoStepOneProcessForm = ({ userId, email }) => {
  const [listStatusProcess, setListStatusProcess] = useState([]);
  const [listCreditResponse, setListCreditResponse] = useState([]);
  const [listNewOptions, setListNewOptions] = useState([]);
  const { clientsFields } = useContext(ClientContext);
  const { clientProcessInfo } = clientsFields;
  const { token } = useContext(UserContext);
  const [arrayList, setArrayList] = useState([]);
  const [typeResponse, setTypeResponse] = useState("");
  const [messageResponse, setMessageResponse] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [arrData, setArrData] = useState([]);
  const { objInfo } = useContext(GeneralContext);

  const loadList = (type, setter) => {
    getListType(type)
      .then((response) => {
        setter(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newSetter = "set" + name;
    clientProcessInfo[newSetter](value);
  };

  useEffect(() => {
    loadList(16, setListStatusProcess);
    loadList(15, setListNewOptions);
    loadList(14, setListCreditResponse);
    console.log(token);
  }, []);

  const handleSaveProcessHistory = (cases) => {
    let objInfoProcess = {
      credit_response_id: clientProcessInfo.creditResponseId,
      status_process_id: clientProcessInfo.statusProcessId,
      option_alternative_id: clientProcessInfo.optionAlternativeId,
      user_id: token?.id,
      client_id: objInfo.idClientProcess,
      details: clientProcessInfo.detailsOperation,
      dateActualitation: objInfo.currentDateTime,
    };
    switch (cases) {
      case 0:
        setModalOpen(true);
        break;
      case 1:
        async function addUser(data) {
          try {
            const userResponse = await saveNewProgressHistory(data);

            setTypeResponse(userResponse.status);
            setMessageResponse(userResponse.message);
            objInfo.setShowAlert(true);
            setTimeout(() => {
              objInfo.setShowAlert(false); // Ocultar la alerta después de 3 segundos
            }, 1200);
          } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            setTypeResponse("error");
            setMessageResponse("Error al realizar la solicitud");
            objInfo.setShowAlert(true);
            setTimeout(() => {
              objInfo.setShowAlert(false); // Ocultar la alerta después de 3 segundos
            }, 1200);
          }
        }
        addUser(objInfoProcess);
        break;
    }
  };



  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAccept = (dataUser) => {
    handleSaveProcessHistory(1);
    // Lógica para aceptar
    handleCloseModal();
  };

  const handleReject = () => {
    // Lógica para rechazar
    handleCloseModal();
  };
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <ModalConfirm
        open={modalOpen}
        onClose={handleCloseModal}
        title="¿Estas seguro?"
        text="La información propocionada se almacenara en nuestras bases de datos."
        onAccept={handleAccept}
        onReject={handleReject}
      />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Credito</InputLabel>
            <Select
              name="CreditResponseId"
              onChange={(event) => {
                const selectedBranch = event.target.value;
                handleInputChange(event);
              }}
              style={{ marginLeft: "10px" }}
            >
              {listCreditResponse.map((state) => (
                <MenuItem key={state.id} value={state.id}>
                  {state.item_list}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Estado del proceso</InputLabel>
            <Select
              name="StatusProcessId"
              onChange={(event) => {
                const selectedBranch = event.target.value;
                handleInputChange(event);
              }}
            >
              {listStatusProcess.map((state) => (
                <MenuItem key={state.id} value={state.id}>
                  {state.item_list}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Opciones Alternativas</InputLabel>
            <Select
              name="OptionAlternativeId"
              onChange={(event) => {
                const selectedBranch = event.target.value;
                handleInputChange(event);
              }}
            >
              {listNewOptions.map((state) => (
                <MenuItem key={state.id} value={state.id}>
                  {state.item_list}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item style={{ marginLeft: "10px" }} xs={12}>
          <InputLabel>Detalles de operación</InputLabel>
          <TextField
            name="DetailsOperation"
            onChange={(event) => {
              handleInputChange(event);
            }}
            fullWidth
          />
        </Grid>
        <Grid item style={{ marginLeft: "10px" }} xs={12}>
          <Button
            style={{
              width: "100%",
            }}
            onClick={() => handleSaveProcessHistory(0)}
            variant={"outlined"}
          >
            Actualizar progreso
          </Button>
        </Grid>
      </Grid>

      {objInfo.showAlert ? (
        <AlertBox type={typeResponse} message={messageResponse} />
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoStepOneProcessForm;
