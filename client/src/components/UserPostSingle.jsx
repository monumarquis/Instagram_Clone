import React, { useRef, useState } from 'react'
import {
    Box, Flex, HStack, Image, Text, Modal, ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Avatar,
    IconButton,
    Spinner,
    useDisclosure,
    Divider, 
    useToast
} from '@chakra-ui/react'
import { BiCommentAdd, BiDotsHorizontalRounded } from "react-icons/bi"
import { TbMessageCircle2, } from "react-icons/tb"
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs"
import { SlPaperPlane, } from "react-icons/sl"
import { GrEmoji, } from "react-icons/gr"
import { VscBookmark, } from "react-icons/vsc"
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getPostComment } from '../redux/postComments/postComments.actions'
import { useEffect } from 'react'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'
import { getUserPostWithoutReloading } from '../redux/userPost/userPost.actions'
const UserPostSingle = ({ imageUrl, likes, postId, userImageUrl, desc, username }) => {
    const Comment = useSelector((state) => state.postComment)
    const toast = useToast()
    const dispatch = useDispatch()
    const inputRef = useRef(null);
    const [liked, setliked] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setloading] = useState(false)
    const [comment_desc, setComment] = useState("")
    const { userId } = useSelector((state) => state.auth)
    useEffect(() => {
        dispatch(getPostComment(postId))
    }, [])
    useEffect(() => {
        setliked(likes.some((el) => el._id === userId))
    }, [likes, userId])

    const handlecomment = async () => {
        setloading(true)
        try {
            let { data } = await axios.post("http://localhost:8001/comments", { userId, postId, comment_desc })
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
            let { data } = await axios.put(`http://localhost:8001/posts/${postId}/like`, { userId })
            // console.log(data)
            dispatch(getUserPostWithoutReloading(username))
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Box h={["170px", "200px", "270px", "300px", "320px"]} onClick={onOpen} className='post' border="0.5px solid #b6b8b7" >
                <Image h="100%" src={imageUrl} alt="userPost" w="100%" />
                <Box className="overlay" >
                    <Flex w={["80%", "80%", "60%", "45%", "40%"]} m="auto" flexDir={"row"} justifyContent={"space-between"} className="text" >
                        <HStack spacing={1} >
                            <BsFillSuitHeartFill color="#fff" fontSize={"18"} fontWeight={800} />
                            <Text color="#fff" fontSize="13" fontWeight={500} >{likes.length}</Text>
                        </HStack>
                        <HStack spacing={1}>
                            <FaComment fontSize={"18"} color="#fff" fontWeight={800} />
                            <Text color="#fff" fontSize="13" fontWeight={500} >{Comment.postComment.length}</Text>
                        </HStack>
                    </Flex>
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
                                            <IconButton fontSize="30px" mr="2" background={"none"} _hover={{ background: "none" }} color="black" icon={<BiDotsHorizontalRounded />} />
                                        </Flex>
                                        <Divider w="100%" mt="3" />
                                        <Flex flexDir="column" className="scroll-hide" w="100%" maxH="250px" border="1px solid red" >
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
                </Box>
            </Box>

        </>
    )
}

export default UserPostSingle