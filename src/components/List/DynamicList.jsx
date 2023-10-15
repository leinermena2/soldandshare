import React, { useEffect, useState, useContext } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import copy from 'copy-to-clipboard'; 
import AlertBox from '../Alerts/AlertBox';
import { GeneralContext } from '../../context/GeneralContext';

const DynamicList = ({ data }) => {
  const [arrData, setArrData] = useState([]);
  const { objInfo } = useContext(GeneralContext);
  useEffect(() => {
    const values = Object.entries(data);
    const newDataArray = values.map(([index, value]) => ({ label: index, value }));
    setArrData(newDataArray);
  }, [data]);

  const handleCopyClick = (value) => {
    copy(value);
    objInfo.setShowAlert(true);
    setTimeout(() => {
      objInfo.setShowAlert(false); // Ocultar la alerta después de 3 segundos
    }, 1200);
  };

  return (
    <div>
      <List component="nav">
        {arrData.map((item, index) => (
          <div key={index}>
            <ListItem button onClick={() => handleCopyClick(item.value)}> {/* Pasa item.value como argumento */}
              <ListItemText primary={item.label} secondary={item.value} />
            </ListItem>
            {index < arrData.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    
    </div>
  );
};

export default DynamicList;
