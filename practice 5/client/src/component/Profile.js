import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import {userContext} from "../App"
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate=useNavigate()
   const {state, dispatch }=useContext(userContext)
    const [user, setUser]=useState([])
    let login=localStorage.getItem("login")
    const profile= async()=>{
          try{
            const url="http://localhost:3003/user/profile"
            let token=window.localStorage.getItem("token")
            const res=await axios.get(url,{
                headers:{
                    Authorization: token
                }
            } )
            const data=res.data.data
            if(data == "token expired"){
              window.localStorage.clear()
              dispatch({type:"login", payload:login})
              navigate("/login")
            }else{
              setUser(data)
              console.log(data)
            }



          }catch(e){
               console.log(e)
          }
    }
    const logout=()=>{
        window.localStorage.clear()
        dispatch({type:"login", payload:login})
        navigate("/login")
    }
    useEffect(()=>{
       profile()
    },[])

  return (
    <div>

<h1>your user name: {user.username} </h1>
<h1>your email: {user.email}</h1>
<button onClick={()=>logout()}>logout</button>
    </div>
  )
}

