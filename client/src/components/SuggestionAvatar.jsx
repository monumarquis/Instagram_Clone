import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const SuggestionAvatar = ({username,imageUrl}) => {
  return (
    <Flex w="100%" flexDir={"row"} justifyContent="space-between" alignItems={"center"} mb="3" >
      <NavLink to={`/${username}`} ><HStack spacing="3"  >
        <Avatar w="40px" h="40px" objectFit={"cover"} borderRadius="50%" src={imageUrl} alt="" />
        <Text fontWeight="500" fontSize={"14"} >{username}</Text>
      </HStack></NavLink>
      <Text fontWeight="500" color="blue.400" fontSize={"12"} >Follow</Text>
    </Flex>
  )
}

export default SuggestionAvatar