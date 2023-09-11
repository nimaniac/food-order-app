import React from 'react'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import pic4 from './assets/pic4.jpg'

const Carousel = () => {

    const imgStyles = {
        height: '60vh',
        width: '100vw',
        objectFit: 'cover'
    }

    const pics = [pic2, pic3, pic1, pic4];

    const settings = {
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div>
            <Slider
                {...settings}
            >
                {
                    pics.map((pic, index) => (
                        <div key={index}>
                            <img style={imgStyles} src={pic} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carousel