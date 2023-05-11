import React, { useState } from 'react'
import './signup.css'
export default function Signup() {
    const [user,setUser]=useState({
        name:"", age:""
    })
    let name,value;
    const handlevalue =(e)=>{
         name=e.target.name;
         value=e.target.value;
         setUser({...user, [name]:value})
    }
    const postData= async (e)=>{
        const {name,age}=user
        fetch("http://localhost:3005/",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name,age
            })
        })
    }
  return (
    <div className='form'>
        <form>
            <div>
            <label className='name'>
                Enter Your Name:
            </label>
            <input type='text' name='name' id='name' value={user.name} autoComplete='off' onChange={handlevalue}/>
            </div>
            <div> 
            <label id='age'>
                Enter Your age:
            </label >
            <input type='number' name='age' id='age' value={user.age} autoComplete='off' onChange={handlevalue}/>
            </div>
            <button onClick={postData} className='subbtn'>Submite</button>
        </form>
    </div>
  )
}

