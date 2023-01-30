import React from 'react'
import '../styles/spinner.css'
import { Box } from '@chakra-ui/react'
const LoadingSpinner = (Sectionheight ,loaderHeight,loaderWidth) => {
    return (
        <Box className='section' minH={Sectionheight} mt="10" >
            <Box className='loader' w={loaderWidth} h={loaderHeight}>
                <span style={{ "--i": 1 }} ></span>
                <span style={{ "--i": 2 }} ></span>
                <span style={{ "--i": 3 }} ></span>
                <span style={{ "--i": 4 }} ></span>
                <span style={{ "--i": 5 }} ></span>
                <span style={{ "--i": 6 }} ></span>
                <span style={{ "--i": 7 }} ></span>
                <span style={{ "--i": 8 }} ></span>
                <span style={{ "--i": 9 }} ></span>
                <span style={{ "--i": 10 }} ></span>
                <span style={{ "--i": 11 }} ></span>
                <span style={{ "--i": 12 }} ></span>
                <span style={{ "--i": 13 }} ></span>
                <span style={{ "--i": 14 }} ></span>
                <span style={{ "--i": 15 }} ></span>
                <span style={{ "--i": 16 }} ></span>
                <span style={{ "--i": 17 }} ></span>
                <span style={{ "--i": 17 }} ></span>
                <span style={{ "--i": 18 }} ></span>
                <span style={{ "--i": 19 }} ></span>
                <span style={{ "--i": 20 }} ></span>
            </Box>
        </Box>
    )
}

export default LoadingSpinner