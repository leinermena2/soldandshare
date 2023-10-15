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
import { getProcessByClient } from "../../services/clients";
import { ClientContext } from "../../context/ClientContext";
import { GeneralContext } from "../../context/GeneralContext";

const TableClientsHistoryProcess = () => {
  let { clientsFields } = useContext(ClientContext);
  let { objInfo } = useContext(GeneralContext);
  const clientId = objInfo.idClientProcess;
  useEffect(() => {
    async function fetchClients() {
      try {
        const dataClient = await getProcessByClient(clientId);
        clientsFields.setClientsProcessHistory(dataClient.data);
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
              Fecha
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Credito
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Estado
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Alternativa
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Detalles
            </TableCell>
            <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
              Usuario
            </TableCell>
            {/* Agrega más encabezados de columna según tus datos */}
          </TableRow>
        </TableHead>
        <TableBody>
          {clientsFields.clientsProcessHistory.map((clientProcess) => (
            <TableRow key={clientProcess.id}>
              <TableCell>
                {(clientProcess.dateActualitation && new Date(clientProcess.dateActualitation).toLocaleDateString()) || 'Fecha no disponible'}
</TableCell>
              <TableCell>{clientProcess.credit_response_item}</TableCell>
              <TableCell>{clientProcess.status_process_item}</TableCell>
              <TableCell>{clientProcess.option_alternative_item}</TableCell>
              <TableCell>{clientProcess.details}</TableCell>
              <TableCell>{clientProcess.user_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableClientsHistoryProcess;
