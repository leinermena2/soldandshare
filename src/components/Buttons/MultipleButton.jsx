import React from 'react';
import ButtonGeneral from './Button';

const ButtonGroup = ({ titles, styleData }) => {
 
  return (
    <div>
      {titles.map((title, index) => (
        <ButtonGeneral key={index} color="inherit" style={styleData}  hoverColor="#f0f0f0">
          {title}
        </ButtonGeneral>
      ))}
    </div>
  );
};

export default ButtonGroup;