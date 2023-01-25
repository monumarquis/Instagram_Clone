import {
    Flex, Text, Icon, Link, Menu, MenuButton, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
} from '@chakra-ui/react'
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavHoverItem from './NavHoverItem'
const fileTypes = ["JPEG", "PNG", "GIF"];
const CreateNavitem = ({ navSize, title, icon, active, desc }) => {
    const [hover, sethover] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const width = navSize === "small" ? "none" : "flex"
    const [file, setFile] = useState(null);
    console.log(file);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <Flex
            mt="30"
            w="100%"
            flexDir="column"
            alignItems={navSize === "small" ? "center" : "flex-start"}
            onMouseEnter={() => {
                sethover(true)
            }}
            onMouseLeave={() => {
                sethover(false)
            }}
        >
            <Menu placement='right' w="100%"  >
                <NavLink  >
                    <Link
                        backgroundColor={active && "#AEC8CA"}
                        borderRadius={navSize === "small" ? "15" : "30"}
                        _hover={{ textDecor: 'none', backgroundColor: "#f5f5f5" }}
                        w={navSize === "large" && "150px"}
                        pl={navSize === "large" ? "5" : "3"}
                        pb="3"
                        pt="4"
                        onClick={onOpen}
                    >
                        <MenuButton w={["50px", "50px", "50px", navSize === "small" ? "100%" : "210px", navSize === "small" ? "100%" : "210px"]} fontSize="xl" color={active ? "#f5f5f5" : "black"}  >
                            <Flex alignItems={"center"} >
                                <Icon as={icon} fontSize={"22px"} />
                                <Text ml="5" display={["none", "none", "none", width, width]} fontSize={"16px"} >{title}</Text>
                            </Flex>
                        </MenuButton>
                    </Link>
                </NavLink>
                <Flex
                    pos="absolute"
                    left={[20, 20, 20, navSize === "small" ? 16 : 250, navSize === "small" ? 16 : 250]}
                    p={0}
                    border="none"
                    w={["150px", "150px", "200px", "200px"]}
                    h="100px"
                    ml={5}
                    flexDir={"row"}
                    display={hover ? "flex" : "none"}
                >
                    <NavHoverItem desc={desc} title={title} icon={icon} />
                </Flex>
            </Menu>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text textAlign={"center"} >Create New Post</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FileUploader
                            multiple={true}
                            handleChange={handleChange}
                            name="file"
                            label="Select From Computer"
                            hoverTitle="Drop Here "
                            classes="Drag_Input"
                            types={fileTypes}
                        />
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default CreateNavitem