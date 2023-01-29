import { Box, Container, Divider, Flex, HStack, IconButton, Image, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { TbMessageCircle2, } from "react-icons/tb"
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs"
import { SlPaperPlane, } from "react-icons/sl"
import { VscBookmark, } from "react-icons/vsc"
const SinglePost = () => {
    const [liked, setliked] = useState(false)
    const handleLikes = () => {
        setliked(!liked)
    }
    console.log(liked);
    return (
        <Box
            // border={"1px solid gray"}
            w="100%" mt="10" >
            <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                <HStack spacing="5" ml="2" >
                    <Image w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                    <Text fontWeight={"600"} >User Name</Text>
                </HStack>
                <IconButton fontSize="25px" background={"none"} _hover={{ background: "none" }} color="black" icon={<BiDotsHorizontalRounded />} />
            </Flex>
            <Image borderRadius="2px" my="2" border="0.2px solid #f5eeed" w="100%" h="80vh" objectFit="cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6slsFxeP14XCCoLC8XAWdYb-E-cniSzqEMA&usqp=CAU" alt="Post" />
            {/* Likes comment share save  */}
            <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                <HStack spacing="2" ml={[2, 2, 0, 0, 0]}  >
                    <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none" }} color={liked ? "#e65d37" : "#363333"} onClick={handleLikes} icon={liked ? <BsSuitHeartFill /> : <BsSuitHeart />} />
                    <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<TbMessageCircle2 />} />
                    <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<SlPaperPlane />} />
                </HStack>
                <IconButton fontSize={["20px", "20px", "25px", "25px", "25px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<VscBookmark />} />
            </Flex>
            <Text my="1.2" ml={["4", "4", "0", 0, 0]} fontWeight={"600"} fontSize="14" >104 likes</Text>
            <Text my="1.2" ml={["4", "4", "0", 0, 0]} fontWeight={"600"} >User name Caption...</Text>
            <Text my="1" ml={["4", "4", "0", 0, 0]} fontWeight={"500"} fontSize="13" >See Translation</Text>
            <Textarea ml={["4", "4", "0", 0, 0]} variant='unstyled' placeholder='Add a comment..' w="95%" _placeholder={{ color: "#a6a39c", fontSize: 13 }} />
            <Container maxW={["100%", "100%", "95%", "95%", "95%"]} centerContent>
                <Divider w="100%" bordeColor="black" mt="5" borderWidth="0.5px" />
            </Container>
        </Box>
    )
}

export default SinglePost