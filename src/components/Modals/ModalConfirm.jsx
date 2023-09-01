import React, { useState } from "react";
import { Button, Modal, Typography, Box } from "@mui/material";

const ModalConfirm = ({ open, onClose, title, text, onAccept, onReject }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "white", // Cambiamos el color de fondo a blanco
          borderRadius: 8, // Agregamos bordes redondeados
          boxShadow: 8, // Ajustamos la sombra
          p: 3,
          textAlign: "center", // Centramos el contenido
        }}
      >
        <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          {text}
        </Typography>
        <Button
          style={{
            background: "#ffd224",
            color: "black",
            borderRadius: "50px",
            cursor: "pointer"
          }}
          variant="contained"
          color="primary"
          onClick={onAccept}
          sx={{ marginRight: 1 }}
        >
          Aceptar
        </Button>
        <Button
          style={{
            background: "#d7d7d7",
            color: "black",
            borderRadius: "50px",
            cursor: "pointer"
          }}
          variant="contained"
          color="secondary"
          onClick={onReject}
          sx={{ marginLeft: 1 }}
        >
          Rechazar
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalConfirm;
