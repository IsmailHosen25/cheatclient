import React, { useEffect, useState } from 'react'
import {useSearchParams,useParams} from "react-router-dom"
import axios from "axios"
export default function Worker() {
    const {name}=useParams()
    const [searchparams, setsearchparams]=useSearchParams()
    const [worker,setworker]=useState({
        name:name,
        distrcit:searchparams.get("distrcit"),
        uppazila:searchparams.get("uppazila"),
        village:searchparams.get("village"),
    })

   const [scanworker,setscanworker]=useState([])

const displayworker=async ()=>{
    try{ 
        const {distrcit,uppazila,village}=worker
        const url='http://localhost:3001/worker'
        const res=await axios.post(url,{distrcit,uppazila,village})
         setscanworker(res.data)
    }catch(e){
        console.log(e)
    }


}
    useEffect(()=>{
        displayworker()
    })
  return (
    <div className='workermain'>
        <div className='table'>
             <h1>{worker.name.toLowerCase()} Those are ready for you.</h1>
             <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contect Number</th>
                    <th>distrcit</th>
                    <th>uppazila</th>
                    <th>village</th>
                    </tr>
                </thead>
                <tbody>
                {scanworker.map((item,index)=>{
                    return <>
                    <tr key={index+1}>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>0{item.number}</th>
                        <th>{item.distrcit}</th>
                        <th>{item.uppazila}</th>
                        <th>{item.village}</th>
                    </tr>
                    
                    </>
                })}
                </tbody>
            </table>
        </div>


    </div>
  )
}
