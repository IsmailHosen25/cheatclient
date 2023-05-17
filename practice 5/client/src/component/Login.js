import React, { useState ,useContext} from 'react'
import {useNavigate} from "react-router-dom"
import "../App.css"
import axios from 'axios'

import {userContext} from "../App"

export default function Login() {

const {state,dispatch}=useContext(userContext)
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
     const url=`http://localhost:3003/user/login`
     const res= await axios.post(url,{email,password})
     if(res.data.message==="wrong password"){
      alert("Wrong password,Please try again")
     }else if(res.data.message==="user not authorized"){
        alert("Please Sign Up first")
        navigate("/signup")
     }
     else{
      alert("Wellcome Back")
      window.localStorage.setItem("token", res.data.token)
      window.localStorage.setItem('login',"true")
      dispatch({type:"login", payload:true})
      navigate("/profile")
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
