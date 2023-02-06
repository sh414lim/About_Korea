import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import LoginInput from "../../layout/LoginInput";
import SignUpInput from "../../layout/SignUpInput";
import { useSpring, animated } from "react-spring";
const AuthGrop = styled.div`
  margin: 0px 0px 50px 0px;
`;
const AuthButton = styled.button`
  background-color: white;
  border: none;
  width: 50%;

  @media ${(props) => props.theme.laptop} {
    color: green;
  }

  @media ${(props) => props.theme.tablet} {
    color: blue;
  }

  @media ${(props) => props.theme.mobile} {
    color: red;
  }
`;
const AuthImg = styled.img`
  width: 250px;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    /* transform: 0.5s; */
  }
  @media ${(props) => props.theme.laptop} {
    width: 300px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 200px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 150px;
  }
`;

const Title = styled.h5`
  top: 0;
  /* position: absolute; */
  /* padding: 0px */
  font-size: 76px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  align-content: center;
  &:hover {
    color: gray;
    transition: 0.3s;
  }
`;

const TitleContainer = styled.div`
  padding: 40px 0px 20px 0px;
  top: 0;
`;

const InputContainer = animated(styled.div`
  background-color: white;
  border-radius: 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  height: 70vh;
`);

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

// const InputContainer = styled.div`
//   background-color: white;
//   border-radius: 90px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   width: 40vw;
//   height: 70vh;
// `;

export default function Login() {
  const [inputMode, setInputMODE] = useState(true);
  const animationProps = useSpring({
    width: "40vw",
    height: "70vh",

    from: {
      //   backgroundSize: "500px",

      width: "0vw",
      height: "70vh",
      transition: "all 0.1s",
    },
    // config: { mass: 5, tension: 500, friction: 80 },
  });

  const authKey = {
    googleKey: process.env.GOOGLE_LOGIN_CLIENT_ID,
  };
  return (
    <AllContainer>
      <TitleContainer>
        <Title>
          <Link href="/">About KOREA</Link>
        </Title>
      </TitleContainer>

      <InputContainer style={animationProps}>
        {inputMode ? (
          <LoginInput setInputMode={setInputMODE} />
        ) : (
          <SignUpInput setInputMode={setInputMODE} />
        )}
        {/* <AuthGrop>
          <AuthButton
            onClick={() => {
              console.log("google");
            }}
          >
            <AuthImg src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png?hl=ko" />
          </AuthButton>
          <AuthButton
            onClick={() => {
              console.log("kakao");
            }}
          >
            <AuthImg
              src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
              alt="카카오 로그인 버튼"
            />
          </AuthButton>
        </AuthGrop> */}
      </InputContainer>
    </AllContainer>
  );
}
