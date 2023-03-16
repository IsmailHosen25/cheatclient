import React from 'react';
import { useState,useEffect } from "react" 
import {useNavigate} from "react-router-dom"
import "./products.css";
const url="http://localhost:4001/product";



export default function Product() {
  const Navigate=useNavigate()
  const [product, setproduct]= useState([]);
useEffect(()=>{
  fetch(url,{
    method:"GET"
  })
  .then(res =>res.json())
  .then(product => setproduct(product))
},[])

const addproducts=()=>{
 Navigate("/admin")
}
  return (
    <>
    <div className='flex'>{product.map((item)=>{
      return(
        <>
        <div className='product'>
          <h1 className='ptitle'>{item.title}</h1>
          <p className='code'>{item.code}</p>
          <h3 className='price'>{item.price}</h3>
        </div>
        </>
      )
    })}</div>
    <button className='btn' onClick={addproducts}>Add product</button>
    </>
  )
}
