import React from 'react';
import Home from './Home'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Pages() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/omar.daghestani-portfolio" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Pages;