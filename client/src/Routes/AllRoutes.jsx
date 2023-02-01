import React from 'react'
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Flex } from '@chakra-ui/react';
import Home from '../pages/Home';
import ProfileAccount from '../pages/ProfileAccount';
import UserPost from '../components/UserPost';
import UserReels from '../components/UserReels';
import UserTaggedpost from '../components/UserTaggedpost';
import PrivateRoutes from './PrivateRoutes';
import { useSelector } from 'react-redux';
const AllRoutes = () => {
  const location = useLocation()
  const { isAuth } = useSelector((state) => state.auth)
  let { userId } = useParams()
  let x = location.pathname.includes(`/${userId}`)
  console.log(x,"x",`/${userId}`);
  let w = x ? "88%" : "70%"
  let ml = x ? "11%" : "20%"
  let loginwidth = isAuth ? ["100%", "100%", w, "81.3%", "81.3%"] : ["100%","100%","100%","100%","100%"]
  let loginMarginLeft = isAuth ? ["0", "0", ml, "20%", "20%"] : ["0","0","0","0","0"]
  return (
    <Flex w={loginwidth} ml={loginMarginLeft} flexDir={"column"} border={"1px solid red"}>
      <Routes>
        <Route path='/' element={<PrivateRoutes><Home /></PrivateRoutes>}></Route>
        <Route path='/:username' element={<PrivateRoutes><ProfileAccount /></PrivateRoutes>}>
          <Route path="" element={<PrivateRoutes><UserPost /></PrivateRoutes>}></Route>
          <Route path="reels" element={<PrivateRoutes><UserReels /></PrivateRoutes>}></Route>
          <Route path="tagged" element={<PrivateRoutes><UserTaggedpost /></PrivateRoutes>}></Route>
        </Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Flex>
  )
}

export default AllRoutes