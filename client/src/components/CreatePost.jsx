import {
    Flex, Text, Modal,
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
} from '@chakra-ui/react'
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FaPhotoVideo } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import { CiCamera } from 'react-icons/ci';
import axios from 'axios';
import { useSelector } from 'react-redux';
const fileTypes = ["JPEG", "PNG", "GIF"];

const CreatePost = () => {
    const { userId } = useSelector((state) => state.auth)
    const [previewSource, setpreviewSource] = useState("");
    const [location, setLocation] = useState("");
    const [caption, setCaption] = useState("");
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [removefile, steremovefile] = useState(false);
    const [uploadImg, setuploadImg] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
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
            onClose()
            steremovefile(true)
            setuploadImg(false)
            setpreviewSource("")
            setCaption("")
            setLocation("")
            let { resposne } = await axios.post("https://nem-insta-backend.onrender.com/posts", { userId, desc: caption, imageUrl: previewSource, likes: 0, })
            console.log(resposne);
        }
        catch (err) {
            console.log(err);
        }
        console.log({ userId, desc: caption, imageUrl: previewSource, likes: 0, });
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
        <Flex w="100%" m="auto" justifyContent={"center"} borderRadius={"50%"} pt="20" flexDir={"column"} >
            <Flex border="1.5px solid #212020" borderRadius={"50%"} justifyContent={"center"} alignItems={"center"} p="2" w={["20%", "20%", "10%", "10%", "8%"]} m="auto" >
                <IconButton onClick={onOpen} color="#212020" fontSize="40px" background={"none"} _hover={{ background: "none" }} icon={<CiCamera />} />
            </Flex>
            <Text textAlign={"center"} fontWeight={1000} my="3" fontSize={30} >Share Photos</Text>
            <Text textAlign={"center"} color="#212020" fontWeight={500} mb="3" fontSize={13} >When you share photos, they will appear on your profile.</Text>
            <Text textAlign={"center"} cursor={"pointer"} fontWeight={500} fontSize={13} onClick={onOpen} color={"blue"} >Share your first photo</Text>
            <Text w="65%" m="auto" color="gray" fontWeight={400} mt="20" fontSize={13} >Meta  About  Blog  Jobs  Help  API  Privacy  Terms  Top  accounts  Locations  Instagram  Lite  Contact  uploading  and  non-users</Text>
            <Modal
                isCentered
                closeOnOverlayClick={false}
                onClose={onClose}
                isOpen={isOpen}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                motionPreset='slideInBottom'
                size={uploadImg ? "xl" : "md"}
                scrollBehavior={uploadImg && 'inside'}
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

export default CreatePost