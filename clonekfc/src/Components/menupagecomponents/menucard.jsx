import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
export default function Menucard({image,title,price,desc}){
    return(
        <Box padding={6} gap={2} >
            <Image src={image}/>
           
            <Box alignItems="flex-start" display={"flex"} as="h2" mt='2'>
                <Text as="b" >{title}</Text>
            </Box>
            <Box>
                <Flex gap={1} mt='2'>
                    <Image src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"  />
                    <Text fontSize={"12px"}>Non Veg . serves</Text>
                </Flex>
            </Box>
            <Box alignItems="flex-start" display={"flex"} mt='2'>
                <Text as="b" >{price}</Text>
            </Box>
            <Box alignItems="flex-start" display={"flex"} mt='2' h={"75px"}>
                <Text fontSize={"14px"}>{desc}</Text>
            </Box>
            <Box alignItems="flex-start" display={"flex"} mt='2'>
                <Button zIndex={"10"} bg={"rgb(230,26,64)"} borderRadius='full' color={"white"}><Text>Add to cart</Text><Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" /></Button>
            </Box>
           
        </Box>
    )
} 