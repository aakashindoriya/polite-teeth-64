import {Box, Button, Center, Divider, Flex, Image, Link, Spacer, Text} from "@chakra-ui/react"
export default function Navbar(){
    return (
        <Box>
            <Box>hello</Box>
            <Divider></Divider>
            <Flex w={"80%"} justifyContent={"space-between"} h={"100px"} m={"auto"} >
          <Center>
          <Flex gap={6}>
                <Link>
                        <Image h={"23px"} w="73px" src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"  alt="Kfc logo"/>
                </Link>
                <Spacer />
                <Link>
                <Button variant='link'><Text as="b">Menu</Text></Button>
                </Link>
                <Spacer />
                <Link>
                <Button variant='link'><Text as="b">Deals</Text></Button>
                </Link>

                </Flex>
          </Center>
                <Center>
                <Flex gap={3}>
                   <Center>
                   <Flex gap={1}>
                        <Image h={"20px"} w="20px" src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"/>
                        <Link>
                        <Button variant='link'><Text as="b">Account</Text></Button>
                        </Link>
                    </Flex>
                   </Center>
                   <Center height='50px'>
                    <Divider orientation='vertical' height='20px' />
                    </Center>
                    <Flex>
                        <Link>
                            <Flex gap={1}>
                            <Button variant='link'>pr</Button>
                            <Box  w={"51px"} pos={"relative"} m={"-1"}>
                                <Center>
                                <Image src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="bucket"/>
                                <Box pos={"absolute"} >q</Box>
                                </Center>
                            </Box>
                            </Flex>
                        </Link>
                    </Flex>
                </Flex>
                </Center>
            </Flex>
        </Box>
    )
}