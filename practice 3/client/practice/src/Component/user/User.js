import React from 'react'
import {useLocation} from "react-router-dom"
import "./user.css"
export default function User() {
    const location=useLocation()
  return (
    <div className='user'>
        <h2>Name: {location.state.name}</h2>
        <h2>Email: {location.state.email}</h2>
        <h2>Number: {location.state.number}</h2>
    </div>
  )
}
