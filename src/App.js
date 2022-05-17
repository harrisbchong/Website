import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Services from './components/pages/Services';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Website' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;