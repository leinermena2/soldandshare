import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Swal from "sweetalert2";

const Confirm = ({
  title,
  subtitle,
  icon,
  confirmButtonText,
  cancelButtonText,
}) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    console.log("Acción confirmada");
  };

  const handleCancel = () => {
    setOpen(false);
    console.log("Acción cancelada");
  };

  const showAlert = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={showAlert}>
        Mostrar alerta
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancel}
            style={{
              background: "#ffd224",
              color: "black",
              borderRadius: "50px"
            }}
          >
            {cancelButtonText}
          </Button>
          <Button
            onClick={handleConfirm}
            style={{
              background: "#d7d7d7",
              color: "black",
              borderRadius: "50"
            }}
            variant="contained"
            color="primary"
          >
            {confirmButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Confirm;
