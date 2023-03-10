import { Avatar, Box, Image, Text, VStack } from '@chakra-ui/react'
import { HiPlusCircle } from "react-icons/hi"
import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { getUserBoi } from '../redux/userBoi/userBoi.actions';
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  arrows: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 4,
      }
    }
  ],
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const Story = () => {
  const dispatch = useDispatch()
  const { userBoi } = useSelector((state) => state.userBoi)
  const auth = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getUserBoi(auth.username))
}, [auth.username])
  return (
    <Box w="100%"
    //  border="1px solid blue"
      h="100px" mt="10" pl="5" >
      <Slider {...settings}>
        <VStack borderRadius={"50%"} pos={"relative"}  >
          <Avatar w="70px" h="70px" objectFit="cover" p="1" borderRadius={"50%"} src={userBoi.imageUrl} />
          <Text pl="2" fontWeight="500" fontSize="12" >Your Story</Text>
          <Box pos="absolute" bottom="5" right='3' ><HiPlusCircle color='blue.400' fontSize={30} /></Box>
        </VStack>
        <VStack borderRadius={"50%"}   >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}   >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}   >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}   >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}    >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}    >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}    >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}    >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
        <VStack borderRadius={"50%"}    >
          <Image w="70px" h="70px" objectFit="cover" className="border_image" p="1" borderRadius={"50%"} src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png" />
          <Text pl="2" fontWeight="500" fontSize="12" >USername</Text>
        </VStack>
      </Slider>
    </Box>
  )
}

export default Story




