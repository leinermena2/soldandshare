import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core';

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  marginBottom: '16px',
};

const avatarStyle = {
  marginRight: '16px',
  backgroundColor: 'blue', // Cambiar por el color deseado
};

const CardUserDrawer = ({ name, role }) => {
  return (
    <Card style={cardStyle}>
      <Avatar style={avatarStyle}>
        {name ? name.charAt(0).toUpperCase() : ''}
      </Avatar>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="textSecondary" variant="body2">
          {role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardUserDrawer;
