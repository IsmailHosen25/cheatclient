// import {useContext} from "react"
// import { userContext } from "../App"
import { Outlet,Navigate } from "react-router-dom"
export default function PrivateOutlet(){
    // const {state,dispatch}=useContext(userContext)
    let login=localStorage.getItem("login")
    if(login){
        return  <Outlet/>
    }
    else{
       return  <Navigate to="/login"/>
    }

}