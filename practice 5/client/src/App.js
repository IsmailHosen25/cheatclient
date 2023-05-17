import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import {Routes, Route} from "react-router-dom"
import SignUp from './component/SignUp';
import Login from './component/Login';
import Contect from './component/Contect';
import Error from './component/Error'
import About from './component/About';
import Profile from './component/Profile';
import { createContext, useReducer } from 'react';
import {reducer,initialState} from "./Auth and Private/useReducer"
import PrivateOutlet from './Auth and Private/PrivateRoute';
export  const userContext=createContext()

function App() {
 
const [state, dispatch]=useReducer(reducer, initialState)
  return (
  <>
  <userContext.Provider value={{state, dispatch}}>

  <Nav/>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/*' element={<PrivateOutlet/>}>


        <Route path='profile' element={<Profile/>} />
        <Route path='contect' element={<Contect/>} />
       <Route path='about' element={<About/>} />

    </Route>

    <Route path='*' element={<Error/>} />
   </Routes>

  </userContext.Provider>

  </>
  );
}

export default App;
