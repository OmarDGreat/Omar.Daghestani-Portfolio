import React, { Component } from 'react';
import Home from './Home'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Resume from '../components/Resume'
import { Route, Routes, BrowserRouter, HashRouter, Link } from 'react-router-dom';


function Pages() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/Omar.Daghestani-Portfolio" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Pages;