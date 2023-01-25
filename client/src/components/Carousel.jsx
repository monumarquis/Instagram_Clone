import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://res.cloudinary.com/duw6u7axs/image/upload/v1674458393/qclns8fyjxsk4erxf5tz.png',
    'https://res.cloudinary.com/duw6u7axs/image/upload/v1674459330/odcnwktfhhbghulzlwte.png',
    'https://res.cloudinary.com/duw6u7axs/image/upload/v1674459293/mbpluclgx6dr2kwprbov.png',
    'https://res.cloudinary.com/duw6u7axs/image/upload/v1674459256/zhq7lcmx7xigikjcwxog.png'
  ];

  return (
    <Box
      position={'absolute'}
      marginTop={"-80px"}
      height={"full"}
      width={'100%'}

      >
      {/* CSS files for react-slick */}
     
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height="700px"
            top={"0"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${url})`}
            className='image_login'
          />
        ))}
      </Slider>
    </Box>
  );
}