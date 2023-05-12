import React, { useEffect, useState} from 'react'
import './country.css'
import axios from 'axios';
export default  function  Country()  {
  const [country, setcountry]= useState([]);
  const hello = async()=>{
        const countryName= await axios("https://restcountries.com/v3.1/all")
        setcountry(countryName.data)
  }
  useEffect(()=>{
       hello()
  },[])
  return (
    <div className='maindiv'>
      {country.map((item,index) =>{ return(
      <div className='div' key={index+1}>
        <img src={item.flags.png} className='img'/>
        <h2 className='contname'>{item.name.common}</h2>
        <p className=' contarea'>Area: {item.area}</p>
        </div>
        )})}
    </div>
  )
}
