import React from 'react'
import TableClients from '../components/Tablets/TableClients'
import NavBarComercial from '../components/NavBars/NavBarComercial'
import { Container } from '@material-ui/core'

function Comercial() {
  return (
    <div>
        <Container maxWidth="sm">
            <NavBarComercial />
            <TableClients /> 
        </Container>
    </div>
  )
}

export default Comercial
