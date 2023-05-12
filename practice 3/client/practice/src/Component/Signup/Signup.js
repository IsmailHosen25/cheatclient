import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import './signup.css'
export default function Signup() {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"", email:"",number:"",password:""
    })
    const handlevalue =(e)=>{
         setUser({...user, [e.target.name]:e.target.value})
    }
    const postData= async (e)=>{
        e.preventDefault()
        const {name,email,number,password}=user
         await axios.post("http://localhost:3010/user/all",{
            name,email,number,password
        })
        navigate("/userlist")
    }
    console.log(user)
  return (
    <div className='form' >
        <form onSubmit={postData}>
            <div>
            <label className='name'>
                Enter Your Name:
            </label>
            <input type='text' name='name' id='name'  autoComplete='off' onChange={handlevalue}/>
            </div>
            <div> 
            <label id='email'>
                Enter Your email:
            </label >
            <input type='email' name='email' id="email"  autoComplete='off' onChange={handlevalue}/>
            </div>
            <div> 
            <label id='number'>
                Enter Your Number:
            </label >
            <input type='number' name='number' id='number'  autoComplete='off' onChange={handlevalue}/>
            </div>
            <div> 
            <label id='password'>
                Enter Your password:
            </label >
            <input type='text' name='password' id='password' autoComplete='off' onChange={handlevalue}/>
            </div>
            <button className='subbtn' >Sign up</button>
        </form>
    </div>
  )
}

