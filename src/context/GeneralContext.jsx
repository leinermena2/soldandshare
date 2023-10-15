import React, { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

export function GeneralContextProvider(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [idClientProcess, setIdClientProcess] = useState(0);
 
  function getCurrentDateTime() {
    const currentDate = new Date();
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
  
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    return formattedDateTime;
  }

  const currentDateTime = getCurrentDateTime();

  const objInfo = {
    showAlert,
    setShowAlert,
    idClientProcess,
    setIdClientProcess,
    currentDateTime
  };

  

  return (
    <GeneralContext.Provider value={{ objInfo }}>
      {props.children}
    </GeneralContext.Provider>
  );
}
