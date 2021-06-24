import React from 'react'
import style from './Login.module.scss';
import styled, { keyframes } from 'styled-components';
import { GoogleOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons'
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
            <LoginWrapper >
               <LoginHeader >Login</LoginHeader>
               <SignInDiv
                  onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                  className='button is-rounded'>
                  <GoogleOutlined className={style.iconS} style={{ width: '50px', height: '50px' }} />
                  Sign in with Google
               </SignInDiv>
               <SignInDiv
                  onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                  className='button is-rounded has-background-black'>
                  <GithubOutlined className={style.iconS} style={{ width: '50px', height: '50px' }} />
                  Sign in with Github
               </SignInDiv>
               <SignInDiv
                  /*  onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} */
                  className='button is-rounded has-background-info'>
                  <TwitterOutlined className={style.iconS} style={{ width: '50px', height: '50px' }} />
                  Sign in with Twitter
               </SignInDiv>
            </LoginWrapper>
         </FlexContainer>
      </Container>
   )
}

const Container = styled.div`
height:100vh;
width:100vw;
background: lavender;
`

const FlexContainer = styled.div`
   height:70%;
   width:60%;
`

const blocksStartAnimation = keyframes`
   from{
      margin-right:40%;
   }

   to{ 
      margin-right:0;
   }
`

const LeftDecorateBox = styled.div`
   height:100%;
   width:50%;
   margin-right:40%;
   background-color:royalblue;
   -webkit-border-top-left-radius: 40px;
   -webkit-border-bottom-left-radius: 40px;
   -moz-border-radius-topleft: 40px;
   -moz-border-radius-bottomleft: 40px;
   border-top-left-radius: 40px;
   border-bottom-left-radius: 40px;
   animation:${blocksStartAnimation} 1s ease-in-out 1 forwards ;
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
animation:${wordsAnimation} 1s ease-in-out 1 forwards ;

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

const LoginWrapper = styled.div`
   height:100%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:50%;
   background-color:white;
   -webkit-border-top-right-radius: 40px;
   -webkit-border-bottom-right-radius: 40px;
   -moz-border-radius-topright: 40px;
   -moz-border-radius-bottomright: 40px;
   border-top-right-radius: 40px;
   border-bottom-right-radius: 40px;
`

const SignInDiv = styled.div`
font-family: 'Montserrat';
margin-bottom:2%;
font-weight:bold;
width:240px;
height:50px;
background-color:#F57f64;
color:white;
transition:0.3s all ease;

&:hover{
   color:white;
   transform:scale(1.2);
   border:none;
}
`
const LoginHeader = styled(Header)`
color:black;
margin:0 auto;
margin-top:20%;
&:after{
   background-color:black;
}
`
export default Login