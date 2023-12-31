import React, { useEffect, useState, useContext } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { getInfoClient } from "../../services/clients";
import ModalGeneral from "../Modals/ModalGeneral";
import { ClientContext } from "../../context/ClientContext";

const TableClients = () => {
  let { clientsFields } = useContext(ClientContext);
  useEffect(() => {
    async function fetchClients() {
      try {
        const dataClient = await getInfoClient();
        clientsFields.setClients(dataClient.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    }
    fetchClients();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead
          style={{
            backgroundColor: "#000000",
            color: "#fff !important",
            fontWeight: "bold",
          }}
        >
          <TableRow>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Nombre
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Documento
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Telefono
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Correo
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Ciudad
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Actions
            </TableCell>
            {/* Agrega más encabezados de columna según tus datos */}
          </TableRow>
        </TableHead>
        <TableBody>
          {clientsFields.clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>
                {client.name} {client.last_name}
              </TableCell>
              <TableCell>{client.document_number}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.city}</TableCell>
              <TableCell>
                <ModalGeneral
                  title={client.document_number}
                  btnConfirm={"Procesar"}
                  width={1300}
                  height="700px"
                  scrollable={true}
                  btnClose={"Cerrar Ventana"}
                  btnOpen={"Detalles"}
                  idClient={client.id}
              
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableClients;
