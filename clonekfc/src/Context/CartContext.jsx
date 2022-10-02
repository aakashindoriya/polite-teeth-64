import { useReducer} from "react";
import { createContext } from "react";

export let CartContext=createContext()
let initialObj={
    Cart:[],
    CartTotal:0,
    noOfItems:0
}
function reducer(state,action){
    console.log(action)
   switch(action.type){
    case "addToCart":
        let arr=[...state.Cart,action.paylode];
        let total=arr.reduce((ac,el)=>{return ac+el.Quantity*+el.price},0);
        return {...state,Cart:arr,CartTotal:total};
    case "remove":
       
        let newarr=state.Cart.filter((el)=>el._id!==action.paylode);
        let sum=newarr.reduce((ac,el)=>{return ac+el.Quantity*+el.price},0)||0;
        return {...state,Cart:newarr,CartTotal:sum};
    case "quantity":let Total=action.paylode.reduce((ac,el)=>{return ac+el.Quantity*+el.price},0)||0;
        return {...state,Cart:action.paylode,CartTotal:Total};
    case "reset":return initialObj;
    default:return state;
   }
}
export default function CartContextProvider({children}){
    let [state,dispatch]=useReducer(reducer,initialObj)
    return (
        <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
    )
}