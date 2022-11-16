import React from 'react';
import Home from './Home'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { Route, Routes } from 'react-router-dom';


function Pages() {
  return (
    
    <Routes>
      <Route path="/Omar.Daghestani-Portfolio" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
  )
}

export default Pages;