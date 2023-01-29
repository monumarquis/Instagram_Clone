import { Box, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import CreatePost from './CreatePost'
import { BsSuitHeart } from 'react-icons/bs'
import { TbMessageCircle2 } from 'react-icons/tb'
import "../styles/post.css"
const UserPost = () => {
    const x = false
    return (
        <Flex w="100%" border={"1px solid purple"} >
            {x ? <CreatePost /> : <SimpleGrid w="100%" columns={3} spacing={[0.5, 1, 3, 5, 8]}>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} className='post' >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                    <Box className="overlay" >

                        <Flex w={["80%","80%","60%","45%","40%"]} m="auto" flexDir={"row"} justifyContent={"space-between"} className="text" >
                            <HStack spacing={1} >
                                <BsSuitHeart color="#fff" fontSize={"18"} fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >91.8k</Text>
                            </HStack>
                            <HStack spacing={1}>
                                <TbMessageCircle2 fontSize={"18"} color="#fff" fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >100</Text>
                            </HStack>
                        </Flex>

                    </Box>
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} className='post' >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                    <Box className="overlay" >
                        <Flex w={["80%","80%","60%","45%","40%"]} m="auto" flexDir={"row"} justifyContent={"space-between"} className="text" >
                            <HStack spacing={1} >
                                <BsSuitHeart color="#fff" fontSize={"18"} fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >91.8k</Text>
                            </HStack>
                            <HStack spacing={1}>
                                <TbMessageCircle2 fontSize={"18"} color="#fff" fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >100</Text>
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} className='post' >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                    <Box className="overlay" >
                        <Flex w={["80%","80%","60%","45%","40%"]} m="auto" flexDir={"row"} justifyContent={"space-between"} className="text" >
                            <HStack spacing={1} >
                                <BsSuitHeart color="#fff" fontSize={"18"} fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >91.8k</Text>
                            </HStack>
                            <HStack spacing={1}>
                                <TbMessageCircle2 fontSize={"18"} color="#fff" fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >100</Text>
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} className='post' >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                    <Box className="overlay" >
                        <Flex w={["80%","80%","60%","45%","40%"]} m="auto" flexDir={"row"} justifyContent={"space-between"} className="text" >
                            <HStack spacing={1} >
                                <BsSuitHeart color="#fff" fontSize={"18"} fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >91.8k</Text>
                            </HStack>
                            <HStack spacing={1}>
                                <TbMessageCircle2 fontSize={"18"} color="#fff" fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >100</Text>
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} className='post' >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                    <Box className="overlay" >
                        <Flex w={["80%","80%","60%","45%","40%"]} m="auto" flexDir={"row"} justifyContent={"space-between"} className="text" >
                            <HStack spacing={1} >
                                <BsSuitHeart color="#fff" fontSize={"18"} fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >91.8k</Text>
                            </HStack>
                            <HStack spacing={1}>
                                <TbMessageCircle2 fontSize={"18"} color="#fff" fontWeight={800} />
                                <Text color="#fff" fontSize="13" fontWeight={500} >100</Text>
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
            </SimpleGrid>}
        </Flex>
    )
}

export default UserPost