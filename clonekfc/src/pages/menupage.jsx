import { useState } from "react"
import { useEffect } from "react"
import { Getdata } from "../api/getdata"

export default function Menu(){
    let[data,setdata]=useState([])
    useEffect(()=>{
        Getdata({type:"chicken"}).then((res)=>setdata(res))
    },[])
    return(<div>

    </div>)
}