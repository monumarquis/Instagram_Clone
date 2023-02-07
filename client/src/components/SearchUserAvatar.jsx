import React from 'react'
import { Flex, Text, Avatar } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const SearchUserAvatar = ({ imageUrl, username, setSearchUser, debounceOnChange, onClose }) => {
    const navigate = useNavigate()
    const handleSearch = () => {
        setSearchUser("")
        debounceOnChange("")
        onClose()
        navigate(`/${username}`)
    }
    console.log(imageUrl, username, " imageUrl , username ")
    return (
        <Flex my="3" flexDir={'row'} alignItems={"center"} justifyContent={"space-between"} onClick={handleSearch} w="100%" >
            <Avatar cursor={"pointer"} w={"10"} h="10" src={imageUrl} alt="" />
            <Text cursor={"pointer"} fontWeight={"500"} fontSize={"14"} >{username}</Text>
        </Flex>
    )
}

export default SearchUserAvatar