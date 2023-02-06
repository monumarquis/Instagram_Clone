import {
    Avatar, Divider, Flex, Input, Text, Textarea, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Button,
    Box,
    Spinner,
    useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserBoi, getUserBoiWithOutReloading } from '../redux/userBoi/userBoi.actions';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const AccountEdit = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const dispatch = useDispatch()
    const hiddenFileInput = React.useRef(null);
    const [isImageUploading, setImageUploading] = useState(false)
    const [isDetailUploading, setDetailUploading] = useState(false)
    const [InputUsername, setInputUsername] = useState("")
    const [InputName, setInputName] = useState("")
    const [InputBoi, setInputBoi] = useState("")
    const auth = useSelector((state) => state.auth)
    const Data = useSelector((state) => state.userBoi)
    
    const handleUploadImage = async (result) => {
        // console.log(result,"trycatch")
        onClose()
        setImageUploading(true)
        try {
            let { data } = await axios.put(`https://nem-insta-backend.onrender.com/users/${Data.userBoi._id}/profileImage`, { imageUrl: result })
            console.log(data)
            dispatch(getUserBoiWithOutReloading(auth.userId))
            setImageUploading(false)
        }
        catch (err) {
            setImageUploading(false)
            console.log(err)
        }
    }
    const handleDelteImage = async () => {
        onClose()
        setImageUploading(true)
        try {
            let { data } = await axios.put(`https://nem-insta-backend.onrender.com/users/${Data.userBoi._id}/profileImage/delete`)
            console.log(data)
            dispatch(getUserBoiWithOutReloading(auth.username))
            setImageUploading(false)
        }
        catch (err) {
            setImageUploading(false)
            console.log(err)
        }
    }

    const handleInputClick = event => {
        hiddenFileInput.current.click();
    };
    const previewFile = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        previewFile(fileUploaded, (result) => {
            handleUploadImage(result)
            //    console.log("base64",result)
        })
    };
    const handlePostDetails = async () => {
        setDetailUploading(true)
        let username = InputUsername
        let boi = InputBoi
        let realname = InputName
        if (InputUsername === "") username = Data.userBoi.username
        if (InputBoi === "") boi = Data.userBoi.boi
        if (InputName === "") realname = Data.userBoi.realname
        console.log(username, boi, realname)
        try {
            let { data } = await axios.patch("https://nem-insta-backend.onrender.com/users/getProfile", { userId: auth.userId, realname, username, boi })
            console.log(data)
            setDetailUploading(false)
            toast({
                description: "Details Updtated",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            dispatch(getUserBoiWithOutReloading(auth.userId))
        } catch (err) {
            setDetailUploading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        dispatch(getUserBoi(auth.userId))
    }, [auth.username])

    if (Data.loading) {
        return <LoadingSpinner Sectionheight={"50px"} loaderWidth={"50px"} loaderHeight={"50px"} />
    }
    return (
        <Flex flexDir={"row"} border={"1px solid #a19f9f"} m="7" >
            {/* Left side */}
            <Flex flexDir={"column"} w="22%">
                <Flex flexDir={"column"} justifyContent={"left"} alignItems={"center"} w="100%" py="5" >
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" >Meta</Text>
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" >Some account settings are moving</Text>
                    <Text mb="2" w="77%" ml="4%" fontSize="13" fontWeight="400" >Soon, Accounts Centre will be the primary place to manage your account info, settings and experiences across Meta technologies such as Facebook and Instagram.</Text>
                    <Text mb="2" w="75%" ml="4%" fontSize="13" fontWeight="500" color="blue.400" >Learn More</Text>
                </Flex>
                <Divider orientation='horizontal' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                <Flex mt='4' flexDir={"column"} justifyContent={"left"} alignItems={"center"} w="100%">
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Edit Profile</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Change password</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Apps and Websites</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Email notification</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Push notification</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Manage Contacts</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Privacy and Security</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Ads</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Supervision</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Login Activity</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Emails from Instagaram</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Help</Text>
                    <Text mb="4" w="77%" ml="4%" fontSize="13" fontWeight="400" >Digital collectibles</Text>
                </Flex>
                <Divider orientation='horizontal' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                <Flex flexDir={"column"} justifyContent={"left"} alignItems={"center"} w="100%" py="5" >
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" >Meta</Text>
                    <Text mb="2" w="75%" ml="4%" fontSize="16" fontWeight="500" color="blue.400" >Account center</Text>
                    <Text mb="2" w="77%" ml="4%" fontSize="12" fontWeight="400" color="#878483" >Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing, and logging in.</Text>
                </Flex>
            </Flex>
            <Divider orientation='vertical' borderWidth={"0.5"} borderColor={'#a19f9f'} h="100%" />
            {/* rigth side */}
            <Flex w="75%">
                <Flex w="70%" m="auto" mt="4" flexDir={"column"} justifyContent="flex-end">
                    {/* Ist section */}
                    <Flex flexDir={"row"} w="70%" justifyContent={"space-between"} alignItems={"center"} >
                        <Flex pos="relative" flexDir={"row"} justifyContent={"flex-end"} w="23%">
                             <Avatar src={Data.userBoi.imageUrl} borderRadius={"50%"} objectFit={"cover"} w="40px" h="40px" brightness={isImageUploading && "60%"} />
                            {isImageUploading && <Box borderRadius={"50%"} pos="absolute" top="7px" right={"6px"} >
                                <Spinner />
                            </Box>}
                        </Flex>
                        <Flex flexDir="column" w="65%">
                            <Text fontSize="18" fontWeight="400" >{Data.userBoi.username}</Text>
                            <Text cursor="pointer" fontSize="16" fontWeight="500" onClick={onOpen} color="blue.400" mt="-1" >Change profile photo</Text>
                        </Flex>
                    </Flex>
                    {/* Second section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="16" fontWeight="400" >Name</Text>
                        </Flex>

                        <Input focusBorderColor='black' placeholder='Name' value={InputName} onChange={({ target: { value } }) => setInputName(value)} size='sm' w="76%" />
                    </Flex>
                    <Text fontSize="12" fontWeight="400" color={"#878483"} w="76%" ml="auto" mb="3" >Help people discover your account by using the name that you're known by: either your full name, nickname or business name.</Text>
                    <Text fontSize="12" fontWeight="400" color={"#878483"} w="76%" ml="auto" >You can only change your name twice within 14 days.</Text>
                    {/* third section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="16" fontWeight="400"  >Username</Text>
                        </Flex>

                        <Input focusBorderColor='black' placeholder='Username' value={InputUsername} onChange={({ target: { value } }) => setInputUsername(value)} size='sm' w="76%" />
                    </Flex>
                    <Text fontSize="12" fontWeight="400" color={"#878483"} w="76%" ml="auto" mb="3" >In most cases, you'll be able to change your username back to demonosjs for another 14 days. <span style={{ color: "blue", "fontWeight": "400", "fontSize": "12px" }}  >Learn more </span></Text>
                    {/* Fourth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="16" fontWeight="400" >Website</Text>
                        </Flex>

                        <Input focusBorderColor='black' placeholder='Website' size='sm' w="76%" />
                    </Flex>
                    {/* Fifth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} mt="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="16" fontWeight="400" >Boi</Text>
                        </Flex>

                        <Textarea maxLength={"150"} value={InputBoi} onChange={({ target: { value } }) => setInputBoi(value)} placeholder='Boi' size='sm' w="76%" />
                    </Flex>
                    <Text fontSize="12" fontWeight="400" mb="5" color={"#8c8b8b"} w="76%" ml="auto" >{InputBoi.length}/150</Text>
                    <Text fontSize="14" fontWeight="500" color={"grayText"} w="76%" ml="auto" >Personal information</Text>
                    <Text fontSize="12" fontWeight="400" color={"#878483"} w="76%" ml="auto" mb="3" >Provide your personal information, even if the account is used for a business, pet or something else. This won't be part of your public profile.</Text>
                    {/* Sixth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text focusBorderColor='black' fontSize="16" fontWeight="400" >Email</Text>
                        </Flex>

                        <Input focusBorderColor='black' placeholder='Email' size='sm' w="76%" />
                    </Flex>
                    {/* Seventh section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="16" fontWeight="400" >Phone No.</Text>
                        </Flex>

                        <Input focusBorderColor='black' placeholder='Phone Number' size='sm' w="76%" />
                    </Flex>
                    {/* Eighth section */}
                    <Flex flexDir={"row"} w="100%" justifyContent={"space-between"} my="5" alignItems={"center"} >
                        <Flex flexDir={"row"} justifyContent={"flex-end"} w="16%" alignContent={"center"}>
                            <Text fontSize="16" fontWeight="400" >Gender</Text>
                        </Flex>

                        <Input focusBorderColor='black' placeholder='Gender' size='sm' w="76%" />
                    </Flex>

                    <Button isLoading={isDetailUploading} colorScheme={"blue"} w="20%" m="auto" mt="10" onClick={handlePostDetails} >Submit</Button>
                </Flex>
            </Flex>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={true}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={"center"} >Change Profile Photo</ModalHeader>
                    <Divider orientation='horizontal' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                    <ModalBody m={0} p="0" >
                        <Text fontSize="16" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="500" color={"blue.400"} onClick={handleInputClick} >Upload Photo</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="16" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="500" color="red.500" >Remove Current Photo</Text>
                        <Divider orientation='horizontal' mt='3' borderWidth={"0.5"} borderColor={'#a19f9f'} w="100%" />
                        <Text fontSize="14" cursor={"pointer"} mt="3" textAlign={"center"} fontWeight="400" mb='5' onClick={onClose} >Cancel</Text>
                        <Input type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{ display: 'none' }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Flex>
    )
}

export default AccountEdit