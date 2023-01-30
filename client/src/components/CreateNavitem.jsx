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
} from '@chakra-ui/react'
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavHoverItem from './NavHoverItem'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FaPhotoVideo } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import axios from 'axios';
import { useSelector } from 'react-redux';
const fileTypes = ["JPEG", "PNG", "GIF"];

const CreateNavitem = ({ navSize, title, icon, active, desc }) => {
    const { userId } = useSelector((state) => state.auth)
    const toast = useToast()
    const [hover, sethover] = useState(false)
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
        console.log({ userId, desc: caption, imageUrl: previewSource, likes: 0, });
        try {

            let { data } = await axios.post("https://nem-insta-backend.onrender.com/posts", { userId, desc: caption, imageUrl: previewSource, likes: 0, })
            toast({
                title: data.message,
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            onClose()
            steremovefile(true)
            setuploadImg(false)
            setpreviewSource("")
            setCaption("")
            setLocation("")
            console.log(data.message);
        }
        catch (err) {
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
                    <ModalHeader borderBottom={"1px solid gray"} mb="30" >
                        <Flex justifyContent={"space-between"} flexDir={"row"} mt="10" alignContent={"center"} >
                            {previewSource && <IconButton onClick={handleBack} textAlign={"left"} fontSize={["22px", "22px", "28px", "28px", "28px"]} background={"none"} _hover={{ background: "none", color: "#95989c" }} color="black" icon={<AiOutlineArrowLeft />} />}
                            {previewSource && !uploadImg && <Text cursor={"pointer"} fontSize={'12'} onClick={() => { setuploadImg(true) }} color="blue" >Next</Text>}
                            {uploadImg && <Text cursor={"pointer"} fontSize={'12'} onClick={handleUploadImage} color="blue" >Share</Text>}
                        </Flex>
                        <Text textAlign={"center"} >{previewSource ? "Review Your Post" : "Create New Post"}</Text>

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
                        {previewSource && !uploadImg && <Image w="100%" h="100%" src={previewSource} alt="upload" />}

                        {uploadImg &&
                            <Flex flexDir={"row"} w="100%" >
                                <Image w="50%" h="100%" src={previewSource} alt="upload" />
                                <VStack spacing="5" w="400px" border={"1px solid gray"} pl="3" pt="3" >
                                    <HStack spacing="5" w="100%" >
                                        <Image w="30px" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/103979538?s=40&v=4" />
                                        <Text fontWeight={"500"} fontSize={13} >User Name</Text>
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