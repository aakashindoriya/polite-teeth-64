
import axios from "axios"
export function Getdata({type}){
    return axios(`http://localhost:3000/menudata`,{
        params:{
            type:type
        }
    })
}