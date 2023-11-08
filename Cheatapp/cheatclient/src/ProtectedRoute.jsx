import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProtectedRoute({Components}) {
    const navigate=useNavigate()
    useEffect(()=>{
        if(false){
            navigate("/login")
        }
    })
  return (

        <Components/>
    
  )
}
