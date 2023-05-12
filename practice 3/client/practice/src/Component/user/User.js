import React, { useState } from 'react'
import {useLocation,useNavigate} from "react-router-dom"
import "./user.css"
import axios from 'axios'


export default function User() {


  const navigate=useNavigate()

  const location=useLocation()
    const [user ,setuser]=useState({
      name:location.state.name,
      email:location.state.email,
      number:location.state.number
      })
    const changeValu=(e)=>{

       setuser({...user, [e.target.name]:e.target.value})
       console.log(user)
    }
    const Updatedata= async (e)=>{
      e.preventDefault()
      try{ 
         const {name,email,number}=user
        const url=`http://localhost:3010/user/all/${email}`
        await axios.put(url,{name,number})
        alert("Your data is updated")
        navigate("/userlist")
      }catch(e){
           console.log(e)
      }
    }
    const cntchemail=()=>{
      alert("you can not change your email acount")
    }
  return (
    <div className='form' >
      <form onSubmit={Updatedata}>
          <div >
            <label>
              Name:
            </label>
            <input type='text'name='name' value={user.name} onChange={changeValu}/>
          </div>
          <div>
            <label>
              Email:
            </label>
            <input type='email' name='email' value={user.email} onChange={cntchemail}/>
          </div>
          <div>
            <label>
              Mobile Number:
            </label>
            <input type='number' name='number' value={user.number}  onChange={changeValu}/>
          </div>
          <button className='subbtn' >Sign up</button>
      </form>
      </div>
  )
}
