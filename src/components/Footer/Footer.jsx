import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const footerStyle = {
  marginTop: 'auto',
  backgroundColor: '#ffd224', 
  color: '#000', 
  padding: '16px', 
};

const linkStyle = {
  color: 'inherit', 
  textDecoration: 'none', 
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Diverxa Motos. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" align="center">
          Desarrollado por <Link style={linkStyle} href="https://www.example.com/">Leiner Stanish</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
