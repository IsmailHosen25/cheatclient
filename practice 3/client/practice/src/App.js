import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Component/home/Home'
import Nav from "./Component/nav/Nav"
import Signup from "./Component/Signup/Signup"
import Country from "./Component/country/Country"
import People from './Component/people/People'
import Error from "./Error"
export default function App() {
  return (
     <>
     <Nav/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/country' element={<Country/>}/>
       <Route path='/people' element={<People/>}/>
       <Route path="*" element={<Error/>}/>
     </Routes>
     </>
 

  )
}

