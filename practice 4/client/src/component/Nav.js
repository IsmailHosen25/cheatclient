import React from 'react'
import {NavLink} from 'react-router-dom'
import "../App.css"
export default function Nav() {
    return(
     <>
      <ul className='nav'>
        <li className="link" > <NavLink to="/" className="navtext">Home</NavLink></li  > 
        <li className="link" ><NavLink to="/contect" className="navtext">Contect Us</NavLink></li >
        <li className="link" > <NavLink to="/about" className="navtext">About Us</NavLink></li >
        <li className="link" ><NavLink to="/signup" className="navtext">Sign Up</NavLink></li >
         <li className="link" ><NavLink to="/login" className="navtext">Login</NavLink></li >   
       <li className="link" > <NavLink to="/worker" className="navtext">Worker</NavLink></li > 
    </ul>
  </>
    )
}
