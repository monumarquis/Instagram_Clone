import {
    Box, Container, Divider, Flex, HStack, IconButton, Image, Text, Textarea, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Avatar,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { TbMessageCircle2, } from "react-icons/tb"
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs"
import { SlPaperPlane, } from "react-icons/sl"
import { GrEmoji, } from "react-icons/gr"
import { VscBookmark, } from "react-icons/vsc"

const SinglePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                    <Avatar w="30px" h="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                    <Text fontWeight={"600"} >User Name</Text>
                </HStack>
                <IconButton fontSize="25px" background={"none"} _hover={{ background: "none" }} color="black" icon={<BiDotsHorizontalRounded />} />
            </Flex>
            <Image borderRadius="2px" my="2" border="0.2px solid #f5eeed" w="100%" h="80vh" objectFit="cover" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408571/cld-sample-3.jpg" alt="Post" />
            {/* Likes comment share save  */}
            <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                <HStack spacing="2" ml={[2, 2, 0, 0, 0]}  >
                    <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none" }} color={liked ? "#e65d37" : "#363333"} onClick={handleLikes} icon={liked ? <BsSuitHeartFill /> : <BsSuitHeart />} />
                    <IconButton onClick={onOpen} fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<TbMessageCircle2 />} />
                    <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<SlPaperPlane />} />
                </HStack>
                <IconButton fontSize={["20px", "20px", "25px", "25px", "25px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<VscBookmark />} />
            </Flex>
            <Text my="1.2" ml={["4", "4", "3", 3, 3]} fontWeight={"600"} fontSize="14" >104 likes</Text>
            <Text my="1.2" ml={["4", "4", "3", 3, 3]} fontWeight={"600"} >User name Caption...</Text>
            <Text my="1" ml={["4", "4", 3, 3, 3]} fontWeight={"500"} fontSize="13" >See Translation</Text>
            <Textarea ml={["4", "4", 3, 3, 3]} variant='unstyled' placeholder='Add a comment..' w="95%" _placeholder={{ color: "#a6a39c", fontSize: 13 }} />
            <Container maxW={["100%", "100%", "95%", "95%", "95%"]} centerContent>
                <Divider w="100%" bordeColor="black" mt="5" borderWidth="0.5px" />
            </Container>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size="4xl" p="0" >
                <ModalOverlay
                    bg='blackAlpha.500'
                    backdropFilter='blur(10px) '
                />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody p="0" pb="-10" >
                        <Flex h="80vh" flexDir="row" mb="-8" >
                            <Flex backgroundColor={"black"} alignItems={"center"} w="45%" flexDir={"column"} py="30px"  >
                                <Image borderRadius="2px" h="70vh" objectFit="cover" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408571/cld-sample-3.jpg" alt="Post" />
                            </Flex>

                            <Flex flexDir={"column"} w="55%" mt="10">
                                <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                                    <HStack spacing="5" ml="2" >
                                        <Image w="50px" className="border_image" p="1" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <IconButton fontSize="30px" mr="2" background={"none"} _hover={{ background: "none" }} color="black" icon={<BiDotsHorizontalRounded />} />
                                </Flex>
                                <Divider w="100%" mt="3" />
                                <Flex flexDir="column" className="scroll-hide" w="100%" maxH="250px" border="1px solid red" >
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="50px" className="border_image" p="1" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"600"} >User Name</Text>
                                    </HStack>
                                </Flex>
                                <Divider w="100%" mt="3" />
                                <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                                    <HStack spacing="2" ml={[2, 2, 0, 0, 0]}  >
                                        <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none" }} color={liked ? "#e65d37" : "#363333"} onClick={handleLikes} icon={liked ? <BsSuitHeartFill /> : <BsSuitHeart />} />
                                        <IconButton onClick={onOpen} fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<TbMessageCircle2 />} />
                                        <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<SlPaperPlane />} />
                                    </HStack>
                                    <IconButton fontSize={["20px", "20px", "25px", "25px", "25px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<VscBookmark />} />
                                </Flex>
                                <Text my="1.2" ml={["4", "4", "3", 3, 3]} fontWeight={"600"} fontSize="14" >104 likes</Text>
                                <Divider w="100%" mt="3" />
                                <HStack spacing="2" w="100%" m="auto" h="20px" alignItems={"center"} justifyContent={"center"} >
                                    <GrEmoji fontSize="20px" />
                                    <Input placeholder="Add comment.." variant="flushed" w="80%" />
                                    <Text color="blue" fontSize="14" >Post</Text>
                                </HStack>
                            </Flex >
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default SinglePost