import './App.css';
import React from 'react';
import Home from './Home/Home';
import Aboutus from './Home/Aboutus';
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
import Programs from './Home/Programs';
import Contact from './Home/Contact';
import Incubation from './Home/Incubation';
import Teams from './Home/Teams';
const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About_us" element={<Aboutus />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/incubation" element={<Incubation/>} />
      <Route path="/teams" element={<Teams/>} />
    </Routes>
  </div>
  );
};

export default App;  
