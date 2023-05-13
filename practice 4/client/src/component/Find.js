import React, { useState } from 'react'

export default function Find() {


  const [find , setfind]=useState({
    name:'',
    distrcit:'',
    uppazila:'',
    village:''
  })

const takingvalue =(e)=>{
      setfind({...find, [e.target.name]:e.target.value})
}
const findone=(e)=>{
    e.preventDefault()
}
console.log(find)
  return (
    <div className='findform'>
     
     <form  onSubmit={findone} >
     <h1>Appoint</h1>
      <div>
          <label>
            Enter Your Name: 
          </label>
          <input type='text' name='name' id='name' value={find.name} autoComplete='off' required onChange={takingvalue}/>
      </div>
     <div>
          <label>
           Enter Hiring distrcit: 
          </label>
          <input type='text' name='distrcit' id='distrcit' value={find.distrcit} autoComplete='off' required onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Hiring Uppazila: 
          </label>
          <input type='text' name='uppazila' id='uppazila' value={find.uppazila} autoComplete='off' onChange={takingvalue}/>
        </div>
        <div>
          <label>
            Enter Hiring Village: 
          </label>
          <input type='text' name='village' id='village' value={find.village} autoComplete='off' required onChange={takingvalue}/>
        </div>
        <button className='subbtn'>Submit</button>

     </form>


    </div>
  )
}
