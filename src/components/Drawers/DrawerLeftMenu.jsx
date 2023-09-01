import React, { useState, useContext, useEffect } from 'react';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import CardUserDrawer from '../Cards/CardUserDrawer';
import { UserContext } from "../../context/UserContext";

const DrawerLeftMenu = ({optionsList = []}) => {
  const [open, setOpen] = useState(false);
  const { token } = useContext(UserContext);
  const [ infoUser, setInfoUser ] = useState({})

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(isOpen);
  };

  useEffect(() => {
    setInfoUser(token)
    // console.log(token);
}, [ token ]); 

  const buttonDrawer = {background: 'none', boxShadow: 'none' }
  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={buttonDrawer}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <CardUserDrawer name={infoUser.name+" "+infoUser.last_name} role={infoUser.role_id} />
          <List>
            <ListItem button>
              <ListItemIcon>
               <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Usuarios" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Clientes" />
            </ListItem>
            {/* Agrega más opciones de menú si es necesario */}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerLeftMenu;
