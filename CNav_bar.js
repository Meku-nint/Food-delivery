import React, { useState } from 'react';
import { assets } from './admin/assets';
import { Link } from 'react-router-dom';
import './nav.css';
const CNavBar = ({set_show_login}) => {
  const [menu,set_menu]=useState("home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt=''className='logo'/>
      <ul className='navbar-menu'>
        <a link to="/"  onClick={()=>set_menu("home")}className={menu==="home"? "active":""}>home</a>
        <a href="#app-download" onClick={()=>set_menu("menu")} className={menu==="menu"? "active":""}>menu</a>
        <a href="#footer" onClick={()=>set_menu("mobile-app")}className={menu==="mobile-app"? "active":""}>mobile-app</a>
        <a href="#explor-menu"  onClick={()=>set_menu("contact")}className={menu==="contact"? "active":""}>Contact</a>
        </ul>
        <div className='navbar-right'>
        <Link to='/' > <img src={assets.search_icon} alt=''/></Link>
          <div className='navbar-search-icon'>
           <Link to="./Cart"> <img src={assets.basket_icon} alt=''/></Link>
            <div className='dot'> </div>
            </div>
            <button onClick={()=>set_show_login(true)}>sign in</button>
  
        </div>
        
    </div>
  );
}

export default CNavBar;
