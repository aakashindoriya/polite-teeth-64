
import axios from "axios"
export function Getdata({type}){
    return axios(`https://aakashbackend.onrender.com/menudata`,{
        params:{
            type:type
        }
    })
}
