import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Updateuser() {
    const location=useLocation()
    const navigate=useNavigate()


    const [user,setuser]=useState({
        name:location.state.user.name,
        number:location.state.user.number,
        distrcit:location.state.user.distrcit,
        uppazila:location.state.user.uppazila,
        village:location.state.user.village
  
      })




const takingvalue=(e)=>{
    setuser({...user, [e.target.name]:e.target.value})

}
const submituser =async (e)=>{
    e.preventDefault ()
    const{name,number,distrcit,uppazila,village}=user
    const res=  await axios.put(`http://localhost:3001/user/${location.state.user.email}` ,{
       name,
       number,
       distrcit,
       uppazila,
       village
   })
 if(res.data==="did not updated"){
   alert("Please try again")
   navigate(`/${location.state.user.email}`)
 }
 else{
   alert("Updated")
   navigate(`/${location.state.user.email}`)
 }  

}
  return (
         <div className='signupform'>

<form onSubmit={submituser}>
  <h1>Update</h1>
  <div>
    <label>
      Enter Your Name: 
    </label>
    <input type='text' name='name' id='name'  autoComplete='off' value={user.name}  required onChange={takingvalue}/>
  </div>
  <div>
    <label>
      Enter Your Email: 
    </label>
    <input type='email' name='email' id='email' value={location.state.user.email}  autoComplete='off' required/>
  </div>
  <div>
    <label>
      Enter Your Number: 
    </label>
    <input type='number' name='number' id='number' value={user.number} autoComplete='off' required onChange={takingvalue}/>
  </div>
  <div>
    <label>
     Enter your distrcit: 
    </label>
    <input type='text' name='distrcit' id='distrcit' autoComplete='off' value={user.distrcit} required onChange={takingvalue}/>
  </div>
  <div>
    <label>
      Enter Your Uppazila: 
    </label>
    <input type='text' name='uppazila' id='uppazila' autoComplete='off' value={user.uppazila} required onChange={takingvalue}/>
  </div>
  <div>
    <label>
      Enter Your Village: 
    </label>
    <input type='text' name='village' id='village'  autoComplete='off' value={user.village}  onChange={takingvalue}/>
  </div>
  <button className='subbtn'>Update Now</button>
</form>
    </div>
  )
}
