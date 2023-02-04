import React, { useEffect } from 'react'
import LoginPhoneCarousel from '../components/LoginPhoneCarousel'
import { FaFacebook } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import {
    Box,
    FormControl,
    Input,
    Button,
    Container,
    InputRightElement,
    InputGroup,
    Image,
    Text,
    Center,
    HStack,
    Divider,
    useToast,
} from '@chakra-ui/react'
import { useState } from "react";
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, LogInDefault } from '../redux/auth/auth.actions';
const initState = {
    email: "",
    password: "",
};
const Login = () => {
    const toast = useToast()
    const [formData, setFormData] = useState(initState);
    const [show, setShow] = useState(false);
    const data = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleClick = () => setShow(!show);

    useEffect(() => {
        !data.isAuth && dispatch(LogInDefault())
    },[])
    if (data.isAuth) {
        toast({
            title: data.message,
            description: "hurray ! logged in",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
        return <Navigate to="/" />
    }
    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };
    const handelForm = (e) => {
        e.preventDefault();
        dispatch(LogIn(formData))
        console.log(formData);
    };
    console.log(data);
    return (
        <Box background={"gray.50"} maxW="105%" margin="auto" mr="-5" pb="10">
            <Box display="flex" justifyContent="center" maxW="100%" margin="auto" >
                <LoginPhoneCarousel />
                <Box maxW={["100%", "100%", "50%", "40%", "30%"]} >
                    <form onSubmit={handelForm} style={{ width: "100%", 'marginTop': "30px" }}>
                        <Container
                            maxW="90%"
                            mb="5"
                            pt="10"
                            centerContent
                            border={"1px solid #9da0a1"}
                            backgroundColor={"#fff"}
                        >
                            <Image boxSize={"60%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674468345/Instagaram_Media/felbpvh9zrjnttdondsg.png" alt="instagaram" />
                            <FormControl pt="10" pb="3" maxW="85%">
                                <Input
                                    name="email"
                                    type="text"
                                    placeholder="Phone number, username or email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required={true}
                                    _placeholder={{ fontSize: "13" }}
                                    variant="outline"
                                    pl="3"
                                    backgroundColor={"gray.100"}
                                />
                                <InputGroup size="md" marginTop={"3"}>
                                    <Input
                                        pr="4.5rem"
                                        name="password"
                                        type={show ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        _placeholder={{ fontSize: "13" }}
                                        variant="outline"
                                        pl="3"
                                        backgroundColor={"gray.100"}

                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {data.error &&
                                    <HStack w="100%" background={"red.100"} spacing={"2"} mt="5" p="2" >
                                        <MdError color={"red"} />
                                        <Text color={"red"} >{data.errorMessage}</Text>
                                    </HStack>
                                }
                                <Button colorScheme="blue" mt="3" mb="3" type="submit" h="35px" width={"100%"} isLoading={data.loading} loadingText='Submitting'>
                                    Log  in
                                </Button>
                                <HStack spacing="5" justifyContent="center">
                                    <Divider maxW="100px" borderColor="grey" orientation='horizontal' />
                                    <Text fontSize="sm" color={"grey"}>OR</Text>
                                    <Divider maxW="100px" borderColor="grey" orientation='horizontal' />
                                </HStack>
                                <Button mt="3" w={'full'} colorScheme={'facebook'} h="35px" leftIcon={<FaFacebook />}>
                                    <Center>
                                        <Text>Continue with Facebook</Text>
                                    </Center>
                                </Button>
                                <Text textAlign={"center"} color={"#6bb1d6"} mt="5" fontSize={"13"}>Forgotten your password ?</Text>
                            </FormControl>
                        </Container>
                    </form>
                    <Container centerContent maxW={"98%"} >
                        <Box background={"#fff"} display="flex" justifyContent="center" alignItems={"center"} w="100%" height={"50px"} border={"1px solid #9da0a1"}>
                            <Text color={"black"}>Don't have an account? <span style={{ "color": "#3690ba", "textDecoration": "bold" }}><NavLink to="/signup" >Sign up</NavLink></span></Text>
                        </Box>
                        <Text color={"black"} my="3">Get the app.</Text>
                        <HStack w="80%">
                            <Image boxSize={"45%"} src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="store" />
                            <Image boxSize={"45%"} src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="store" />
                        </HStack>
                    </Container>
                </Box>
            </Box>
            <HStack spacing="4" flexWrap={"wrap"} justifyContent={"center"} m="auto" mt="20" w="70%"  >
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Meta</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >About</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Blog</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Jobs</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Help</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >API</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Privacy</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Terms</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Top accounts</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Locations</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Instagaram Lite</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >Contact uploading and non-users</Text>
            </HStack>
            <HStack spacing="4" flexWrap={"wrap"} justifyContent={"center"} m="auto" mt="5" w="70%"  >
                <Text color={"grayText"} fontWeight={400} fontSize={13} >English (UK)</Text>
                <Text color={"grayText"} fontWeight={400} fontSize={13} >© 2023 Instagram from Monu Yadav</Text>
            </HStack>
        </Box>
    )
}

export default Login