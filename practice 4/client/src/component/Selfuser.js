import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {useParams,Link} from 'react-router-dom'
export default function Selfuser() {
   
   const [user,setuser]=useState([])
    const {email}=useParams()

    const getuser=async ()=>{
      try{

        const url=`http://localhost:3001/user/${email}`
        const res = await axios.get(url)
        await setuser(res.data)
      }catch(e){
        console.log(e)
      }
    }

useEffect(()=>{

     getuser()

})

  return (
    <div className='selfuser'>
        
       <h1> Hello {user.name}!!!, You are so smart </h1>
       <h1>Your email id is {user.email}, </h1>
       <h1>Your mobile number is {user.number} </h1>
       <h1>Your distract is {user.distrcit} </h1>
       <h1>Your uppazila is {user.uppazila} </h1>
       <h1>Your village is {user.village} </h1>
       <div>
        <Link to={user.name} state={{user}} className='link'>Update</Link>
       </div>
        
    </div>
  )
}
