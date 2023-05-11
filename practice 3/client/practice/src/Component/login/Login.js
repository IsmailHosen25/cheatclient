import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
export default function Login() {
    const navigate=useNavigate()
    const url="http://localhost:3010/user/all";
    const [userinfo, setuserinfo]=useState([])


    const [login ,setLogin]=useState({
        email:"",password:""
    })
    const handlevalue=(e)=>{
          setLogin({...login,[e.target.name]:e.target.value})
    }
    const postData=async (e)=>{
        e.preventDefault()
        try{ 
            const {email,password}=login
            const findemail= await userinfo.filter((item)=>{ return item.email === email})
           if(findemail.length===0){
            alert("Sign Up first")
            navigate("/signup")
           }
           else{
            const varifypassword = await findemail.filter((item)=>{return item.password === password})
            if(varifypassword.length===0){
                alert("password did not match")
            }
            else{
                alert("Welcome again")
                navigate("/people")
            }

           }
                
           
        }
        catch(error){
           console.log(error)
        }
    }
    const fatchapi=async(url)=>{
            try{
             const res= await fetch(url)
             const data=await res.json()
             setuserinfo(data)

            }catch(error){
              console.log(error)
            }
    } 
    useEffect(()=>{
        fatchapi(url)
    },[])
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
