import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const AlertBox = ({ type, message }) => {
  const backgroundColor = type === 'error' ? '#f1c5c2' : '#caf5cc'; 
  const color = type === 'error' ? '#f3463a' : '#18721d'; 
  const icon = type === 'error' ? <ErrorIcon /> : <CheckCircleIcon />; 

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
