import './App.css';
import React from 'react';
import Home from './Home/Home';
import Aboutus from './Home/Aboutus';
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/About_us" element={<Aboutus />} />
    </Routes>
  </div>
  );
};

export default App;  
