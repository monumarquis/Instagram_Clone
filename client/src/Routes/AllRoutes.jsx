import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Flex } from '@chakra-ui/react';
import Home from '../pages/Home';
import ProfileAccount from '../pages/ProfileAccount';
import UserPost from '../components/UserPost';
import UserReels from '../components/UserReels';
import UserTaggedpost from '../components/UserTaggedpost';
const AllRoutes = () => {
  const location = useLocation()
  let x = location.pathname.includes('/profile')
  let w = x ? "88%" : "70%"
  let ml = x ? "11%" : "20%"
  return (
    <Flex w={["100%", "100%", w, "81.3%", "81.3%"]} ml={["0", "0", ml, "20%", "20%"]} flexDir={"column"} border={"1px solid red"}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<ProfileAccount />}>
          <Route path="" element={<UserPost />}></Route>
          <Route path="reels" element={<UserReels />}></Route>
          <Route path="tagged" element={<UserTaggedpost />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Flex>
  )
}

export default AllRoutes