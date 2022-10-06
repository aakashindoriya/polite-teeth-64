import { Box, Button, Center, Divider, Image, Input,  Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from  "axios"
import { useState } from "react";
let obj={
    name:"",
    email:"",
    password:""
}
function GetData(){
return axios("http://localhost:3000/users")
}
function SetData(data){
    return axios.post("http://localhost:3000/users",data)
}
export default function Signup(){
    let navigate=useNavigate()
    let [data,setdata]=useState(obj)
    let [users,SetUsers]=useState([])
    useEffect(()=>{
        GetData().then((res)=>SetUsers(res.data))

    },[])
    function HandleSignIn(){
        if(users.length!==0){
            let arr=users.filter((el)=>el.email===data.email)
        if(arr.length===0){
            SetData(data).then((res)=>console.log(res)).catch((res)=>console.log(res))
            navigate("/login")
        }
        else{
            alert("account already exist")
        }
        
        }else{
            SetData(data).then((res)=>console.log(res)).catch((res)=>console.log(res))
            navigate("/login")
        }

    }
    function HandleForm(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
 return (
    <Box>
        <Box w="450px" m={"auto"} display="grid" gap={5}>
            <Box as="b" fontSize={"14px"}>Sign In / Sign up</Box>

        
        <Center>
        <Box>
            <Image src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2022_08_04/images/KFC_logo.svg" />
        </Box>
        </Center>
        <Box>
            <Text as={"b"} fontSize={"xl"}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</Text>
        </Box>
        <Box>
        <Stack spacing={3}>
        <Input variant='flushed' placeholder='Name' name="name" value={data.name} onChange={(e)=>HandleForm(e)} />
        <Input variant='flushed' placeholder='Email' name="email" value={data.email} onChange={(e)=>HandleForm(e)}/>
        <Input variant='flushed' placeholder='Password' name="password" type="password" value={data.password} onChange={(e)=>HandleForm(e)}/>

        </Stack>
        </Box>
        <Box>
        <Text fontSize={"12px"}>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text>
        </Box>
        <Divider />
        <Box w="full">
            <Button w="full" variant='outline' onClick={HandleSignIn}>sign in</Button>
        </Box>
        <Box> 
        <Text fontSize={"12px"}>Already have an account ? <Link to="/login" >Login</Link></Text>
        </Box>
        </Box>
    </Box>
 )
}