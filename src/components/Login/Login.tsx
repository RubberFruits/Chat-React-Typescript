import React from 'react'
import style from './Login.module.scss';
import styled, { keyframes } from 'styled-components';
import { GoogleOutlined } from '@ant-design/icons'
import firebase from 'firebase/app'
import { auth } from '../../API/firebase'

const Login: React.FC = () => {
   return (
      <Container className='is-flex is-justify-content-center is-align-items-center'>
         <FlexContainer className='is-flex'>
            <LeftDecorateBox className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
               <Header>Welcome</Header>
               <Text>Chat application based on React and Typiscript</Text>
            </LeftDecorateBox>
            <FormWrapper className='is-flex-grow-0'>
               <SignInDiv
                  onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                  className='button is-rounded'>
                  <GoogleOutlined className={style.iconS} style={{ width: '50px', height: '50px' }} />
                  Sign in with Google
               </SignInDiv>
            </FormWrapper>
         </FlexContainer>
      </Container>
   )
}

const Container = styled.div`
height:100vh;
width:100vw;
background: linear-gradient(120deg, #0a1045, #4a1b56, #7d2b60, #aa4363, #d06364, #ed8a65, #ffb56b);
`

const FlexContainer = styled.div`
   height:70%;
   width:60%;
`

const LeftDecorateBox = styled.div`
   height:100%;
   width:50%;
   background-color:#F57f64;
   -webkit-border-top-left-radius: 40px;
   -webkit-border-bottom-left-radius: 40px;
   -moz-border-radius-topleft: 40px;
   -moz-border-radius-bottomleft: 40px;
   border-top-left-radius: 40px;
   border-bottom-left-radius: 40px;
`
const pseudoAnimation = keyframes`
from{ 
   width:0%;
   
}

to{ 
   width:75%;
}
`

const wordsAnimation = keyframes`
from{ 
   margin-bottom:0%;
   opacity:0;
}
to{ 
   margin-bottom:30%;
   opacity:1;
}
`

const pAnimation = keyframes`
from{ 
   opacity:0;
}
to{ 
   opacity:1;
}
`

const Header = styled.h1`
font-family: 'Montserrat';
margin-bottom:30%;
position:relative;
font-weight:bold;
height:max-content;
font-size:40px;
margin-right:20%;
width:max-content;
color:white;
animation:${wordsAnimation} 2s ease-in-out 1 forwards ;

&:after{
   content:'';
   position:absolute;
   background-color:white;
   height:2px;
   bottom:0;
   left:0;
   animation:${pseudoAnimation} 2s ease-in-out 1 forwards alternate;
}
`

const Text = styled.p`
height:max-content;
font-weight:thin;
font-size:25px;
color:white;
text-wrap:break-word;
font-family: 'Montserrat';
width:55%;
animation:${pAnimation} 2s ease-in-out 1 forwards ;
`

const FormWrapper = styled.div`
   height:100%;
   width:50%;
   background-color:#f5eee9;
   -webkit-border-top-right-radius: 40px;
   -webkit-border-bottom-right-radius: 40px;
   -moz-border-radius-topright: 40px;
   -moz-border-radius-bottomright: 40px;
   border-top-right-radius: 40px;
   border-bottom-right-radius: 40px;
`

const SignInDiv = styled.div`
font-family: 'Montserrat';
margin-left:50px;
font-weight:bold;
width:220px;
height:50px;
background-color:#F57f64;
color:white;
transition:0.3s all ease;

&:hover{
   color:white;
   transform:scale(1.3);
   border:none;
}
`

export default Login