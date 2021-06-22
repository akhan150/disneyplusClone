import React from 'react';
import styled from "styled-components";
const Container = styled.div`
    margin-top: 31px;
    display: grid;
    grid-gap: 27px;
    padding: 31px 0px 27px;
    grid-template-columns: repeat(5, minmax(0,1fr));
`
const Wrap = styled.div`
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 9.1);
    boarder-radius: 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px =10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        display: block;
        opacity: 1;
        z-index: 1;
        inset: 0px;
        top: 0;
        transition: opacity 450ms ease-in-out 0s;
    }
    video {
        height: 205px;
        width: 100%;
        top: 0px;
        position: absolute;
        z-index: 0;
        opacity: 0;
      }
    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0/ 81%) 0 40px 58px -17px;
        video {
            opacity: 1;
        }
    }
`
function Viewer() {
    return (
        <Container>
            <Wrap>
                <img src= "/images/viewers-disney.png" alt = "Adil Khan Disney Plus CLone" />
                <video playsInline={true} loop = {true} autoPlay = {true}>
                    <source src = "/videos/castle.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src= "/images/viewers-pixar.png" alt = "Adil Khan Disney Plus CLone" />
                <video playsInline={true} loop = {true} autoPlay = {true}>
                    <source src = "/videos/pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src= "/images/viewers-marvel.png" alt = "Adil Khan Disney Plus CLone" />
                <video playsInline={true} loop = {true} autoPlay = {true}>
                    <source src = "/videos/marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src= "/images/viewers-starwars.png" alt = "Adil Khan Disney Plus CLone" />
                <video playsInline={true} loop = {true} autoPlay = {true}>
                    <source src = "/videos/star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src= "/images/viewers-national.png" alt = "Adil Khan Disney Plus CLone" />
                <video playsInline={true} loop = {true} autoPlay = {true}>
                    <source src = "/videos/national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
};
export default Viewer
