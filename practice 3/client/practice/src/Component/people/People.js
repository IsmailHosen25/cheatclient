import React, { useEffect , useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import axios from 'axios';
import "./people.css";
export default function People() {
  const navigate =useNavigate()

   const [user, setuser]=useState([])
   const fatchapi = async ()=>{
       try{ 
           const url="http://localhost:3010/user/all";
           const res = await axios.get(url)
           setuser(res.data)
       }catch(error){
        console.error(error)
       }
   }
    useEffect( ()=>{
       fatchapi()
    },[])

    const deleatuser = async (email)=>{
           try{
            alert("are you sure you want to deleat?")
            const url=`http://localhost:3010/user/all/${email}`;
            await axios.delete(url)
            fatchapi()
           }
           catch(e){
            console.log(e)
           }
    }
  return (
    <div className='table'>
        <table className='tablehead'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Update</th>
                <th>Deleat</th>
               
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
                 <th><Link to={name} state={{name,email,number}} className='link'>Update</Link></th>
                 <th><button onClick={async ()=>await deleatuser(email)} className='btn'>Deleat</button></th>
                 {/* <th><Link to={name} ></Link></th> */}
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
