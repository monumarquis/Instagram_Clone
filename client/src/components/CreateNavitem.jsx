import {
    Flex, Text, Icon, Link, Menu, MenuButton, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    IconButton,
    VStack,
    HStack,
    Textarea,
    InputGroup,
    InputRightElement,
    Input,
    Divider,
    useToast,
    Spinner,
    Avatar,
} from '@chakra-ui/react'
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavHoverItem from './NavHoverItem'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FaPhotoVideo } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomPost } from '../redux/randomPost/randomPost.actions';
const fileTypes = ["JPEG", "PNG", "GIF","EPS"];

const CreateNavitem = ({ navSize, title, icon, active, desc }) => {
    const { userId } = useSelector((state) => state.auth)
    const { userBoi } = useSelector((state) => state.userBoi)
    const dispatch = useDispatch()
    const toast = useToast()
    const [hover, sethover] = useState(false)
    const [loading, setLoading] = useState(false)
    const [previewSource, setpreviewSource] = useState("");
    const [location, setLocation] = useState("");
    const [caption, setCaption] = useState("");
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [removefile, steremovefile] = useState(false);
    const [uploadImg, setuploadImg] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const width = navSize === "small" ? "none" : "flex"

    const handleInput = (file) => {
        // console.log(file[0], 'input,details');
        steremovefile(false)
        setuploadImg(false)
        previewFile(file[0]);
    };
    //  save details on backend
    const handleUploadImage = async () => {
        console.log({ userId, desc: caption, imageUrl: previewSource});
        setLoading(true)
        try {

            let { data } = await axios.post("http://localhost:8001/posts", { userId, desc: caption, location, imageUrl: previewSource })
            toast({
                title: data.message,
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            setLoading(false)
            steremovefile(true)
            setuploadImg(false)
            setpreviewSource("")
            setCaption("")
            setLocation("")
            onClose()
            dispatch(getRandomPost())
            console.log(data.message);
        }
        catch (err) {
            setLoading(false)
            console.log(err);
        }

    }

    const handleBack = () => {
        steremovefile(true)
        setuploadImg(false)
        setpreviewSource("")
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setpreviewSource(reader.result);
        };
    };

    // console.log(previewSource, "base64Encodeimage");


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
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                motionPreset='slideInBottom'
                size={uploadImg ? "xl" : "md"}
                scrollBehavior={uploadImg && 'inside'}
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader >
                        <Text textAlign={"center"} >{previewSource ? "Review Your Post" : "Create New Post"}</Text>
                        <Divider w="100%" />
                        <Flex justifyContent={"space-between"} flexDir={"row"} mt="2" alignContent={"center"} >
                            {previewSource && <IconButton onClick={handleBack} textAlign={"left"} fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="black" icon={<AiOutlineArrowLeft />} />}
                            {previewSource && !uploadImg && <Text cursor={"pointer"} fontSize={'12'} onClick={() => { setuploadImg(true) }} color="blue" >Next</Text>}
                            {uploadImg && !loading && <Text cursor={"pointer"} fontSize={'12'} onClick={handleUploadImage} color="blue" >Share</Text>}
                            {uploadImg && loading && <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='gray.400' size='md' />}
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={!previewSource && "20"}  >
                        {!previewSource && <IconButton mb="10" mt="10" ml="36%" fontSize={["92px", "92px", "98px", "98px", "118px"]} background={"none"} _hover={{ background: "none", }} color="#414241" icon={<FaPhotoVideo />} />}
                        {!previewSource && <Text fontSize={"17"} fontWeight={"600"} mb="10" textAlign={"center"} >Drag photos and videos here</Text>}

                        {!previewSource && <FileUploader
                            multiple={true}
                            handleChange={handleInput}
                            file={removefile && "null"}
                            maxSize="100"
                            name="file"
                            label="Select From Computer"
                            hoverTitle="Drop Here"
                            classes="Drag_Input"
                            types={fileTypes}
                        />}
                        {previewSource && !uploadImg && <Image w="100%" h="60vh" objectFit={"cover"} src={previewSource} alt="upload" />}

                        {uploadImg &&
                            <Flex flexDir={"row"} w="100%" >
                                <Image w="50%" h="40vh" src={previewSource} alt="upload" />
                                <VStack spacing="5" w="400px" border={"1px solid gray"} pl="3" pt="3" >
                                    <HStack spacing="5" w="100%" >
                                        <Avatar w="30px" h="30px" borderRadius={"50%"} src={userBoi.imageUrl} />
                                        <Text fontWeight={"500"} fontSize={13}>{userBoi.username}</Text>
                                    </HStack>

                                    <Textarea ref={initialRef} w="100%" variant='unstyled' placeholder='Write a caption...' value={caption} onChange={({ target }) => setCaption(target.value)} _placeholder={{ color: "#a6a39c", fontSize: 16 }} />
                                    <Divider w="100%" />
                                    <InputGroup mt="-5">

                                        <Input variant='flushed' placeholder='Add location' value={location} onChange={({ target }) => setLocation(target.value)} />
                                        <InputRightElement children={<SlLocationPin color='gray.200' />} />
                                    </InputGroup>
                                </VStack>

                            </Flex>
                        }
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default CreateNavitem