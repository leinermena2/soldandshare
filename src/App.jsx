import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Register from './views/Register';
import RegisterClient from './views/RegisterClient';
import Login from './views/Login';
import Admin from './views/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Home />} />
        <Route exact path="/register" element={<RegisterClient />} />
        <Route exact path="/registerClient" element={<RegisterClient />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
