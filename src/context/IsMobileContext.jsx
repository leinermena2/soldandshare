import React, { createContext, useState, useEffect } from "react";

export const IsMobileContext = createContext();

export function IsMobileContextProvider(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Define la media query para dispositivos móviles

    const handleMediaChange = (e) => {
      setIsMobile(e.matches); 
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    handleMediaChange(mediaQuery);

    console.log(isMobile);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);


  return (
    <IsMobileContext.Provider value={{ isMobile }}>
      {props.children}
    </IsMobileContext.Provider>
  );
}
