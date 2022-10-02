import {Box, Button, Center, Flex, Image} from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Bill from "../Components/CartPageComponent/cartBill"
import CartRow from "../Components/CartPageComponent/CartRows"
import { CartContext } from "../Context/CartContext"
function CartPage(){
    let {state,dispatch}=useContext(CartContext)

    if(state.Cart.length===0){
        return(
            <Box position="relative" >
                <Center>
                <Image  src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" />
               <Box pos={"absolute"}><Link to="/menu"><Button >Start order</Button></Link></Box>
                </Center>
            </Box>
        )
    }
    return(<Box>
        <Flex w={"85%"} m="auto" gap={10}>
            <Box w="65%">
            {state.Cart.map((el)=><CartRow {...el} key={el._id} />)}
            <Flex justifyContent={"space-between"} m={5}>
                <Button  variant='link' onClick={()=>dispatch({type:"reset"})}>Remove All</Button>
                <Link to="/menu"><Button variant='outline' borderRadius={"full"}>Add More Menu</Button></Link>
            </Flex>
            </Box>
            <Box w="30%">
                <Bill {...state} />
            </Box>
        </Flex>
    </Box>)
}
export default CartPage