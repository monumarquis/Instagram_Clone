import React from 'react'
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
const UserPostSingle = () => {
    return (
        <>
            <Box h={["170px", "200px", "270px", "300px", "320px"]} className='post' >
                <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                <Box className="overlay" >
                    <Flex w={["80%", "80%", "60%", "45%", "40%"]} m="auto" flexDir={"row"} justifyContent={"space-between"} className="text" >
                        <HStack spacing={1} >
                            <BsFillSuitHeartFill color="#fff" fontSize={"18"} fontWeight={800} />
                            <Text color="#fff" fontSize="13" fontWeight={500} >91.8k</Text>
                        </HStack>
                        <HStack spacing={1}>
                            <FaComment fontSize={"18"} color="#fff" fontWeight={800} />
                            <Text color="#fff" fontSize="13" fontWeight={500} >100</Text>
                        </HStack>
                    </Flex>

                </Box>
            </Box>

        </>
    )
}

export default UserPostSingle