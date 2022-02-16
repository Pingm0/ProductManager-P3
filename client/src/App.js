import './App.css';
import React,{useState} from 'react';
import Main from './View/Main';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import OneProduct from './components/OneProduct';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <nav className='mt-4 mb-40'>
      <Link to="/" className='underline'> Home</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/products/:id' element={<OneProduct />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
