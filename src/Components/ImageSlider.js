import React from 'react';
import styled from "styled-components";
import slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = styled(slider)`
    margin-top: 19px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(151,158,171);
        }
    }
    button { 
        z-index: 1;
    }

    li.slick-active button:before {
        color: white;
    }
    .slick-list {
        overflow: visible;
    }

`
const Wrap = styled.div`
curson: pointer;
img {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    transition-duration: 300ms;
    width: 100%;
    height: 100%;
    
    &:hover {
        border: 4px solid rgba(249,249,249,0.8);
    }
}`

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src= "/images/slider-badging.jpg" alt="Adil Khan's Disney Plus Clone" />
            </Wrap>
            <Wrap>
                <img src= "/images/slider-badag.jpg" alt="Adil Khan's Disney Plus Clone" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider
