import { Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import Story from '../components/Story';
import PostSection from '../components/PostSection';
import Suggestions from '../components/Suggestions';

const Home = () => {
    return (
        <Flex flexDir={"row"} >
            <Flex flexDir={"column"} w={["100%", "100%", "100%", "50%", "50%"]} ml={["0", "0", "0", "100px", "100px"]} mr={["0", "0", "50px", "50px", "50px"]}>
                <Story />
                <PostSection />
            </Flex>
            <Suggestions />
        </Flex>
    )
}

export default Home