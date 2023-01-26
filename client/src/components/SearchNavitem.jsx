import {
    Flex, Text, Icon, Link, Menu, MenuButton, useDisclosure, Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Heading,
    Input,
    InputLeftElement,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavHoverItem from './NavHoverItem'
import {BsSearch} from"react-icons/bs"
import {RxCrossCircled} from"react-icons/rx"

const SearchNavitem = ({ navSize, title, icon, active, desc, setNavSize }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [hover, sethover] = useState(false)
    const [searchUser, setSearchUser] = useState('')
    const width = navSize === "small" ? "none" : "flex"
    const handleSerach = () => {
        onOpen()
        setNavSize("small")
    }

    const handleClose = () => {
        onClose()
        setNavSize("large")
    }
    console.log(searchUser);
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
                <NavLink>
                    <Link
                        backgroundColor={active && "#AEC8CA"}
                        borderRadius={navSize === "small" ? "15" : "30"}
                        _hover={{ textDecor: 'none', backgroundColor: "#f5f5f5" }}
                        w={navSize === "large" && "150px"}
                        pl={navSize === "large" ? "5" : "3"}
                        pb="3"
                        pt="4"
                        onClick={handleSerach}
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
            <Drawer onClose={handleClose} isOpen={isOpen} size={"md"} placement='left' >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Search</DrawerHeader>
                    <DrawerBody>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<BsSearch color='gray.100' />}
                            />
                            <Input variant='outline' type='text' value={searchUser} onChange={({target:{value}})=>setSearchUser(value)} placeholder='Search' size='md' backgroundColor={"#d2d6d3"} />
                            {searchUser !=='' && <InputRightElement
                                pointerEvents='none'
                                children={<RxCrossCircled color='gray.100' />}
                                   onClick={()=>setSearchUser("")}
                            />}
                        </InputGroup>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default SearchNavitem