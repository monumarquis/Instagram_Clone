import { Avatar, Box, Button, Flex, HStack, IconButton, Skeleton, Text } from '@chakra-ui/react'
import { MdPersonAddAlt1 } from "react-icons/md"
import React, { useEffect } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBoi } from '../redux/userBoi/userBoi.actions'
import { useParams } from 'react-router-dom'

const ProfileBoiData = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.userBoi)
    const { userPost } = useSelector((state) => state.userPost)
    const { userBoi } = data
    console.log(userBoi.user);
    const { username } = useParams()
    useEffect(() => {
        dispatch(getUserBoi(username))
    }, [username])
    return (
        <Skeleton isLoaded={!data.loading} >
            <Flex w={["100%", "100%", "100%", "90%", "90%"]} m="auto" border="1px solid blue" py="10" flexDir={"row"} justifyContent={"space-evenly"} alignItems={"center"} >
                <Box className="border_image2" w={["100px", "100px", "170px", "170px", "170px"]} h={["100px", "100px", "170px", "170px", "170px"]} p="1" >
                    <Avatar w="100%" h="100%" objectFit="cover" borderRadius={"50%"} src={userBoi.imageUrl} />
                </Box>
                <Flex flexDir={"column"} justifyContent={"space-between"} alignItems={"left"} >
                    {/* for Mobile  */}
                    <Flex flexDir={"column"} display={['flex', 'flex', 'none', 'none', 'none']}>
                        <HStack spacing={2} mb="3" >
                            <Text fontSize={18} fontWeight={500} >{userBoi.username}</Text>
                            <IconButton fontSize="22px" background={"none"} _hover={{ background: "none" }} color="black" icon={<BiDotsHorizontalRounded />} />
                        </HStack>
                        <HStack spacing={2}>
                            <Button h="30px" colorScheme={"messenger"} >Follow</Button>
                            <Button h="30px" colorScheme={"messenger"} >Message</Button>
                            <IconButton h="30px" background={"#fff"} _hover={{ background: "#e8e6e6", }} color="gray.500" icon={<MdPersonAddAlt1 />} />
                        </HStack>
                    </Flex>
                    {/* for Mobile  */}
                    <HStack spacing={[3, 3, 3, 3, 5]} mb="10" display={['none', 'none', 'flex', 'flex', 'flex']}>
                        <Text fontSize={18} fontWeight={500} >{userBoi.username}</Text>
                        <Button h="30px" colorScheme={"messenger"} >Follow</Button>
                        <Button h="30px" colorScheme={"messenger"} >Message</Button>
                        <IconButton h="30px" background={"#fff"} _hover={{ background: "#e8e6e6", }} color="gray.500" icon={<MdPersonAddAlt1 />} />
                        <IconButton fontSize="22px" background={"none"} _hover={{ background: "none" }} color="black" icon={<BiDotsHorizontalRounded />} />
                    </HStack>
                    <HStack spacing={10} display={['none', 'none', 'flex', 'flex', 'flex']} mb="6" >
                        <Text fontSize={16} fontWeight={500} >{userPost.length} <span style={{ color: "GrayText" }} >posts</span></Text>
                        <Text fontSize={16} fontWeight={500} >0 <span style={{ color: "GrayText" }}>followers</span></Text>
                        <Text fontSize={16} fontWeight={500} >0 <span style={{ color: "GrayText" }}>Following</span></Text>
                    </HStack>
                    <Flex flexDir={"column"} display={['none', 'none', 'flex', 'flex', 'flex']} justifyContent={"left"} >
                        <Text fontSize={15} fontWeight={500} >{userBoi.realname}</Text>
                        <Text fontSize={14} fontWeight={500} color={"gray"} >profession</Text>
                        <Text fontSize={14} fontWeight={400} >Let's WIN it together!</Text>
                        <Text fontSize={14} fontWeight={400} >📚 English Battle 📚</Text>
                        <Text fontSize={14} fontWeight={400} >Keep crawling towards ur Aim!</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Skeleton>
    )
}

export default ProfileBoiData