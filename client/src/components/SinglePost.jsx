import {
    Box, Container, Divider, Flex, HStack, IconButton, Image, Text, Textarea, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Avatar, ModalHeader,
    useToast,
    Spinner
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { BiCommentAdd, BiDotsHorizontalRounded } from "react-icons/bi"
import { TbMessageCircle2, } from "react-icons/tb"
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs"
import { SlPaperPlane, } from "react-icons/sl"
import { GrEmoji, } from "react-icons/gr"
import { VscBookmark, } from "react-icons/vsc"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomPost, getRandomPostWithoutreloading } from '../redux/randomPost/randomPost.actions'
import { getPostComment } from '../redux/postComments/postComments.actions'
import LoadingSpinner from './LoadingSpinner'

const SinglePost = ({ imageUrl, desc, likes, username, userImageUrl, postId }) => {
    const toast = useToast()
    const inputRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
    const dispatch = useDispatch()
    const [comment_desc, setComment] = useState("")
    const { userId, username: authUsername } = useSelector((state) => state.auth)
    const Comment = useSelector((state) => state.postComment)
    const [liked, setliked] = useState(false)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setliked(likes.some((el) => el._id === userId))
    }, [likes, userId])

    const handledelete = async () => {
        onClose1()
        try {
            let { data } = await axios.delete(`http://localhost:8001/posts/${postId}`)
            toast({
                title: data.message,
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            dispatch(getRandomPost())
        }
        catch (err) {
            console.log(err)
        }
    }
    const handlecomment = async () => {
        setloading(true)
        try {
            let { data } = await axios.post("https://nem-insta-backend.onrender.com/comments", { userId, postId, comment_desc })
            console.log(data)
            setloading(false)
            toast({
                title: data.message,
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            setComment("")
            dispatch(getPostComment(postId))
        }
        catch (err) {
            setloading(false)
            console.log(err)
        }
    }

    const handleLikes = async () => {
        try {
            let { data } = await axios.put(`https://nem-insta-backend.onrender.com/posts/${postId}/like`, { userId })
            // console.log(data)
            dispatch(getRandomPostWithoutreloading())
        }
        catch (err) {
            console.log(err)
        }
    }
    // console.log(postComment);
    return (
        <Box
            // border={"1px solid gray"}
            w="100%" mt="10" >
            <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                <NavLink to={`/${username}`} ><HStack spacing="5" ml="2" >
                    <Avatar w="30px" h="30px" borderRadius={"50%"} src={userImageUrl} />
                    <Text fontWeight={"600"} >{username}</Text>
                </HStack></NavLink>
                <IconButton fontSize="25px" background={"none"} cursor={"pointer"} _hover={{ background: "none" }} onClick={onOpen1} color="black" icon={<BiDotsHorizontalRounded />} />
            </Flex>
            <Image borderRadius="2px" my="2" border="0.2px solid #f5eeed" w="100%" h="90vh" src={imageUrl} alt="Post" />
            {/* Likes comment share save  */}
            <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                <HStack spacing="2" ml={[2, 2, 0, 0, 0]}  >
                    <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none" }} color={liked ? "#e65d37" : "#363333"} onClick={handleLikes} icon={liked ? <BsSuitHeartFill /> : <BsSuitHeart />} />
                    <IconButton onClick={() => {
                        onOpen()
                        dispatch(getPostComment(postId))
                    }} fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<TbMessageCircle2 />} />
                    <IconButton fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<SlPaperPlane />} />
                </HStack>
                <IconButton fontSize={["20px", "20px", "25px", "25px", "25px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="#363333" icon={<VscBookmark />} />
            </Flex>
            {likes.length > 0 && <Text my="1.2" ml={["4", "4", "3", 3, 3]} fontWeight={"600"} fontSize="14" >{likes.length} likes</Text>}
            <Text my="1.2" ml={["4", "4", "3", 3, 3]} fontWeight={"600"} >{username} <span style={{ "color": "#3d3d3d", "fontWeight": "400" }} >{desc}</span></Text>
            <Text my="1" ml={["4", "4", 3, 3, 3]} fontWeight={"500"} fontSize="13" >See Translation</Text>
            {Comment.postComment.length > 0 && <Text my="1" ml={["4", "4", 3, 3, 3]} fontWeight={"400"} fontSize="13" color={"#6e6d6d"} onClick={onOpen} cursor={"pointer"} >Show All Comments</Text>}
            <HStack spacing="2" w="95%" m="auto" alignItems={"top"} justifyContent={"center"} >
                <Textarea variant='unstyled' placeholder='Add a comment..' value={comment_desc} onChange={({ target: { value } }) => setComment(value)} w="95%" _placeholder={{ color: "#a6a39c", fontSize: 13 }} />
                {comment_desc !== "" && !loading && <Text cursor={"pointer"} color="blue.400" fontSize="14" fontWeight={500} onClick={handlecomment} >Post</Text>}
                {loading && <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blackAlpha.200' size='lg' />}
                <GrEmoji fontSize="20px" />
            </HStack>
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
                                <Image borderRadius="2px" h="70vh" w="100%" src={imageUrl} alt="Post" />
                            </Flex>

                            <Flex flexDir={"column"} w="55%" mt="10">
                                <Flex flexDir={"row"} justifyContent={"space-between"} w="100%" >
                                    <HStack spacing="5" ml="2" >
                                        <Box className="border_image4" w="50px" h="50px" p="0.5" >
                                            <Avatar w="100%" h="100%" objectFit="cover" borderRadius={"50%"} src={userImageUrl} />
                                        </Box>
                                        <Text fontWeight={"600"} >{username}</Text>
                                    </HStack>
                                    <IconButton fontSize="30px" mr="2" background={"none"} _hover={{ background: "none" }} color="black" onClick={onOpen1} icon={<BiDotsHorizontalRounded />} />
                                </Flex>
                                <Divider w="100%" mt="3" />
                                <Flex flexDir="column" className="scroll-hide" w="100%" maxH="250px"
                                // border="1px solid red" 
                                >
                                    <HStack spacing="5" ml="2" my="2" >
                                        <Avatar w="50px" className="border_image" p="1" borderRadius={"50%"} src={userImageUrl} />
                                        <Text fontWeight={"600"} >{username}</Text>
                                    </HStack>
                                    {Comment.loading && <LoadingSpinner Sectionheight={"20px"} loaderWidth={"20px"} loaderHeight={"20px"} />}
                                    {!Comment.loading && Comment.postComment.length === 0 && <Flex onClick={() => { inputRef.current.focus() }} flexDir={"column"} justifyContent={"center"} alignItems={"center"} h="170px" w="100%" >
                                        <BiCommentAdd color="#3d3d3d" fontSize="80px" />
                                        <Text fontWeight={"600"} color="#3d3d3d">Add First Comment</Text>
                                    </Flex>}
                                    {!Comment.loading && Comment.postComment && Comment.postComment.length > 0 && Comment.postComment.map((el) =>
                                        <HStack spacing="5" ml="2" my="2" h="170px" alignItems="top">
                                            <Avatar h="30px" w="30px" borderRadius={"50%"} src={el.user.imageUrl} />
                                            <Text fontWeight={"600"} >{el.user.username} <span style={{ "color": "#3d3d3d", "fontWeight": "400" }} >{el.comment}</span></Text>
                                        </HStack>
                                    )}
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
                                {likes.length > 0 && <Text my="1.2" ml={["4", "4", "3", 3, 3]} fontWeight={"600"} fontSize="14" >{likes.length} likes</Text>}
                                <Divider w="100%" mt="3" />
                                <HStack spacing="2" w="100%" m="auto" h="20px" alignItems={"center"} justifyContent={"center"} >
                                    <GrEmoji fontSize="20px" />
                                    <Input ref={inputRef} placeholder="Add comment.." value={comment_desc} onChange={({ target: { value } }) => setComment(value)} variant="flushed" w="80%" />
                                    {loading ? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blackAlpha.200' size='lg' /> :
                                        <Text cursor={"pointer"} color="blue.400" fontSize="14" onClick={handlecomment} >Post</Text>}
                                </HStack>
                            </Flex >
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={isOpen1}
                onClose={onClose1}
                closeOnOverlayClick={true}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody m={0} p="0" >
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="500" color={"red.500"} onClick={authUsername === username && handledelete}  >{authUsername === username ? "Delete" : "Report"}</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="500" color="red.500" >Unfollow</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400"  >Add to favourites</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400" >Go to post</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400" >Share to...</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400" >Copy link</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400" >Embed</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400" >About this account</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400" mb='5' onClick={onClose1} >Cancel</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default SinglePost