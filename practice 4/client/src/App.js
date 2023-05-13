import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import {Routes, Route} from "react-router-dom"
import SignUp from './component/SignUp';
import Login from './component/Login';
import Find from './component/Find';
import Contect from './component/Contect';
import Error from './component/Error'
import Selfuser from './component/Selfuser'
import About from './component/About';
import Udtyoursels from "./component/Updateuser"
function App() {
  return (
  <>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contect' element={<Contect/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/find' element={<Find/>} />
    <Route path='/:email' element={<Selfuser/>}/>
    <Route path='/:email/:name' element={<Udtyoursels/>}/>
    <Route path='*' element={<Error/>} />
   </Routes>
  </>
  );
}

export default App;
