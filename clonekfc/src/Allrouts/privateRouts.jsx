import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Private({children}){
    let {AuthState}=useContext(AuthContext)
    if(AuthState.isAuth){
        
        return children
    }
    else{
        alert("please login first")
       return (<Navigate to="/signup" />)
    }
}