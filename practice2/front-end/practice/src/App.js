import './App.css';
import { Routes,Route } from "react-router-dom"
import Nav from "./componnets/nav/Nav"
import Home from "./componnets/home/Home"
import About from './componnets/about/About';
import Contect from './componnets/contect/Contect';
import Signup from './componnets/signup/Signup';
import Login from './componnets/login/Login';
function App() {

  return(
    <> 
    <Nav ></Nav>
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/Signup' Component={Signup} ></Route>
      <Route path='/contect' Component={Contect}></Route>
      <Route path='/login' Component={Login}></Route>
    </Routes>
    <About></About>
    </>
  )
}

export default App;
