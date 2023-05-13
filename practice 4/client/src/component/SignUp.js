import React, { useState } from 'react'
import "../App.css"
import { useNavigate} from 'react-router-dom'
import axios from "axios"


export default function SignUp() {
 
  const navigate=useNavigate()


    const [user,setuser]=useState({
      name:"",
      email:"",
      number:"",
      password:"",
      distrcit:"",
      uppazila:"",
      village:""

    })

    const takingvalue=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    
    const submituser = async(e)=>{
        e.preventDefault ()
  
          const{name,email,password,number,distrcit,uppazila,village}=user
         const res=  await axios.post("http://localhost:3001/user" ,{
            name,
            email,
            number,
            password,
            distrcit,
            uppazila,
            village
        })
      if(res.data==="exist"){
        alert("You are alrady vaild user")
        navigate("/login")
      }
      else{
        alert("Thank you for Sign Up")
        navigate(`/${email}`)
      }  
    }



  return (
    <div className='signupform'>

      <form onSubmit={submituser}>
        <h1>Sign Up</h1>
        <div>
          <label>
            Enter Your Name: 
          </label>
          <input type='text' name='name' id='name' autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Email: 
          </label>
          <input type='email' name='email' id='email'  autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Number: 
          </label>
          <input type='number' name='number' id='number'  autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Password: 
          </label>
          <input type='password' name='password' id='password' autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
           Enter your distrcit: 
          </label>
          <input type='text' name='distrcit' id='distrcit' autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Uppazila: 
          </label>
          <input type='text' name='uppazila' id='uppazila' autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Your Village: 
          </label>
          <input type='text' name='village' id='village'  autoComplete='off'  onChange={takingvalue}/>
        </div>
        <button className='subbtn'>Submit</button>
      </form>


    </div>
  )
}
