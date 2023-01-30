import {
  Box, Button, Flex, HStack, Text, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import SuggestionAvatar from "./SuggestionAvatar";
import { useDispatch } from "react-redux";
import { BsCheckCircleFill } from "react-icons/bs";
import { LogOut } from "../redux/auth/auth.actions";
import { useNavigate } from "react-router-dom";

const Suggestions = () => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const nav = useNavigate()
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
          <Avatar
            w="65px"
            h="65px"
            objectFit={"cover"}
            borderRadius="50%"
            src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png"
            alt=""
          />
          <Text fontWeight="500">Username</Text>
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
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} p="0" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" >Switch Accounts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider w="100%" />
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
                  src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png"
                  alt=""
                />
                <Text fontWeight="500">Username</Text>
              </HStack>
              <Text fontWeight="500" color="blue" onClick={onOpen}  >
                <BsCheckCircleFill fontSize={25} />
              </Text>
            </Flex>

            <Divider w="100%" mt="20" />
            <Text fontWeight="500" color="blue" textAlign={"center"} cursor="pointer" my="5" 
            onClick={() => {
              dispatch(LogOut())
              nav('/login')
            }}
            >Log in to exsisiting account or Sign up</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Suggestions;
