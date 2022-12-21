
import axios from "axios"
export function Getdata({type}){
    return axios(`https://mkibap.onrender.com/menudata`,{
        params:{
            type:type
        }
    })
}
