import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBarRegister from "../components/Navbars/NavBarRegister";
import Footer from "../components/Footer/Footer";
import background from "/img/backgroundLogin.jpeg";
import StepperRegister from '../components/Forms/StepperRegister';

const centeredContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#ffffff',
  width: '80%',
  flexDirection: 'column', // Para centrar verticalmente
}

const pageContainer = {
  minHeight: '100vh', // Esto asegura que todo el contenido tenga al menos la altura de la ventana
}

const RegisterClient = () => {
  return (
    <div style={{ ...pageContainer }}>
      <NavBarRegister />
      <div style={{ ...centeredContainer }}>
        <StepperRegister />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterClient;
