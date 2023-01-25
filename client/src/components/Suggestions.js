import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SuggestionAvatar from './SuggestionAvatar'

const Suggestions = () => {
  return (
    <Box w="30%" border={"1px solid orange"} display={['none', 'none', 'none', "initial", 'initial']} mt="10" >
      <Flex w="100%" flexDir={"row"} justifyContent="space-between" alignItems={"center"} >
        <HStack spacing="5" >
          <Image w="65px" h="65px" objectFit={"cover"} borderRadius="50%" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" alt="" />
          <Text fontWeight="500" >Username</Text>
        </HStack>
        <Text fontWeight="500" color="blue">Switch</Text>
      </Flex>
      <HStack w="100%" flexDir={"row"} justifyContent="space-between" alignItems={"center"} my="5">
        <Text fontWeight="500" color="gray" fontSize={"15"} >Suggestion for you</Text>
        <Text fontWeight="500" color="black" fontSize={"11"} >See All</Text>
      </HStack>
      <SuggestionAvatar />
      <SuggestionAvatar />
      <SuggestionAvatar />
      <SuggestionAvatar />
      <Text my="3" fontWeight="400" color="#8c8787" fontSize={"13"}>About | Help | PressAPI | JobsPrivacy | Terms | Locations Language
        English (UK)
      </Text>
      <Text fontWeight="500" color="#545151" fontSize={"11"} >© 2023 INSTAGRAM FROM MONU</Text>
    </Box>
  )
}

export default Suggestions