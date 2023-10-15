import React, { useEffect, useContext } from 'react'
import TableClients from '../components/Tablets/TableClients'
import NavBarComercial from '../components/NavBars/NavBarComercial'
import { Container } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

function Comercial() {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  useEffect(() => {
      console.log(token);
  }, [ token ]);

  useEffect(() => {
      try {
         
      } catch (error) {
          navigate('/login');
      }
  }, [navigate]); 
  return (
    <div>
        <Container maxWidth="lg">
            <NavBarComercial user={token} />
            <TableClients /> 
        </Container>
    </div>
  )
}

export default Comercial
