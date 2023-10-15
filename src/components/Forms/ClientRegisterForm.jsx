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
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from 'dayjs';
//services
import { getListType, getListPartner } from "../../services/list";

//context
import { ClientContext } from "../../context/ClientContext";

const ClientRegisterForm = () => {
  const [listStates, setListStates] = useState([]);
  const [listTypeDocument, setListTypeDocument] = useState([]);
  const [listCitys, setListCitys] = useState([]);
  const [listCitysLoad, setListCitysLoad] = useState([]);
  const { clientsFields } = useContext(ClientContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newSetter = "set" + name
    clientsFields[newSetter](value);
  };

  const handleChangeDatePicker = (event, param) => {
    const parsedDate = dayjs(event);
    const value = parsedDate.format('DD/MM/YYYY');
    let newSetter = "set" + param
    clientsFields[newSetter](value);
  }

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
    loadList(1, setListStates);

    // lista de ciudades 
    loadList(2, setListCitysLoad);

    // Lista de tipo de documentos
    loadList(3, setListTypeDocument);

  }, []);



  return (
    <Container maxWidth="lg">

      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            label="Nombre"
            name="Name"
            onKeyUp={handleInputChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Apellido"
            name="LastName"
            onChange={handleInputChange}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Edad"
            name="Age"
            onChange={handleInputChange}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Tipo de documento</InputLabel>
            <Select
              name="TypeDocument"
              onChange={handleInputChange}
              variant="standard"
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
            name="DocumentNumber"
            onChange={handleInputChange}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Departamento de residencia</InputLabel>
            <Select
              name="StateId"
              variant="standard"
              onChange={(event) => {
                const selectedStateId = event.target.value;
                loadPartner(selectedStateId);
                handleInputChange(event);
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
            <InputLabel>Ciudad de residencia</InputLabel>
            <Select
              name="CityId"
              variant="standard"
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
            name="Email"
            variant="standard"
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Teléfono"
            name="Phone"
            variant="standard"
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>


        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Ciudad de nacimiento</InputLabel>
            <Select
              name="BornSiteId"
              variant="standard"
              onChange={handleInputChange}
            >
              {listCitysLoad?.map((state) => (
                <MenuItem key={state.id} value={state.id}>
                  {state.item_list}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>


        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Ciudad de expedición del documento</InputLabel>
            <Select
              name="SiteExpeditionId"
              variant="standard"
              onChange={handleInputChange}
            >
              {listCitysLoad?.map((state) => (
                <MenuItem key={state.id} value={state.id}>
                  {state.item_list}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer variant="standard" components={["DateTimePicker"]}>
                <DateTimePicker
                  name="BornDate"
                  
                  onChange={(event) => handleChangeDatePicker(event,"BornDate")}
                  label="Fecha de nacimiento"
                  InputProps={{
                    inputProps: {
                      format: 'DD/MM/YYYY h:i:s',
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  name="ExpeditionDocumentDate"
                  onChange={(event) => handleChangeDatePicker(event,"ExpeditionDocumentDate")}
                  label="Fecha de expedición del documento" />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>
        </Grid>

      </Grid>

    </Container>
  );
};

export default ClientRegisterForm;
