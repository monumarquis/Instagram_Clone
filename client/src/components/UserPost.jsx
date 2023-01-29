import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CreatePost from './CreatePost'

const UserPost = () => {
    const x = false
    return (
        <Flex w="100%" border={"1px solid purple"} >
            {x ? <CreatePost /> : <SimpleGrid w="100%" columns={3} spacing={[0.5, 1, 3, 5, 8]}>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                </Box>
                <Box h={["170px", "200px", "270px", "300px", "320px"]} >
                    <Image h="100%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674408559/samples/ecommerce/accessories-bag.jpg" alt="userPost" />
                </Box>
            </SimpleGrid>}
        </Flex>
    )
}

export default UserPost