import React, { useEffect,useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {userContext} from "../App"
import "../App.css"
export default function Nav() {
  const {state,dispatch}=useContext(userContext)
  let login=localStorage.getItem("login")
  console.log(login)
  const Rendermanu=()=>{
   dispatch({type:"login", payload:login})
      if(state){
        return(<>
        <li className="link" > <NavLink to="/" className="navtext">Home</NavLink></li  > 
         <li className="link" ><NavLink to="/contect" className="navtext">Contect Us</NavLink></li >
         <li className="link" > <NavLink to="/about" className="navtext">About Us</NavLink></li >
         <li className="link" ><NavLink to="/profile" className="navtext">Profile</NavLink></li >
        </>)
      }else{
        return(<>


         <li className="link" > <NavLink to="/" className="navtext">Home</NavLink></li  > 

         <li className="link" ><NavLink to="/signup" className="navtext">Sign Up</NavLink></li >
         <li className="link" ><NavLink to="/login" className="navtext">Login</NavLink></li > 

              </>)
      }
  }
  useEffect(()=>{
    Rendermanu()
  },[])
    return(
     <>
      <ul className='nav'>

        <Rendermanu/>
    </ul>
  </>
    )
}
