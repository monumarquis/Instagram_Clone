import { Flex, Heading, Text,Icon } from '@chakra-ui/react'
import React from 'react'

const NavHoverItem = ({ title, icon, desc }) => {
    return (
        <>
            <Flex 
            pos="absolute"
            mt="10px"
            ml="-2.5"
            w="0"
            h="0"
            borderTop="10px solid transparent"
            borderBottom="10px solid transparent"
            borderRight="10px solid black"
            />
            <Flex
                h="110px"
                w="100%"
                flexDir="column"
                alignItems={"center"}
                justifyContent={"center"}
                backgroundColor={"#fff"}
                borderRadius={"10px"}
                border={"1px solid black"}
                textAlign={"center"}
                color="#fff"
            >
                <Icon color="black" as={icon} fontSize={"3xl"} mb={4} />
                <Heading color="black" size="md" fontWeight={"normal"} >{title}</Heading>
                <Text color="black" fontSize={"16px"} >{desc}</Text>
            </Flex>
        </>
    )
}

export default NavHoverItem