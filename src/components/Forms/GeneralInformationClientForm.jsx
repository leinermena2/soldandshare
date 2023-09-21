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

const GeneralInformationClientForm = () => {

    const { clientsFields } = useContext(ClientContext);

    const [listMotoBranch, setListMotoBranch] = useState([]);
    const [listKnowUs, setListKnowUs] = useState([]);
    const [listMotoRef, setListMotoRef] = useState([]);
    const [listCivilState, setListCivilState] = useState([]);
    const [listTypeHome, setListTypeHome] = useState([]);
    const [listReport, setListReport] = useState([]);

    const [tieneAhorros, setTieneAhorros] = useState(false);

    const handleSwitchChange = () => {
        setTieneAhorros(!tieneAhorros);
        clientsFields.setGotSavings(tieneAhorros);
    };

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

        loadList(4, setListMotoBranch)
        loadList(5, setListKnowUs)
        loadList(7, setListCivilState)
        loadList(8, setListTypeHome)
        loadList(9, setListReport)

    }, []);


    return (
        <Container maxWidth="lg">

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Marca de moto</InputLabel>
                        <Select
                            name="MotoBranch"
                            onChange={(event) => {
                                const selectedBranch = event.target.value;
                                loadPartner(selectedBranch);
                                handleInputChange(event);
                            }}
                        >
                            {listMotoBranch.map((state) => (
                                <MenuItem key={state.id} value={state.id}>
                                    {state.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Moto de referencia</InputLabel>
                        <Select
                            name="MotoRefId"
                            onChange={handleInputChange}
                        >
                            {listMotoRef?.map((ref) => (
                                <MenuItem key={ref.id} value={ref.id}>
                                    {ref.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={tieneAhorros}
                                onChange={handleSwitchChange}
                                name="GotSavings"
                                color="primary"
                            />
                        }
                        labelPlacement="start"                         label="¿Tiene ahorros para la compra de la moto?"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Monto ahorrado"
                        name="Savings"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Direccion"
                        name="Address"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Estado civil</InputLabel>
                        <Select
                            name="CivilStateId"
                            onChange={handleInputChange}
                        >
                            {listCivilState?.map((civil) => (
                                <MenuItem key={civil.id} value={civil.id}>
                                    {civil.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Tipo de hogar</InputLabel>
                        <Select
                            name="TypeHomeId"
                            onChange={handleInputChange}
                        >
                            {listTypeHome?.map((home) => (
                                <MenuItem key={home.id} value={home.id}>
                                    {home.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Tiene algun reporte?</InputLabel>
                        <Select
                            name="ReportId"
                            onChange={handleInputChange}
                        >
                            {listReport?.map((report) => (
                                <MenuItem key={report.id} value={report.id}>
                                    {report.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Como nos conociste?</InputLabel>
                        <Select
                            name="KnowUs"
                            onChange={handleInputChange}
                        >
                            {listKnowUs?.map((know) => (
                                <MenuItem key={know.id} value={know.id}>
                                    {know.item_list}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>




            </Grid>

        </Container>
    );
};

export default GeneralInformationClientForm;
