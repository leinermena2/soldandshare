import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContext, UserContextProvider } from "./context/UserContext.jsx";
import { ClientContextProvider } from "./context/ClientContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    </ClientContextProvider>
  </React.StrictMode>
);
