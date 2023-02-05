import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'

const SuggestionSkeleton = () => {
    return (
        <Flex w="30%"
            display={["none", "none", "none", "initial", "initial"]}
            mt="10">

            <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} alignItems={"center"} >
                <SkeletonCircle size='20' />
                <Skeleton  height='20px' w='70%' />
            </Flex>
            <Flex mb="5" flexDir={"row"} mt="10" w="100%" justifyContent={"space-between"} alignItems={"center"} >
                <SkeletonCircle size='10' />
                <Skeleton startColor='gray.200' endColor='gray.500' w='80%' height='25px' />
            </Flex>
            <Flex mb="5" flexDir={"row"} w="100%" justifyContent={"space-between"} alignItems={"center"} >
                <SkeletonCircle size='10' />
                <Skeleton startColor='gray.200' endColor='gray.500' w='80%' height='25px' />
            </Flex>
            <Flex mb="5" flexDir={"row"} w="100%" justifyContent={"space-between"} alignItems={"center"} >
                <SkeletonCircle size='10' />
                <Skeleton startColor='gray.200' endColor='gray.500' w='80%' height='25px' />
            </Flex>
            <Flex mb="5" flexDir={"row"} w="100%" justifyContent={"space-between"} alignItems={"center"} >
                <SkeletonCircle size='10' />
                <Skeleton startColor='gray.200' endColor='gray.500' w='80%' height='25px' />
            </Flex>
        </Flex>
    )
}

export default SuggestionSkeleton