import React from 'react'
import {useParams} from 'react-router-dom'
export default function Selfuser() {
   
    const {name}=useParams()


  return (
    <div className='selfuser'>
        
       <h1> Hello {name.toLowerCase()}!!! <br/> You are so smart </h1>
        
        
    </div>
  )
}
