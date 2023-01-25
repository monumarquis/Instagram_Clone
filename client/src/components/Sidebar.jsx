import { Flex, IconButton, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi"
import { MdHomeFilled } from "react-icons/md"
import { BsSearch, BsInstagram } from "react-icons/bs"
import { SlCompass } from "react-icons/sl"
import { SlHeart } from "react-icons/sl"
import { CgAddR } from "react-icons/cg"
import { TfiVideoClapper } from "react-icons/tfi"
import { RiMessengerLine } from "react-icons/ri"
import { RxHamburgerMenu } from "react-icons/rx"
import Navitem from './Navitem'
import ProfileNav from './ProfileNav'
const Sidebar = () => {
    const [navSize, setNavSize] = useState("large")
    const togglemenu = () => {
        if (navSize === "small") setNavSize("large")
        else setNavSize("small")
    }
    const width = navSize === "small" ? "80px" : "260px"
    return (
        <Flex pos="fixed" top="1px" left="0" h="110vh" borderRight={"1px solid #999790"}
            w={['80px', "80px", "80px", width, width]}
            borderRadius={navSize === "small" ? "15px" : "0"}
            flexDirection={"column"} justifyContent="space-between"
        >
            {/* Navigaton Part of Sidebar */}
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"

            >
                <IconButton display={["initial", "initial", "initial", "none", "none"]} fontSize={25} pl="5" background="none" color="black" _hover={{ background: "none" }} icon={<BsInstagram />} />
                <Flex alignItems={"center"} flexDir="row" mt="4" pl={navSize === "small" ? "4" : "0"} display={["none", "none", "none", "flex", "flex"]} w="100%">
                    <IconButton pl="4" background="none" color="black" _hover={{ background: "none" }} icon={<FiMenu />} onClick={togglemenu} />
                    <Image w={"110px"} display={navSize === "small" ? "none" : "initial"} ml="5" src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674468345/Instagaram_Media/felbpvh9zrjnttdondsg.png" alt="Instagaram" />
                </Flex>
                <Navitem navSize={navSize} icon={MdHomeFilled} title="Home" desc="See All Friend's Post " />
                <Navitem navSize={navSize} icon={BsSearch} title="Search" desc="Search For User's " />
                <Navitem navSize={navSize} icon={SlCompass} title="Explore" desc="Explore new Content" />
                <Navitem navSize={navSize} icon={TfiVideoClapper} title="Reels" desc="See Top Videos " />
                <Navitem navSize={navSize} icon={RiMessengerLine} title="Messages" desc="See Your Messages" />
                <Navitem navSize={navSize} icon={SlHeart} title="Notifications" desc="See Your Notifcations" />
                <Navitem navSize={navSize} icon={CgAddR} title="Create" desc="Upload Your Post's " />
                <ProfileNav navSize={navSize} title="Profile" desc="See Your Profile" />
                <Navitem navSize={navSize} icon={RxHamburgerMenu} title="More" desc="Setting Your Account" />
            </Flex>

        </Flex>
    )
}

export default Sidebar