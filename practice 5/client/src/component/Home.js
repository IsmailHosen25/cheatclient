import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
export default function Home() {
  const navigate=useNavigate()
  let islogin=window.localStorage.getItem("logined")
  return (
    <div className='home'>
      <h1>Welcome to the Home Page</h1>
    </div>
  )
}
