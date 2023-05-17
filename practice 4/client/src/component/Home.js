import React from 'react'

export default function Home() {
const hello=()=>{

    if(localStorage.getItem("auth")==="true"){
      localStorage.setItem("auth",false)
    }else{
      localStorage.setItem("auth",true)
    }
}


  return (
    <div className='home'>
      <h1>Welcome to the Home Page</h1>
      <button onClick={hello}>click</button>
    </div>
  )
}
