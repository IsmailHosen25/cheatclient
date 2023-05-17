import {Outlet,Navigate} from "react-router-dom"
import useAuth from "./useAuth"
export default function Private() {
    const auth = useAuth();
    if(auth==="true"){
    return <Outlet/>
  }
    else{
    return   <Navigate to="/login"/>
    }
  
}
