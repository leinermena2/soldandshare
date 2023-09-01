import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormRegister from '../components/Forms/FormRegister';
import NavBarRegister from "../components/Navbars/NavBarRegister";
import Footer from "../components/Footer/Footer";
import background from "/img/backgroundLogin.jpeg";

const centeredContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', 
  background: '#ffffff', 
}

// const backgroundImages = {
//   backgroundImage: `url(${background})` , 
//   // backgroundSize: 'cover',
//   // backgroundPosition: 'center',
// }


const Register = () => {
  return (
    <div style={{ width: "100%", backgroundImage: `url(${background})` }}>
     <NavBarRegister />
    <div style={{...centeredContainer}}>
      <FormRegister />
    </div>
    <Footer />
    </div>
  );
};

export default Register;
