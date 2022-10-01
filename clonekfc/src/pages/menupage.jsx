import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { Getdata } from "../api/getdata"
import Menucard from "../Components/menupagecomponents/menucard"
import MenuCategory from "../Components/menupagecomponents/menucatagories"

export default function Menu(){
    let[data,setdata]=useState([])
    let [launch,setlaunch]=useState([])
    // let [snacks,setsnacks]=useState([])
    // let [beverages,setbeverages]=useState([])
    let [boxmeals,setboxmeals]=useState([])
    let [burger,setburger]=useState([])
    // let [stayhome,setstayhome]=useState([])
    let [biryani,setbiryani]=useState([])
    // let [rolls,setrolls]=useState([])
    const SN = useRef(null)
    const LH = useRef(null)
    const HD = useRef(null)
    const BL = useRef(null)
    const BS = useRef(null)
    const BBS = useRef(null)
    const executeScroll = (arg) =>{
        switch(arg){
            case "HOT DEALS":HD.current.scrollIntoView();break;
            case "HOT LAUNCHES":LH.current.scrollIntoView(); break;
            case "BOX MEALS":BL.current.scrollIntoView(); break;
            case "BURGERS": BS.current.scrollIntoView();break;
            case "BIRYANI BUCKETS":BBS.current.scrollIntoView();break;
            case "SNACS":SN.current.scrollIntoView(); break;
            default  :SN.current.scrollIntoView()
        }
    } 

    useEffect(()=>{
        Getdata({type:"chicken"}).then((res)=>setdata(res.data))
        Getdata({type:"launch"}).then((res)=>setlaunch(res.data))
        Getdata({type:"boxmeals"}).then((res)=>setboxmeals(res.data))
        Getdata({type:"burger"}).then((res)=>setburger(res.data))
        Getdata({type:"biryani"}).then((res)=>setbiryani(res.data))

        
    },[])
    console.log(data)
    return(<Flex w={"80%"} m="auto">
        <Box w={"60%"} position="sticky" top={"101px"}>
        <MenuCategory scroll={executeScroll}/>

        </Box>
        <Box>
        <Text >CHICKEN BUCKETS</Text>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} ref={HD} >
            {data&&data.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid >
        <Text>HOT LAUNCHS</Text>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} ref={LH}>
            {launch&&launch.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Text>BOX MEALS</Text>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} ref={BL}>
            {boxmeals&&boxmeals.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Text>BURGERS</Text>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} ref={BS}>
            {burger&&burger.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        <Text>BIRYANI BUCKETS</Text>
        <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={6} bg={"rgb(248,247,245)"} ref={BBS}>
            {biryani&&biryani.map((el)=>{
                return(<Menucard {...el} />)
            })}
        </Grid>
        </Box>
    </Flex>)
}