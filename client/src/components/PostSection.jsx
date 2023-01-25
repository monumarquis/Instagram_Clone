import { Box } from '@chakra-ui/react'
import React from 'react'
import SinglePost from './SinglePost'

const PostSection = () => {
    return (
        <Box w="100%" 
            border="1px solid green"
        >
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </Box>
    )
}

export default PostSection