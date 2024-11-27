import React from 'react';
import './App.css'
import {useState}from'react'
import CNavBar from './CNav_bar';
import Place_order from './Placeorder';
import Home from './Home';
import Cart from './Cart';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Download from './Download';
import Login from './Login';
const App = () => {
  const [show_login,set_show_login]=useState(false); 
  return (
    <div>
      {show_login?<Login set_show_login={set_show_login}/>:<></>}
    <div className='app'>
      <CNavBar set_show_login={set_show_login}/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/' element={<Cart/>}/> 
        <Route path='/' element={<Place_order/>}/>
      </Routes>
      </div>
      <Download/>
    <Footer/>
    </div>
  );
}

export default App;
