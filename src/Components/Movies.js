import React from 'react';
import styled from 'styled-components';
import {selectMovies} from "../features/movie/movieSlice";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`

`
const Content = styled.div `
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    grid-gap: 25px;
`

const Wrap = styled.div `
    overflow: hidden;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);    
    border-radius: 11px;
    box-shadow: rgb(0 0 0 /71%) 0px 26px 30px -10px, rgb(0 0 0 / 75%) 0px 16px 10px -10px;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.07);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 /79%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }
`
function Movies() {
    const movies = useSelector(selectMovies);
    console.log(movies);
    return (
        <Container>
            <h3>Recommended for You</h3>
            <Content>
                {movies?.map((movie)=> ( //will loop and display movies and update by movie.id
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}> 
                                <img src= {movie.cardImg} alt="Adil Khan's Disney Plus Clone"/>
                            </Link>
                        </Wrap>
                    ))
                }
                <Wrap>
                    <img src= "" alt="Adil Khan's Disney Plus Clone"/>
                </Wrap>
                <Wrap>
                    <img src= "" alt="Adil Khan's Disney Plus Clone"/>
                </Wrap>
                <Wrap>
                    <img src= "" alt="Adil Khan's Disney Plus Clone"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
