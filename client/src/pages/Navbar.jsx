import { Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Navbar = () => {
  return (
    <Flex display={['none',"none","flex","flex","flex"]}>
      <Sidebar />
    </Flex>
  )
}

export default Navbar