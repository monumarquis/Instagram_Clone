import React from 'react'
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getPostComment } from '../redux/postComments/postComments.actions'
import { useEffect } from 'react'
const UserPostSingle = ({imageUrl,likes,postId}) => {
    const Comment = useSelector((state) => state.postComment)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPostComment(postId))
    },[])
    return (
        <>
            <Box h={["170px", "200px", "270px", "300px", "320px"]} className='post'  border="0.5px solid #b6b8b7" >
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

                </Box>
            </Box>

        </>
    )
}

export default UserPostSingle