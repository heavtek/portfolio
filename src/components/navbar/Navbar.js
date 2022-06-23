import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';
 const Navbar = () => {
  return (
   <div className='navbar'>
    <h1 className='my-name'>Genet Teklay</h1>
    <ul>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
   </div>
  )
}

export default Navbar;