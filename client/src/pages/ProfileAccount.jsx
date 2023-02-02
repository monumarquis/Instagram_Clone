import { Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileBoiData from '../components/ProfileBoiData'
import HighLights from '../components/Highlights'
import UserAllFeed from '../components/UserAllFeed'
import { useSelector } from 'react-redux'

const ProfileAccount = () => {
    const { userBoi } = useSelector((state) => state.userBoi)
    return (
        <Flex flexDir={"column"} w={["95%", "95%", "100%", "100%", "85%"]} margin={'auto'} >
            <ProfileBoiData />
            {/* for Mobile  */}
            <Flex flexDir={"column"} display={['flex', 'flex', 'none', 'none', 'none']} ml="8%" justifyContent={"left"} >
                <Text fontSize={15} fontWeight={500} >{userBoi.realname}</Text>
                <Text fontSize={14} fontWeight={500} color={"gray"} >profession</Text>
                <Text fontSize={14} fontWeight={400} >Let's WIN it together!</Text>
                <Text fontSize={14} fontWeight={400} >📚 English Battle 📚</Text>
                <Text fontSize={14} fontWeight={400} >Keep crawling towards ur Aim!</Text>
            </Flex>
            {/* for Mobile  */}

            <HighLights />

            {/* for Mobile  */}
            <Divider w="100%" borderColor={'#736e6e'} mt="4" display={['block', 'block', 'none', 'none', 'none']} />
            <HStack spacing={12} mb="-8" mt="2" display={['flex', 'flex', 'none', 'none', 'none']} w="100%" justifyContent={"center"} >
                <VStack spacing={0}>
                    <Text fontSize={16} fontWeight={500} >543</Text>
                    <Text fontSize={15} color="GrayText" fontWeight={400} >Posts</Text>
                </VStack>
                <VStack spacing={0}>
                    <Text fontSize={16} fontWeight={500} >98.7k </Text>
                    <Text fontSize={15} color="GrayText" fontWeight={400} >Followers</Text>
                </VStack>
                <VStack spacing={0}>
                    <Text fontSize={16} fontWeight={500} >0</Text>
                    <Text fontSize={15} color="GrayText" fontWeight={400} >Following</Text>
                </VStack>
            </HStack>
            {/* for Mobile  */}
            <UserAllFeed />
        </Flex>
    )
}

export default ProfileAccount