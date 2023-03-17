import React, { useState } from 'react'
import axios from "axios"
import "./signup.css"
import { useNavigate } from 'react-router-dom'
export default function Ragistion() {
	const navigate =useNavigate()
	const [user, setuser]=useState({
		name:"",email:"",mobile:"",password:""
	})
	const userchinging =(e)=>{
           setuser({...user,[e.target.name]:e.target.value})
	}
	const signpost= async ()=>{
		try{
			await  axios.post("http://localhost:4005/login",user)
			.then(res => console.log(res))
		}catch(error){
			console.log(error)
		}
      
	}

	const signup=async()=>{
		await signpost()
	 alert("Successful")
	 navigate("/login")
	}
  return (
    <>
    <>
    <div className="containerd" >
	<div className="screen">
        <h2>Sign Here</h2>
		<div className="screen__content">
			<form className="login" onSubmit={signup}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" name='name' placeholder="Name" required onChange={userchinging} value={user.name}/>
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" name='email' placeholder="Email" required onChange={userchinging} value={user.email}/>
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="number" className="login__input" name='mobile' placeholder="Mobile" required  onChange={userchinging} value={user.mobile}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name='password' placeholder="Password" required onChange={userchinging} value={user.password}/>
				</div>		
				<button className="button login__submit" type='submit'>
					<span className="button__text" >Sign Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
			</button>		
			</form>
		</div>	
	</div>
</div>
    </>
    </>
  )
}
