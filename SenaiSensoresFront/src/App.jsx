import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Home from './pages/home.jsx';
import Sensores from './pages/sensores.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/sensores' element={<Sensores/>} />
      </Routes>
    </Router>
  );    
};

export default App;