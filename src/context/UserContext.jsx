import jwt_decode from 'jwt-decode';
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const decodedToken = token ? jwt_decode(token) : null;

  return (
    <UserContext.Provider value={{ token: decodedToken }}>
      {props.children}
    </UserContext.Provider>
  );
}
