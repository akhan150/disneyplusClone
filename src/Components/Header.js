import React, {useEffect} from 'react'
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {setUserLogin, selectUserName, selectPhoto, setSignOut} from "../features/user/userSlice";
import {auth, provider} from "../Firebase";
import {useHistory} from "react-router-dom";
const Nav = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 35px;
`
//display flex will push the logo down from top, align will vertically, and padding will push logo to the right to specified the amount 
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
  `
const LoginContainer = styled.div`
  display: flex;
  flex:1;
  justify-content: flex-end;
`
const Login = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    color: #000;
    border-color: transparent;
    background-color: #f9f9f9;
  }
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items:center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 19px;
    }
    span {
      font-size: 11px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: orange;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span: after {
        transform: scaleX(1);
        opacity:1;
      }
    }
  }
`
const UserImage = styled.img`
  width:48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user
      dispatch(setUserLogin ({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      history.push("/")
    })
  }
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login")
    })
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        dispatch(setUserLogin ({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push("/")
      }
    })
  }, [])
  const userName = useSelector(selectUserName);
  const loginPhoto = useSelector(selectPhoto);

    return (
        <Nav>
          <Logo src="./images/logo.svg" />
          {!userName ? (<LoginContainer><Login onClick={signIn}>LOGIN</Login></LoginContainer>): <>
          <NavMenu>
            <a>
              <img src= "./images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a>
              <img src= "./images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src= "./images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src= "./images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src= "./images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src= "./images/series-icon.svg" />
              <span>SERIES</span>
            </a>
            </NavMenu>  
            <UserImage onClick = {signOut} src = {loginPhoto}>
            </UserImage>
            </>
            }
        </Nav>
    )
}

export default Header
