import React from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='nav'>
      <nav>
        <NavLink to="/" className='navstyle'>Home</NavLink>
        <NavLink to="/signup" className='navstyle'>SignUp</NavLink>
        <NavLink to="/login" className='navstyle'>Login in</NavLink>
        <NavLink to="/country" className='navstyle'>Country</NavLink>
        <NavLink to="/userlist" className='navstyle'>User List</NavLink>
      </nav>
    </div>
  )
}
