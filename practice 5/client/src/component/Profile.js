import axios from 'axios'
import React, { useEffect, useState,useContext,useRef } from 'react'
import {userContext} from "../App"
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate=useNavigate()
  const inputuseref=useRef()
  const [image,setimage]=useState('')
   const {state, dispatch }=useContext(userContext)
    const [user, setUser]=useState([])
    const profile= async()=>{ 
          try{
            const url=`http://localhost:3003/user/profile`
            const token=window.localStorage.getItem("token")
            const res=await axios.get(url,{
                headers:{
                    Authorization: token
                }
            } )
            const data=res.data.data
            if(data === "token expired"){
            let login=  window.localStorage.clear()
              dispatch({type:"login", payload:login})
              navigate("/login")
            }else{
              setUser(data)
            }



          }catch(e){
               console.log(e)
          }
    }
    const logout=()=>{
      const login = window.localStorage.clear()
        dispatch({type:"login", payload:login})
        navigate("/login")
    }
    const inputdir=()=>{
      inputuseref.current.click()
    }
    useEffect(()=>{
       profile()
    },[])
    const getimage=async()=>{
      if(image){
        const formdata=new FormData()
        formdata.append("file", image)
        await axios.put(`http://localhost:3003/user/profile/${user.email}`,formdata)
        profile()
      }}
    useEffect( ()=>{
      getimage()
    },[image])
  return (
    <div className='profile'>
      <div className='profile-in'>

          <input type='file' name='file' id='file' required ref={inputuseref} onChange={(e)=>{setimage(e.target.files[0])}}/>

    <div className='img'onClick={inputdir}>
       <img src={user.image} alt='Edit'/>
    </div>

     <h1>Name: {user.username} </h1>
     <h1>Your Email: {user.email}</h1>
     <button onClick={()=>logout() } className='logoutbtn'>logout</button>
     </div>
    </div>
  )
}

