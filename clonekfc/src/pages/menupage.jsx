import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Getdata } from "../api/getdata"
import Menucard from "../Components/menupagecomponents/menucard"
import MenuCategory from "../Components/menupagecomponents/menucatagories"
import { AuthContext } from "../Context/AuthContext"

export default function Menu(){
    let {AuthState,AuthDispatch}=useContext(AuthContext)
    let[data,setdata]=useState([])
    let [launch,setlaunch]=useState([])

    let [boxmeals,setboxmeals]=useState([])
    let [burger,setburger]=useState([])
    let [biryani,setbiryani]=useState([])
    const SN = useRef(null)
    const LH = useRef(null)
    const HD = useRef(null)
    const BL = useRef(null)
    const BS = useRef(null)
    const BBS = useRef(null)
    const executeScroll = (arg) =>{
        switch(arg){
            case "HOT DEALS":HD.current.scrollIntoView({behavior: "smooth"});break;
            case "HOT LAUNCHES":LH.current.scrollIntoView({behavior: "smooth"}); break;
            case "BOX MEALS":BL.current.scrollIntoView({behavior: "smooth"}); break;
            case "BURGERS": BS.current.scrollIntoView({behavior: "smooth"});break;
            case "BIRYANI BUCKETS":BBS.current.scrollIntoView({behavior: "smooth"});break;
            case "SNACS":SN.current.scrollIntoView({behavior: "smooth"}); break;
            default  :return;
        }
    } 
    let {id}=useParams()
    useEffect(()=>{
        AuthDispatch({type:"isloding"})
        Getdata({type:"chicken"}).then((res)=>{setdata(res.data);
            Getdata({type:"launch"}).then((res)=>{setlaunch(res.data);
                Getdata({type:"boxmeals"}).then((res)=>{setboxmeals(res.data);
                    Getdata({type:"burger"}).then((res)=>{
                        setburger(res.data);
                        Getdata({type:"biryani"}).then((res)=>{setbiryani(res.data);executeScroll(id);
                        AuthDispatch({type:"removeLoding"})})
                    })}) })})
         },[id,AuthDispatch])
   
    return(<Flex w={"80%"} m="auto">
        <Box position="sticky" top={"150px"} w={"60%"}>
        <Box  position="sticky" top={"150px"} w={"100%"} >
        <MenuCategory scroll={executeScroll}/>

        </Box>
        </Box>
        <Box>
        <Box  h="150px"  ref={HD} display={"flex"} alignItems="center" justifyContent={"left"}><Text as={"b"}  fontSize={"22px"} >CHICKEN BUCKETS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"}  >
            {AuthState.loding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {data&&data.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid >
        <Box  h="150px"  ref={LH} display={"flex"} alignItems="center" justifyContent={"left"}><Text as={"b"}  fontSize={"22px"} >HOT LAUNCHS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {AuthState.loding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {launch&&launch.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Box  h="150px"  display={"flex"} alignItems="center" justifyContent={"left"} ref={BL}><Text as={"b"}  fontSize={"22px"} >BOX MEALS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {AuthState.loding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {boxmeals&&boxmeals.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Box  h="150px"  display={"flex"} alignItems="center" justifyContent={"left"} ref={BS}><Text as={"b"}  fontSize={"22px"} >BURGERS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {AuthState.loding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {burger&&burger.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Text ></Text>
        <Box  h="150px"  display={"flex"} alignItems="center" justifyContent={"left"} ref={BBS}><Text as={"b"}  fontSize={"22px"} >BIRYANI BUCKETS</Text></Box>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} >
        {AuthState.loding&&<Image src="https://online.kfc.co.in/KFC_Loader_Gif.gif"/>}
            {biryani&&biryani.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        </Box>
    </Flex>)
}
