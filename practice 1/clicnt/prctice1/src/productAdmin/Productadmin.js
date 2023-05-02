import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./productadmin.css"
// import axios from "axios"


export default function Productadmin() {
  const Navigate=useNavigate()
  const [padd ,setpadd]=useState({
    title:"",code:"",price:""
  })
  var name,value
  const producdchange =(e)=>{
   name=e.target.name;
   value=e.target.value;

   setpadd({...padd ,[name]:value})
  }
const postData=async(e)=>{
  e.preventDefault()
  const {title,code,price}=padd;
  const res= await fetch("http://localhost:4001/product", {
   method:"POST",
   headers:{
     "content-Type":"application/json"
   },
   body:await JSON.stringify({
     title,code,price
   })
  });
 const data=await res.json()
 if(data.status=== 422 || !data){
  alert("product does not added")
 }
 else{

  alert("product added")
  Navigate("/")
 }
}
// const postData= async ()=>{
//   try{
//     await axios.post("http://localhost:4001/product",padd)
//   }catch(error){
//     console.log(error)
//   }
    
// }
const show =()=>{

}
  return (
    <>   <form method='POST'>
    <div className="htmlForm">
    <div className="title">Welcome</div>
    <div className="input-container ic1">
      <input id="product" className="input" name='title' type="text" placeholder=" " value={padd.title} onChange={producdchange}/>
      <div className="cut"></div>
      <label htmlFor="product" className="placeholder">Product title</label>
    </div>
    <div className="input-container ic2">
      <input id="Productcode" className="input" name="code" type="text" placeholder=" " value={padd.code} onChange={producdchange}/>
      <div className="cut"></div>
      <label htmlFor="Productcode" className="placeholder">Product Code</label>
    </div>
    <div className="input-container ic2">
      <input id="price" className="input" name="price" type="text" placeholder=" " value={padd.price}  onChange={producdchange}/>
      <div className="cut cut-short"></div>
      <label htmlFor="price" className="placeholder">Price: </label>
    </div>
    <button type="text" className="submit" onClick={postData}>submit</button>
  </div>
  </form> 
  <button className='btn' onClick={show}>See The Product</button>
    </>
  )
}
