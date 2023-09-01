import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 240
    },
    drawerPaper: {
      width: 240
    }
  }));
  
  const LeftDrawer = () => {
    const classes = useStyles();
  
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Opción 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Opción 2" />
          </ListItem>
          {/* Agrega más opciones aquí */}
        </List>
      </Drawer>
    );
  };

  export default LeftDrawer;
  