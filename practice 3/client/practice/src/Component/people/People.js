import React, { useEffect , useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./people.css";
export default function People() {
  const navigate =useNavigate()

   const [user, setuser]=useState([])
   const url="http://localhost:3005/";
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
                <th>Age</th>
            </tr>
          </thead>
          <tbody>
           {user.map((item)=>{
            return(
                <tr>
                 <th>{item.name}</th>
                 <th>{item.age}</th>
                </tr>
            )
            })}
            </tbody>
        </table>
        <button onClick={()=>{
   navigate("/")
        }} className='btn'>Home</button>
    </div>
  )
}
