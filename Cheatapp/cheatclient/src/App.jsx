import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login'
import Sign from './Components/Sign'
import ProtectedRoute from './ProtectedRoute'
import Profile from "./Components/Profile"
import ErrorPage from "./Components/ErrorPage"
import Home from './Components/Home'

function App() {
 

  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>} />
       <Route path='/sign' element={<Sign/>}/>
       <Route path="/profile/:id" element={<ProtectedRoute Components={Profile}/>}/>
       <Route path='*' element={<ErrorPage/>}/>
     </Routes>
    </>
  )
}

export default App
