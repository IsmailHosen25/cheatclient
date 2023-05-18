import React, { useState } from 'react'
import "../App.css"
import { useNavigate} from 'react-router-dom'
import axios from "axios"


export default function SignUp() {
 
  const navigate=useNavigate()


    const [user,setuser]=useState({
      
      username:"",
      email:"",
      password:""

    })
   

    const takingvalue=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    const submituser = async(e)=>{
        e.preventDefault ()
  
          const{username,email,password}=user
         const res = await axios.post("http://localhost:3003/user/register", {username,email,password}
        )
      if(res.data.message==="valid User"){
        alert("You are alrady vaild user")
        navigate("/login")
      }
      else{
        alert("Thank you for Sign Up")
        navigate(`/login`)
      }  
    }

  return (
    <div className='signupform'>

      <form onSubmit={submituser} encType='multipart/form-data'>
        <h1>Sign Up</h1>
        <div>
          <label>
            Enter Your Name: 
          </label>
          <input type='text' name='username' id='name' autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Email: 
          </label>
          <input type='email' name='email' id='email'  autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Password: 
          </label>
          <input type='password' name='password' id='password' autoComplete='off' required onChange={takingvalue}/>
        </div>
        <button className='subbtn'>Submit</button>
        <div className='thankdiv'>Thank you {user.username}</div>
      </form>
     

    </div>
  )
}
