import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Earphones from './components/pages/Earphones';
import Home from './components/pages/Home';
import Laptops from './components/pages/Laptops';
import Phones from './components/pages/Phones';
import Watches from './components/pages/Watches';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='phones' element={<Phones />}/>
        <Route path='watches' element={<Watches />}/>
        <Route path='earphones' element={<Earphones />}/>
        <Route path='laptops' element={<Laptops />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

