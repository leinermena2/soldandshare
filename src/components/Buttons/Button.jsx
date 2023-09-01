import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  roundedPillButton: {
    borderRadius: '9999px',
    padding: theme.spacing(1, 3),
  },
}));

const ButtonGeneral = ({ hoverColor, children, type = "button", variant = "contained", color = "primary", disabled=false }) => {
  const buttonStyles = {
    '&:hover': {
      backgroundColor: hoverColor,
    }
  };

  const classes = useStyles();

  return (
    <Button 
    color={color} 
    sx={buttonStyles}
    type={type}
    variant={variant}
    disabled={disabled}
    className={classes.roundedPillButton}
    >
      {children}
    </Button>
  );
};

export default ButtonGeneral;