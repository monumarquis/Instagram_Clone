import {
  Box, Flex, HStack, Text, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SuggestionAvatar from "./SuggestionAvatar";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckCircleFill } from "react-icons/bs";
import { LogOut } from "../redux/auth/auth.actions";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { getUserBoi } from "../redux/userBoi/userBoi.actions";
import SuggestionSkeleton from "./SuggestionSkeleton";
import { getUserSuggestion } from "../redux/suggestionUser/suggestionUser.actions";

const Suggestions = () => {
  const [logoutLoading, setloading] = useState(false)
  const dispatch = useDispatch()
  const { userBoi, loading } = useSelector((state) => state.userBoi)
  const { username } = useSelector((state) => state.auth)
  const data = useSelector((state) => state.auth)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const nav = useNavigate()
  useEffect(() => {
    dispatch(getUserBoi(username))
    dispatch(getUserSuggestion(userBoi._id))
  }, [])
  if (loading) {
    return <SuggestionSkeleton />
  }
  return (
    <Box
      w="30%"
      border={"1px solid orange"}
      display={["none", "none", "none", "initial", "initial"]}
      mt="10"
    >
      <Flex
        w="100%"
        flexDir={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <HStack spacing="5">
          <Link to={`/${username}`}>
            <Avatar
              w="65px"
              h="65px"
              objectFit={"cover"}
              borderRadius="50%"
              src={userBoi.imageUrl}
              alt=""
            /></Link>
          <Link to={`/${username}`}><Text fontWeight="500">{userBoi.username}</Text></Link>
        </HStack>
        <Text fontWeight="500" color="blue" onClick={onOpen} cursor="pointer" >
          Switch
        </Text>
      </Flex>
      <HStack
        w="100%"
        flexDir={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        my="5"
      >
        <Text fontWeight="500" color="gray" fontSize={"15"}>
          Suggestion for you
        </Text>
        <Text fontWeight="500" color="black" fontSize={"11"}>
          See All
        </Text>
      </HStack>
      <SuggestionAvatar />
      <SuggestionAvatar />
      <SuggestionAvatar />
      <SuggestionAvatar />
      <Text my="3" fontWeight="400" color="#8c8787" fontSize={"13"}>
        About | Help | PressAPI | JobsPrivacy | Terms | Locations Language
        English (UK)
      </Text>
      <Text fontWeight="500" color="#545151" fontSize={"11"}>
        © 2023 INSTAGRAM FROM MONU
      </Text>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent pb={logoutLoading && "10"} >
          <ModalHeader textAlign="center" >Switch Accounts</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Divider w="100%" mb="2" />
            <Flex
              w="100%"
              flexDir={"row"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <HStack spacing="5">
                <Avatar
                  w="65px"
                  h="65px"
                  objectFit={"cover"}
                  borderRadius="50%"
                  src={userBoi.imageUrl}
                  alt=""
                />
                <Text fontWeight="500">{userBoi.username}</Text>
              </HStack>
              <Text fontWeight="500" color="blue" onClick={onOpen}  >
                <BsCheckCircleFill fontSize={25} />
              </Text>
            </Flex>

            <Divider w="100%" mt={logoutLoading ? "10" : "20"} />
            {logoutLoading ? <LoadingSpinner Sectionheight={"5px"} loaderWidth={"5px"} loaderHeight={"5px"} /> : <Text fontWeight="500" color="blue" textAlign={"center"} cursor="pointer" my="5"
              onClick={() => {
                setloading(true)
                setTimeout(() => {

                  setloading(false)
                  dispatch(LogOut())
                  nav('/login')

                }, 2000)
              }}
            >Log in to exsisiting account or Sign up</Text>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Suggestions;
