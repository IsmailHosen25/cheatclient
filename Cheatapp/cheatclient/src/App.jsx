import './App.css'
import Login from './Components/Login'
import Sign from './Components/Sign'
import {Routes,Route} from "react-router-dom"
function App() {
 

  return (
    <>
     <Routes>
       <Route path='/login' element={<Login/>} />
       <Route path='/sign' element={<Sign/>}/>
     </Routes>
    </>
  )
}

export default App
