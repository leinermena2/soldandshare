import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
  Grid,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
//services
import { getListType, getListPartner } from "../../services/list";
import { createClients } from "../../services/clients";

const ClientRegisterForm = () => {
  const [listStates, setListStates] = useState([]);
  const [listTypeDocument, setListTypeDocument] = useState([]);
  const [listCitys, setListCitys] = useState([]);
  const [listMotoBranch, setListMotoBranch] = useState([]);
  const [listknowUs, setListknowUs] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    age: "",
    type_document: "",
    document_number: "",
    state: "",
    city: "",
    email: "",
    phone: "",
    moto_branch: "",
    know_us: "",
    date_need_contact: new Date(),
  });


  const handleDateNeedContactChange = (date) => {
    setFormData({ ...formData, date_need_contact: new Date(date) });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    async function addUser(userData) {
      try {
        const clientResponse = await createClients(userData);
        console.log(clientResponse);
    
        // setTypeResponse(clientResponse.status)
        // setMessageResponse(clientResponse.message)
        
        // setTimeout(navigate('/dashboard'),4000);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    }
    addUser(formData);  


    // Aquí puedes enviar formData al backend
  };

  const loadList = (type, setter) => {
    getListType(type)
      .then((response) => {
        setter(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const loadPartner = (id) => {
    getListPartner(id)
      .then((response) => {
        setListCitys(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    // Lista de departamentos
    loadList(8, setListStates);

    // Lista de marcas de motos
    loadList(11, setListMotoBranch);

    // Lista de tipo de documentos
    loadList(12, setListTypeDocument);

    // Lista de cómo nos conociste
    loadList(13, setListknowUs);
  }, []);

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Apellido"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Edad"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Tipo de documento</InputLabel>
              <Select
                name="type_document"
                value={formData.type_document}
                onChange={handleInputChange}
              >
                {listTypeDocument.map((state) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.item_list}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Número de Documento"
              name="document_number"
              value={formData.document_number}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Departamento</InputLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={(event) => {
                  const selectedStateId = event.target.value;
                  setFormData({ ...formData, state: selectedStateId });
                  loadPartner(selectedStateId);
                }}
              >
                {listStates.map((state) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.item_list}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Ciudad</InputLabel>
              <Select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              >
                {listCitys?.map((state) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.item_list}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Marca de Moto</InputLabel>
              <Select
                name="moto_branch"
                value={formData.moto_branch}
                onChange={handleInputChange}
              >
                {listMotoBranch?.map((state) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.item_list}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Cómo nos Conociste</InputLabel>
              <Select
                name="know_us"
                value={formData.know_us}
                onChange={handleInputChange}
              >
                {listknowUs?.map((state) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.item_list}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker 
                  name="date_need_contact"
                  // value={formData.date_need_contact}
                  onChange={handleDateNeedContactChange}
                  label="Fecha de contacto" />
                </DemoContainer>
              </LocalizationProvider>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button 
             style={{
               width: "100%",
               borderRadius: "20px"
             }}
            type="submit" variant="contained" color="primary">
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ClientRegisterForm;
