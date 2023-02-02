import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import LoginInput from "../../layout/LoginInput";
import SignUpInput from "../../layout/SignUpInput";

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

  @media ${(props) => props.theme.laptop} {
    font-size: 80px;
    color: white;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 50px;
    color: white;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 35px;
    color: white;
  }
`;

const SubTitle = styled.span`
  font-size: 40px;
  display: flex;
  color: white;
  top: 0;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  @media ${(props) => props.theme.laptop} {
    font-size: 30px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
  }

  @media ${(props) => props.theme.mobile} {
    color: white;
    font-size: 20px;
  }
`;

const TitleContainer = styled.div`
  /* margin: 60px 0px 0px 0px; */

  padding: 40px 0px 20px 0px;
  top: 0;
`;

const AllContainer = styled.div`
  background-color: black;
  height: 100vh;
`;

const InputContainer = styled.div`
  background-color: white;
  border-radius: 90px 90px 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 69vh;

  margin: 0px 0px 0px 100px;
  @media ${(props) => props.theme.laptop} {
    font-size: 30px;
    border-radius: 90px 90px 0px 0px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
    border-radius: 90px 90px 0px 0px;
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    color: white;
    font-size: 20px;
    border-radius: 60px 60px 0px 0px;
    width: 100%;
    margin: 0px 0px 0px 0px;
    height: 73vh;
  }
`;

export default function Login() {
  const [inputMode, setInputMODE] = useState(true);

  const authKey = {
    googleKey: process.env.GOOGLE_LOGIN_CLIENT_ID,
  };
  return (
    <AllContainer>
      <TitleContainer>
        <Title>About KOREA</Title>
        <SubTitle>Korean daily life tutorial.</SubTitle>
      </TitleContainer>

      <InputContainer>
        {inputMode ? (
          <LoginInput setInputMode={setInputMODE} />
        ) : (
          <SignUpInput setInputMode={setInputMODE} />
        )}
        <AuthGrop>
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
        </AuthGrop>
      </InputContainer>
    </AllContainer>
  );
}
