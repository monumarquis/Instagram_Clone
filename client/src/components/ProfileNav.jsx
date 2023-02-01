import { Flex, Text, Link, Menu, MenuButton, Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavHoverItem from './NavHoverItem'
import { NavLink, useParams } from 'react-router-dom'

const ProfileNav = ({ navSize, title, active, desc, route }) => {
    let { username } = useParams()
    console.log(username);
    const [hover, sethover] = useState(false)
    const width = navSize === "small" ? "none" : "flex"
    return (
        <Flex
            mt="15"
            w="100%"
            mb="-15"
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
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    borderRadius={navSize === "small" ? "15" : "43"}
                    _hover={{ textDecor: 'none', backgroundColor: "#f5f5f5" }}
                    w={navSize === "large" && "230px"}
                    pl={navSize === "large" ? "5" : "3"}
                    ml={navSize === "small" && 3}
                    pr="3"
                    pb="2"
                    pt="4"
                >
                    <NavLink to={route} >
                        <MenuButton w={["50px", "50px", "50px", navSize === "small" ? "100%" : "210px", navSize === "small" ? "100%" : "210px"]} fontSize="xl" color={active ? "#f5f5f5" : "black"}  >
                            <Flex alignItems={"center"} >
                                <Avatar src="" w={"6"} h="6" />
                                <Text ml="5" display={["none", "none", "none", width, width]} fontSize={"16px"} >{title}</Text>
                            </Flex>
                        </MenuButton>
                    </NavLink>
                </Link>
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
                    <NavHoverItem desc={desc} title={title} />
                </Flex>
            </Menu>

        </Flex>
    )
}

export default ProfileNav