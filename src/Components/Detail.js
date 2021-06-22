import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import db from "../Firebase";
const Container = styled.div`
    overflow: hidden
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    margin-top: 55px;
    min width: 200 px;
    img{
        height:100%;
        width: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display:flex;
    align-items: center
`
const PlayButton = styled.button`
    cursor: pointer;
    height: 57px;
    padding: 0px 24px;
    background: rgb(249, 249, 249);
    border: none;
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-right: 22px;
    letter-spacing: 1.7px;

    &:hover {
        background: rgb(197, 197, 197);
    }
`
const TrailerButton = styled(PlayButton) `
    background: rgba(0, 0, 0, 0.2);
    boarder: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    cursor: pointer;
    height: 45px;
    width: 45px;
    align-tems: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    margin-right: 15px;
    span {
        font-size: 31px;
        color: white;
    }
    &:hover {
        background: rgb(197, 197, 197);
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const Subtitle = styled.div`
    min-height: 19px;
    font-size: 15 px;
    color: rgb(249, 249, 249);
    margin-top: 25px;
`
const Description = styled.div`
    font-size: 21px;
    max-widthL 50px;    
    line-height: 1.4;
    color: rgb(249, 249, 249);
    margin-top: 17px;
`
function Detail() {
    const {id} = useParams();
    const[displayMovie, setMovie] = useState();
    useEffect(() => {
        db.collection("movies") //fetches movie info from the database
        .doc(id) //searches with id paramater and looks for match, then selects it as doc reference
        .get() //if match is found, it reads the document reference
        .then((doc) => { //promise
            if(doc.exists){
               setMovie(doc.data()); //saves movie data if document reference exists
            }
            else{

            }
        })
    }, [id])

    console.log("Movie is", displayMovie) //page loads before the data from database is retrieved so condition of loading page needs to be made when data is retrieved, not before
    return (
        <Container>
            {displayMovie && ( <>
            <Background>
                <img src={displayMovie.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={displayMovie.titleImg} />
            </ImageTitle>
            
            <Subtitle>
               {displayMovie.subTitle}
            </Subtitle>
            <Description>
                {displayMovie.description}
            </Description>
            </>
            )}
            <Controls>
                <PlayButton>
                    <img src = "/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src = "/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src= "/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
        </Container>
    )
}

export default Detail
