import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { getInfoClient } from "../../services/clients";
const TableClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {

      async function fetchClients() {
        try {
          const dataClient = await getInfoClient();
          setClients(dataClient.data);
  
        } catch (error) {
          console.error("Error fetching clients:", error);
        }
      }
      fetchClients();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
            {/* Agrega más encabezados de columna según tus datos */}
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.last_name}</TableCell>
              <TableCell>{client.age}</TableCell>
              {/* Agrega más celdas de datos según tus datos */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableClients;
