import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UndergroundGarage from './pages/UndergroundGarage';
import Background3D from './components/Background3D';

function App() {
  return (
    <Router>
      <Background3D />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events/underground-garage" element={<UndergroundGarage />} />
      </Routes>
    </Router>
  );
}

export default App;
