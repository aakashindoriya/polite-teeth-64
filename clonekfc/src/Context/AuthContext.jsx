import { useReducer } from "react";
import { createContext } from "react";

export let AuthContext=createContext()
let AuthObj={
    isAuth:false,
    token:null,
    loding:false
}
function reducer(state,action){
switch(action.type){
  case "loginsucess":return {...state,isAuth:true,token:action.paylode};
  case "loginfailed":return {...state,isAuth:false,token:null}
  case "isloding":return {...state,loding:true}
  case "removeLoding":return{...state,loding:false}
  default:return state
}
}
export default function AuthContextProvider({children}){
 let [AuthState,AuthDispatch]=useReducer(reducer,AuthObj)
    return (
        <AuthContext.Provider value={{AuthState,AuthDispatch}}>{children}</AuthContext.Provider>
    )
}