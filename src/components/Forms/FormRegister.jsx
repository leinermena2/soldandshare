import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getRoles } from "../../services/roles";
import { createUsers } from "../../services/users";
import SelectOptions from "../Selects/SelectOptions";
import ButtonGeneral from "../Buttons/Button";
import ModalConfirm from "../Modals/ModalConfirm";
import AlertBox from "../Alerts/AlertBox";
// import swal from 'sweetalert2';

import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  LinearProgress,
  makeStyles,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
  },
  centeredContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
}));

const customSpacing = 16; // Reemplaza 16 por el valor que desees

const formContainer = {
  background: "#ffffff",
  padding: customSpacing, 
  borderRadius: customSpacing / 2,
  border: "2px solid #aeaeae",
  width: "700px",
  margin: "0 auto",
  width: "100%",
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const roleRef = useRef(null);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role_id, setRole_id] = useState("");
  const [typeResponse, setTypeResponse] = useState("");
  const [messageResponse, setMessageResponse] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [arrayList, setArrayList] = useState([]);
  const [token, setToken] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    calculatePasswordStrength(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole_id(event.target.value);
  };

  useEffect(() => {
    async function fetchRoles() {
      try {
        const roles = await getRoles();
        setArrayList(roles.data);

      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    }
    fetchRoles();
  }, []);

  const calculatePasswordStrength = (password) => {
    // Implementa tu propia lógica de cálculo de fortaleza de contraseña aquí
    // Actualiza el estado de passwordStrength en función del valor calculado
    if (password.length > 5) setPasswordStrength(3);
    else if (password.length > 3) setPasswordStrength(2);
    else setPasswordStrength(1);
  };

  const createAccount = (cases) => {
 
    let objInfoUserRegister = {
      "name": name,
      "last_name" : lastName,
      "age": age,
      "email": email,
      "password": password,
      "role_id": role_id
   };

     switch (cases) { 
      case 0:
      setModalOpen(true);
        break;
      case 1: 
      async function addUser(userData) {
        try {
          const userResponse = await createUsers(userData);
      
          setTypeResponse(userResponse.status)
          setMessageResponse(userResponse.message)
          localStorage.setItem('authToken', userResponse.token);
          
          setTimeout(navigate('/dashboard'),4000);
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      }
      addUser(objInfoUserRegister);          
 
        break;
  
  
     }
    
    
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAccept = (dataUser) => {

    createAccount(1);
    // Lógica para aceptar
    handleCloseModal();
  };

  const handleReject = () => {
    // Lógica para rechazar
    handleCloseModal();
  };
  const isPasswordValid = password === confirmPassword && passwordStrength >= 3;
  const arrOptionsUsers = ["Admin", "User"];
  const [modalOpen, setModalOpen] = useState(false);

  const styleBtnRegister = {
    width: "100% !important",
    borderRadius: "50px",
    textAlign: "center",
    background: "#ffd224",
    color: "black",
    transition: "background-color 0.3s ease-in-out", 
    cursor: "pointer" 
  }
  
  return (
    <Container maxWidth="sm" style={formContainer}>
      <div>
         <h3>Completar todos los datos</h3>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            inputRef={nameRef}
            value={name}
            onChange={handleNameChange}
            fullWidth
            required
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            inputRef={lastNameRef}
            value={lastName}
            onChange={handleLastNameChange}
            fullWidth
            required
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Age"
            inputRef={ageRef}
            value={age}
            onChange={handleAgeChange}
            fullWidth
            required
            type="number"
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            inputRef={emailRef}
            value={email}
            onChange={handleEmailChange}
            fullWidth
            required
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            inputRef={passwordRef}
            value={password}
            onChange={handlePasswordChange}
            type="password"
            fullWidth
            required
            className={classes.inputField}
          />
          <LinearProgress
            variant="determinate"
            value={passwordStrength * 33.33}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            inputRef={confirmPasswordRef}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            type="password"
            fullWidth
            required
            error={!isPasswordValid}
            helperText={
              !isPasswordValid &&
              "Passwords do not match or password strength is too weak."
            }
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role-select"
              value={role_id}
              onChange={handleRoleChange}
              className={classes.inputField}
              inputRef={roleRef}
            >
              {arrayList.map((element) => (
                <MenuItem key={element.id} value={element.id}>
                  {element.role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => createAccount(0)}
            style={{ ...styleBtnRegister, width: '100%' }}
            // disabled={!isPasswordValid}
          >
            Register
          </Button>
          <ModalConfirm
            open={modalOpen}
            onClose={handleCloseModal}
            title="¿Estas seguro?"
            text="La información propocionada se almacenara en nuestras bases de datos."
            onAccept={handleAccept}
            onReject={handleReject}
          />
        </Grid>
        <div
          style={{
            alignContent:"center",
            alignItems: "center"
          }}
         >
        <AlertBox 
          type={typeResponse}
          message={messageResponse}
        />
        </div>
      </Grid>

    </Container>
  );
};

export default RegistrationForm;
