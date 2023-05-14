import React from 'react'
import {NavLink} from 'react-router-dom'
import "../App.css"
export default function Nav() {
  return (
      <nav className='nav'>
       <NavLink to="/" className="link">Home</NavLink>
       <NavLink to="/contect" className="link">Contect Us</NavLink>
       <NavLink to="/about" className="link">About Us</NavLink>
       <NavLink to="/signup" className="link">Sign Up</NavLink>
       <NavLink to="/login" className="link">Login</NavLink>
       <NavLink to="/worker" className="link">Worker</NavLink>
       </nav>
  )
}
