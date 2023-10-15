import React, { useState, useContext } from "react";
import { Button, Modal, Typography, Paper, Box, Grid } from "@mui/material";
import { ClientContext } from "../../context/ClientContext";
import { GeneralContext } from "../../context/GeneralContext";
import DynamicList from "../List/DynamicList";
import AvatarClients from "../Avatars/AvatarClients";
import AlertBox from "../Alerts/AlertBox";
import SendIcon from "@mui/icons-material/Send";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import InfoStepOneProcessForm from "../Forms/InfoStepOneProcessForm";
import Swal from "sweetalert2";
import TableClientsHistoryProcess from "../Tablets/TableClientProcess";

import { requestCodeOTP } from "../../services/mailer";
import "../styles.css";

const ModalGeneral = ({
  title,
  btnConfirm,
  btnClose,
  btnOpen,
  idClient = 0,
  typeModal = 1,
  width = 400, // Ancho del modal
  height = "auto", // Alto del modal
  scrollable = false, // Habilitar scroll
  renderFooter = null, // Puedes pasar un componente personalizado para el footer
}) => {
  const [open, setOpen] = useState(false);
  const { clientsFields } = useContext(ClientContext);
  const [clientInfo, setClientInfo] = useState({});
  const { objInfo } = useContext(GeneralContext);
  const [emailUser, setEmailUser] = useState("");
  const [responseC, setResponseC] = useState("");

  const handleOpen = () => {
    setOpen(true);
    if (typeModal) {
      const clients = clientsFields.clients;
      const clienteEncontrado = clients.find(
        (cliente) => cliente.id === idClient
      );
      objInfo.setIdClientProcess(idClient);
      setEmailUser(clienteEncontrado.email);
      if (clienteEncontrado) {
        setClientInfo(clienteEncontrado);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const paperStyle = {
    width: width, // Usar el ancho proporcionado
    height: height, // Usar el alto proporcionado
    backgroundColor: "white", // Cambia esto según tus estilos
    border: "1px solid #ccc",
    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
    padding: "16px",
  };

  const headModalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const handleOpenSufi = () => {
    window.open(
      "https://digital.sufi.apps.bancolombia.com/autogestion/solicitar/consumidor/DIVERXA_SAS",
      "Google",
      "width=800,height=600"
    );
  };

  const requestOTPMail = () => {
    const data = {
      to: emailUser,
      subject: "No-reply - Verificar codigo OTP",
      text: "El objetivo de este mensaje es solicitarte que revises tus mensajes de texto y nos hagas llegar el codigo OTP que sufi te acaba de enviar",
    };
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres enviar el correo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, enviar correo",
      cancelButtonText: "Cancelar",
      customClass: {
        container: "custom-swal-container", // Clase personalizada para el contenedor de la alerta
      },
    }).then((result) => {
      if (result.isConfirmed) {
        async function sendMail(data) {
          try {
            const userResponse = await requestCodeOTP(data);
            Swal.fire({
              title: "Correo enviado",
              text: "El correo ha sido enviado correctamente",
              icon: "success",
              customClass: {
                container: "custom-swal-container", // Agrega la clase personalizada al contenedor de la alerta
              },
            });
          } catch (error) {
            console.error("Error al realizar la solicitud:", error);
          }
        }
        sendMail(data);
      } else {
        Swal.fire({
          title: "Correo enviado",
          text: "Cancelaste la solicitud del código OTP",
          icon: "error",
          customClass: {
            container: "custom-swal-container", // Agrega la clase personalizada al contenedor de la alerta
          },
        });
      }
    });
  };

  const responseCreditMail = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres enviar el correo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, enviar correo",
      cancelButtonText: "Cancelar",
      customClass: {
        container: "custom-swal-container", // Clase personalizada para el contenedor de la alerta
      },
      input: "select", // Utiliza un campo de entrada de tipo select
      inputOptions: {
        Aceptada: "Aceptada",
        Rechazada: "Rechazada",
      },
      inputPlaceholder: "Seleccionar respuesta", // Texto de marcador de posición para el selector
      inputValidator: (value) => {
        // Validador para verificar si se ha seleccionado una opción
        return new Promise((resolve) => {
          if (value === "") {
            resolve("Debes seleccionar una opción"); // Muestra un mensaje de error si no se selecciona ninguna opción
          } else {
            resolve();
          }
        });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        async function sendMail() {
          const data = {
            to: emailUser,
            subject: "No-reply - Verificar codigo OTP",
            text:
              "El objetivo de este mensaje es informarte que tu solicitud de credito con SUFI a sido " +
              result.value,
          };
          try {
            const userResponse = await requestCodeOTP(data);
            Swal.fire({
              title: "Correo enviado",
              text: "El correo ha sido enviado correctamente",
              icon: "success",
              customClass: {
                container: "custom-swal-container", // Agrega la clase personalizada al contenedor de la alerta
              },
            });
          } catch (error) {
            console.error("Error al realizar la solicitud:", error);
          }
        }

        sendMail();
      } else {
        Swal.fire({
          title: "Correo enviado",
          text: "Cancelaste la solicitud del código OTP",
          icon: "error",
          customClass: {
            container: "custom-swal-container", // Agrega la clase personalizada al contenedor de la alerta
          },
        });
      }
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {btnOpen}
      </Button>
      <Modal open={open} onClose={handleClose} style={modalStyle}>
        <div>
          <Paper style={paperStyle}>
            <div style={headModalStyle}>
              <Typography variant="h6">{title}</Typography>
              <AvatarClients
                name={(
                  clientInfo.name +
                  " " +
                  clientInfo.last_name
                ).toUpperCase()}
              />
            </div>
            <div id="conainerOne" style={{ display: "flex" }}>
              <div
                id="leftSide"
                style={{
                  flex: "30%", // El leftSide ocupará todo el espacio disponible
                  overflowY: scrollable ? "auto" : "hidden",
                  height: "650px",
                }}
              >
                <Typography>
                  {typeModal === 1 ? (
                    <div>
                      <DynamicList data={clientInfo} />
                    </div>
                  ) : (
                    "hola mundo"
                  )}
                </Typography>
              </div>
              <div id="rightSide" style={{ flex: "80%", marginTop: "10px" }}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: "10px",
                  }}
                >
                  <Button
                    onClick={handleOpenSufi}
                    startIcon={<OpenInBrowserIcon />}
                    variant="outlined"
                  >
                    Abrir SUFI
                  </Button>
                  <Button
                    startIcon={<MailOutlineIcon />}
                    variant="outlined"
                    onClick={requestOTPMail}
                  >
                    Solicitar Codigo
                  </Button>
                  <Button
                    onClick={responseCreditMail}
                    startIcon={<SendIcon />}
                    variant="outlined"
                  >
                    Enviar Respuesta
                  </Button>
                </div>
                <div
                  style={{
                    height: "355px",
                    marginTop: "10px",
                  }}
                >
                  <InfoStepOneProcessForm userId={idClient} email={emailUser} />
                  <div
                    style={{
                      overflowY: scrollable ? "auto" : "hidden",
                      height: "370px",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <TableClientsHistoryProcess />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </Paper>
        </div>
      </Modal>
    </div>
  );
};

export default ModalGeneral;
