import { Divider, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { TfiVideoClapper } from 'react-icons/tfi'
import { RiAccountBoxLine } from 'react-icons/ri'
import { BsGrid3X3 } from 'react-icons/bs'

import { NavLink, Outlet } from 'react-router-dom'
const UserAllFeed = () => {
    return (
        <Flex w="100%" flexDir={"column"} mt="10" >
            <Divider w="100%" borderColor={'#736e6e'} />
            <Flex w={["80%", "80%", "32%", "32%", "32%"]} flexDir={"row"} margin={"auto"} justifyContent={"space-between"}  >
                <NavLink to={"/profile"} >
                    <HStack spacing={"-2"} alignContent={"center"}  >
                        <IconButton color="#73706f" fontSize="13px" background={"none"} _hover={{ background: "none" }} icon={<BsGrid3X3 />} />
                        <Text fontSize={13} fontWeight={500} >POSTS</Text>
                    </HStack>
                </NavLink>

                <NavLink to={"/profile/reels"}>
                    <HStack spacing={"-2"} alignContent={"center"} >
                        <IconButton color="#73706f" fontSize="13px" background={"none"} _hover={{ background: "none" }} icon={<TfiVideoClapper />} />
                        <Text fontSize={13} fontWeight={500} >REELS</Text>
                    </HStack>
                </NavLink>
                <NavLink to={"/profile/tagged"}>
                    <HStack spacing={"-2"} alignContent={"center"}  >
                        <IconButton color="#73706f" fontSize="14px" background={"none"} _hover={{ background: "none" }} icon={<RiAccountBoxLine />} />
                        <Text fontSize={13} fontWeight={500} >TAGGED</Text>
                    </HStack>
                </NavLink>
            </Flex>
            <Outlet />
        </Flex>
    )
}

export default UserAllFeed