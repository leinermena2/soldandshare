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

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
//services
import { getListType, getListPartner } from "../../services/list";

//context
import { ClientContext } from "../../context/ClientContext";

const JobInformationForm = () => {

    const { clientsFields } = useContext(ClientContext);

    const [listEducation, setListEducation] = useState([]);
    const [listStatusWork, setListStatusWork] = useState([]);
    const [listDealType, setListDealType] = useState([]);
    const [listSocialSecurity, setListSocialSecurity] = useState([]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let newSetter = "set" + name
        clientsFields[newSetter](value);
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
                setListMotoRef(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {

        loadList(10, setListEducation)
        loadList(12, setListStatusWork)
        loadList(11, setListDealType)
        loadList(13, setListSocialSecurity)

    }, []);

    const handleChangeDatePicker = (event, param) => {
        const parsedDate = dayjs(event);
        const value = parsedDate.format('DD/MM/YYYY');
        let newSetter = "set" + param
        clientsFields[newSetter](value);
      }

    return (
        <Container maxWidth="lg">

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Nivel educativo</InputLabel>
                        <Select
                            name="EducationLevelId"
                            onChange={(event) => {
                                const selectedBranch = event.target.value;
                                loadPartner(selectedBranch);
                                handleInputChange(event);                    
                            }}
                        >
                            {listEducation.map((state) => (
                                <MenuItem key={state.id} value={state.id}>
                                    {state.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Situación laboral</InputLabel>
                        <Select
                            name="StatusWorkId"
                            onChange={handleInputChange}
                        >
                            {listStatusWork?.map((ref) => (
                                <MenuItem key={ref.id} value={ref.id}>
                                    {ref.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Tipo de contrato</InputLabel>
                        <Select
                            name="DealTypeId"
                            onChange={handleInputChange}
                        >
                            {listDealType?.map((ref) => (
                                <MenuItem key={ref.id} value={ref.id}>
                                    {ref.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Seguridad social</InputLabel>
                        <Select
                            name="SocialSecurityId"
                            onChange={handleInputChange}
                        >
                            {listSocialSecurity?.map((ref) => (
                                <MenuItem key={ref.id} value={ref.id}>
                                    {ref.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={6}>
                    <TextField
                        label="Cargo"
                        name="Cargo"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Camara de comercio"
                        name="CameraComercial"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Nombre de la compañia donde trabaja"
                        name="CompanyName"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="NIT de la compañia"
                        name="NitCompany"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Telefono de la compañia"
                        name="PhoneCompany"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Direccion de la compañia"
                        name="AddresCompany"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Tiempo trabajando en la compañia"
                        name="TimeWorking"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Referencia personal ( escribir nombre y telefono)"
                        name="PersonalReferent"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Referencia familiar ( escribir nombre y telefono)"
                        name="FamilyReferent"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Ingresos Mensuales"
                        name="MonthIncome"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Ingresos Adicionales"
                        name="AditionalIncome"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth style={{
                        marginBottom: '10px',
                    }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DateTimePicker"]}>
                                <DateTimePicker
                                    name="DateNeedContact"
                                    onChange={(event) => handleChangeDatePicker(event,"DateNeedContact")}
                                    label="Fecha de en la que quieres ser contactado" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
            </Grid>

        </Container>
    );
};

export default JobInformationForm;
