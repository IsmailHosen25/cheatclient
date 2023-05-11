import React, { useEffect, useState} from 'react'
import './country.css'
export default  function  Country()  {
  const [country, setcountry]= useState([]);
  useEffect( ()=>{
  fetch("https://restcountries.com/v3.1/all")
    .then(res =>res.json())
    .then(res => setcountry(res))
},[] )
  return (
    <div className='maindiv'>
      {country.map(item =>{ return(
      <div className='div'>
        <img src={item.flags.png} className='img'/>
        <h2 className='contname'>{item.name.common}</h2>
        <p className=' contarea'>Area: {item.area}</p>
        </div>
        )})}
    </div>
  )
}
