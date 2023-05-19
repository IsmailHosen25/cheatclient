import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom"


// Components start


import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import Ragistration from "./components/Ragistration"
import Login from './components/Login';

// Components end

function App() {
  return (
   <>
    <Nav/>
    <Routes>
          
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/Contect" element={<Contect/>}/>
      <Route path='/ragistration' element={<Ragistration/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>

   </>
  );
}

export default App;
