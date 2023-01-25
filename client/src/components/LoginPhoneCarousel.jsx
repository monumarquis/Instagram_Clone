import React from 'react'
import "../styles/login.css"
import Carousel from './Carousel'
const LoginPhoneCarousel = () => {
    return (
        <>
            <div className="mobile">
                <div className="phone" style={{"zIndex":"1000" , "bottom":"0", "left":"120px"}}>
                    <div className="phone-mirror">
                        <div className="topWrapper">
                            <div className="camera"></div>
                            <div className="line-rec"></div>
                        </div>
                        <Carousel />
                        {/* <img className='image_login' src="https://res.cloudinary.com/duw6u7axs/image/upload/v1674458393/qclns8fyjxsk4erxf5tz.png" alt="oppo"  /> */}
                    </div>
                </div>
                <div className="phone" style={{"left":"0" }}>
                    <div className="phone-mirror">
                        <div className="topWrapper">
                            <div className="camera"></div>
                            <div className="line-rec"></div>
                        </div>
                        
                        <img className='image_login' src="https://s.taplink.ru/p/f/7/6/c/33870410.jpg?0?0" alt="oppo"  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPhoneCarousel