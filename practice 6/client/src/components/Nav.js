import React, { useState } from 'react'
import {NavLink} from "react-router-dom"

export default function Nav() {

  const [btnstate,setBtn]=useState(false)
  let togglenav=btnstate? "active":"nav-item";


const navmenu=()=>{
    setBtn(btnstate=> !btnstate)
}


  return (
    <>

<div className='nav'>


<div className='nav-in'>
    <ul className={`${togglenav}`} >
         <li><NavLink to="/"  className="link">Home</NavLink></li>
         <li><NavLink to="/about"  className="link">About</NavLink></li>
         <li><NavLink to="/contect"  className="link">Contect</NavLink></li>
         <li><NavLink to="/Ragistration" className="link">Sign Up</NavLink></li>
         <li><NavLink to="/login"  className="link">Sign in</NavLink></li>
   </ul>
   <div className='manu-bar' onClick={navmenu}><i class="uil uil-bars"></i></div>
</div>




</div>


     

    
    
    </>
  )
}
