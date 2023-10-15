import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '../Buttons/MultipleButton';

const NavBarComercial = ({user = "Leiner Mena",buttonTitles ="ya tu sa"}) => {
  console.log(user);
  const userName = user?.name+" " + user?.last_name;
  const styleData = {
    backgroundColor: "red"
  }
  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#000000', color:'#ffffff',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/img/logoDiverxa.png" width={200} height={50} alt="Logo" /> 
        </Typography>
        <p>{userName} </p>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarComercial;
