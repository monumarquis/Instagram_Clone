import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Flex } from '@chakra-ui/react';
import Home from '../pages/Home';
const AllRoutes = () => {
  return (
    <Flex w={["100%", "100%", "70%", "80%", "80%"]} ml={["0", "0", "20%", "20%", "20%"]} flexDir={"column"} border={"1px solid red"}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Flex>
  )
}

export default AllRoutes