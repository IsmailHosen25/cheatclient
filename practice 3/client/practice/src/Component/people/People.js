import React, { useEffect , useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import "./people.css";
export default function People() {
  const navigate =useNavigate()

   const [user, setuser]=useState([])
   const url="http://localhost:3010/user/all";
   const fatchapi = async (url)=>{
       try{
            const res= await fetch(url)
            const data = await res.json()
            setuser(data)
       }catch(error){
        console.error(error)
       }
   }
    useEffect( ()=>{
         fatchapi(url)
    },[])
  return (
    <div className='table'>
        <table className='tablehead'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>opperssion</th>
            </tr>
          </thead>
          <tbody>
           {user.map((item,index)=>{
            const {name,email,number}=item
            return(
                <tr key={index+1}>
                 <th>{name}</th>
                 <th>{email}</th>
                 <th>0{number}</th>
                 <th><Link to={name} state={{name,email,number}} className='link'>More info</Link></th>
                </tr>
            )
            })}
            </tbody>
        </table>
        <button onClick={()=>{
   navigate("/signup")
        }} className='btn'>Add user</button>
    </div>
  )
}
