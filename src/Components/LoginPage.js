import React from 'react';
import styled from 'styled-components';
const Container = styled.main`
height: calc(100vh - 70px);
align-items: top;
position: relative;
display: flex;
justify-content: center;

&:before{
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  position: absolute;
  opacity:0.7;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
`
const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 101px;
    width: 80%;
    max-width: 650px;
    padding: 95px 35px;
`
const ContentLogoOne = styled.img`

    `
const Signup = styled.a`
    cursor: pointer;
    width: 100%;
    font-weight:bold;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1.5px;
    color: #f9f9f9;
    background-color: #0063e5;
    padding: 17px;
    border-radius: 4px;
    transition: all 250ms;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background: #0483ee;
    }
`
const About = styled.p`
    font-size: 11px;
    line-height:1.5;
    text-align: center;
    letter-spacing: 1.5px;
    `
const ContentLogoTwo = styled(ContentLogoOne)`
    width: 90%;`
function LoginPage() {
    return (
        <Container>
            <Content>
                <ContentLogoOne src="/images/cta-logo-one.svg"/>
                <Signup>GET IT HERE</Signup>
                <About>
                    This is an Adil Khan's Disney Plus Clone. You can find this code along with more of my portfolio on my github at www.github.com/akhan150. Hope you enjoy!
                </About>
                <ContentLogoTwo src="/images/cta-logo-two.png"/>
            </Content>
        </Container>
    )
}

export default LoginPage
