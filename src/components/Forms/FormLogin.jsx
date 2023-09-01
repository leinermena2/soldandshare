import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsers } from '../../services/users'; // Importa el servicio de login
import {
  Container,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  centeredContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  formContainer: {
    background: '#ffffff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    border: '2px solid #aeaeae',
    width: '300px',
    margin: '0 auto',
  },
}));

const FormLogin = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await loginUsers({ email, password });
      if(response.token !== "" || response.token !== undefined || response.token !== 'undefined'){
          localStorage.setItem('authToken', response.token);
          navigate('/dashboard');
      }else{
         alert("error");
      }
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <Container maxWidth="sm" className={classes.centeredContainer}>
      <div className={classes.formContainer}>
        <h3>Iniciar Sesión</h3>
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          className={classes.inputField}
          required
        />
        <TextField
          label="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          className={classes.inputField}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
        >
          Iniciar Sesión
        </Button>
      </div>
    </Container>
  );
};

export default FormLogin;
