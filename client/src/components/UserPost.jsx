import { Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CreatePost from './CreatePost'
import "../styles/post.css"
import UserPostSingle from './UserPostSingle'

const UserPost = () => {
    const x = false
    return (
        <Flex w="100%" border={"1px solid purple"} >
            {x ? <CreatePost /> : <SimpleGrid w="100%" columns={3} spacing={[0.5, 1, 3, 5, 8]}>
              <UserPostSingle />
              <UserPostSingle />
              <UserPostSingle />
              <UserPostSingle />
              <UserPostSingle />
              <UserPostSingle />
              <UserPostSingle />
              <UserPostSingle />
            </SimpleGrid>}
        </Flex>
    )
}

export default UserPost