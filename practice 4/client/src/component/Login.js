import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../App.css"
import axios from 'axios'
export default function Login() {


  const navigate=useNavigate()
  const [user, setuser]=useState({
    email:'',
    password:""
  })
  const takingvalue=(e)=>{
       setuser({...user,[e.target.name]:e.target.value})
  }


const submituser=async (e)=>{
    e.preventDefault()
  try{

     const {email,password}=user
     const url=`http://localhost:3001/user/${email}`
     const res= await axios.post(url,{password})
     if(res.data==="Wrong password"){
      alert("Wrong password,Please try again")
     }else if(res.data==="user not valid"){
        alert("Please Sign Up first")
        navigate("/signup")
     }
     else{
      alert("Wellcome Back")
      navigate(`/login/${email}`)
     }
  }catch(e){
    console.log(e)
  }

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
