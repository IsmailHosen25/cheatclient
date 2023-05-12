import React, {  useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
export default function Login() {
    const navigate=useNavigate()
    const url="http://localhost:3010/user/all/login";
    const [login ,setLogin]=useState({
        email:"",password:""
    })
    const handlevalue=(e)=>{
          setLogin({...login,[e.target.name]:e.target.value})
    }
    const postData=async (e)=>{
        e.preventDefault()
       const {email,password}=login
        try{ 
           await axios.post(url,{
                email, password
            })
           navigate("/userlist")
        }
        catch(error){
           console.log(error)
        }
    }
  return (
    <div className='form'>
        <form onSubmit={postData}>
            <div>
                <label>
                    Enter your Email:
                </label>
                <input type='email' name='email' id='email' autoComplete='off'  onChange={handlevalue} />
            </div>
            <div>
                <label>
                    Enter your password:
                </label>
                <input type='texr' name='password' id='password' autoComplete='off'  onChange={handlevalue} />
            </div>
            <button className='subbtn' >Login in</button>
        </form>
    </div>
  )
}
