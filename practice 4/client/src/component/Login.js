import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../App.css"
export default function Login() {


  const navigate=useNavigate()
  const [user, setuser]=useState({
    email:'',
    password:""
  })
  const takingvalue=(e)=>{
       setuser({...user,[e.target.name]:e.target.value})
  }


const submituser=(e)=>{
    e.preventDefault()
    console.log(user)
    alert("Welcome Back")
    navigate(`/user/${user.email}`)
}



  return (
    <div className='loginform'>

      <form onSubmit={submituser}>
      <h1>Login</h1>
      <div>
          <label>
            Enter Your Email: 
          </label>
          <input type='email' name='email' id='email' value={user.email} autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Password: 
          </label>
          <input type='password' name='password' id='password' value={user.password} autoComplete='off' required onChange={takingvalue}/>
        </div>
        <button className='subbtn'>Submit</button>
      </form>

    </div>
  )
}
