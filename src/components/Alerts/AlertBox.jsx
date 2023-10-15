import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const AlertBox = ({ type, message }) => {
  let backgroundColor,color,icon;
  switch (type) {
    case 'error':
      color = '#f3463a'
      backgroundColor = '#f1c5c2'
      icon = <ErrorIcon />
      break;
    case 'success':
      color = '#18721d'
      backgroundColor = '#caf5cc'
      icon = <CheckCircleIcon />
      break;
    case 'warning':
      color = '#9e8203'
      backgroundColor = '#fded9b'
      icon = <ErrorIcon />
      break;
    case 'advise':
      color = '#004696'
      backgroundColor = '#cad1fa'
      icon = <ErrorIcon />
      break;
  
    default:
      color = '#18721d'
      backgroundColor = '#caf5cc'
      icon = <CheckCircleIcon />
      break;
  }
  return (
    <Box
      sx={{
        display: message == "" ? 'none' : 'flex',
        alignItems: 'center',
        padding: 1,
        borderRadius: 4,
        backgroundColor: backgroundColor,
      }}
    >
      <Box sx={{ marginRight: 1 }}>{icon}</Box>
      <Typography variant="body1" sx={{ color: {color} }}>
        {message}
      </Typography>
    </Box>
  );
};

export default AlertBox;
