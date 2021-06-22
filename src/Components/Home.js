import React, {useEffect} from 'react';
import db from "../Firebase";
import styled from 'styled-components';
import ImageSlider from './ImageSlider.js';
import Viewer from "./Viewer";
import Movies from "./Movies";
import {setMovies} from "../features/movie/movieSlice";
import {useDispatch} from 'react-redux';

const Container = styled.main`
  overflow-x: hidden;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
//z-index: -1 is used to have the background image be behind all elements of display
function Home() {
  const dispatch = useDispatch();

    useEffect (() => {
        db.collection("movies").onSnapshot((snapshot) => { //collects information of movies from database, and onSnapshot takes picture of database at the time its called and returns it to us
          let displayMovies = snapshot.docs.map((doc) => { 
              console.log(doc.data());//map will loop through every snapshot in order to capture specified details, in our case id, doc id, and all stored information associated with the id
              return {id: doc.id, ...doc.data()} //capturing id of object and doc id which will be used to display information about the object, in this case, a specific movie
          })
          dispatch(setMovies(displayMovies)); //use redux to save movies in displayMovies
        })
    }, [])

    return (
        <Container>
          <ImageSlider />
          <Viewer />  
          <Movies />
        </Container>
    )
}

export default Home
