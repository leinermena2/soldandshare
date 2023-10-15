import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/UserContext.jsx";
import { ClientContextProvider } from "./context/ClientContext.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IsMobileContextProvider } from "./context/IsMobileContext.jsx";
import {
  GeneralContext,
  GeneralContextProvider,
} from "./context/GeneralContext.jsx";

const theme = createTheme();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GeneralContextProvider>
        <IsMobileContextProvider>
          <ClientContextProvider>
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </ClientContextProvider>
        </IsMobileContextProvider>
      </GeneralContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
