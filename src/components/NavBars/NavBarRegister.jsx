import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '../Buttons/MultipleButton';

function NavBarRegister() {
  const buttonTitles = ['Iniciar Sesion'];
  const styleData = {
    backgroundColor: "red"
  }
  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#000000', color:'#ffffff',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* <img src="/img/logoDiverxa.png" width={200} height={50} alt="Logo" /> */}
        </Typography>
        <ButtonGroup titles={buttonTitles} styleData={styleData} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBarRegister;
