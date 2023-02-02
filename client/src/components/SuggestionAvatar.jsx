import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const SuggestionAvatar = () => {
  const { username } = useSelector((state) => state.auth)
  return (
    <Flex w="100%" flexDir={"row"} justifyContent="space-between" alignItems={"center"} mb="3" >
      <NavLink><HStack spacing="3"  >
        <Avatar w="40px" h="40px" objectFit={"cover"} borderRadius="50%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" alt="" />
        <Text fontWeight="500" fontSize={"14"} >Username</Text>
      </HStack></NavLink>
      <Text fontWeight="500" color="blue" fontSize={"12"} >Follow</Text>
    </Flex>
  )
}

export default SuggestionAvatar