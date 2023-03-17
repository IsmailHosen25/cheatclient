import React from 'react'
import "./nav.css"
import {Link} from"react-router-dom"
export default function Nav() {
  return (
    <>
    <nav>
        <div className='logo'>
            <h2>Logo</h2>
        </div>
        <ul>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/about">About</Link></li>
          <li><Link className='link' to="/contect">Contect</Link></li>
          <li><Link className='link' to="/Signup">SignUp/Login</Link></li>
        </ul>
    </nav>
    
    </>
  )
}
