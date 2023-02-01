import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import LoginInput from "./LoginInput";
import SignUpInput from "./SignUpInput";

const Box = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  /* align-content: center; */
  top: 0;
`;

const InputGroup = styled.ul`
  padding: 40px;
  display: flex;
  flex-direction: column;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  @media ${(props) => props.theme.mobile} {
    padding: 50px;
  }
`;

const InputItem = styled.li`
  display: flex;
  align-content: flex-start;
  justify-items: flex-start;
`;

const SignInput = styled.input`
  font-size: 20px;
  width: 400px;
  height: 60px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
    width: 180px;
    height: 35px;
  }
`;

const LoginButton = styled.button`
  /* width: 80%; */
  margin: 20px 0px 0px 00px;
  height: 50px;
  background-color: #417df5;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 10px;

  @media ${(props) => props.theme.mobile} {
    width: 90%;
    height: 30px;
    margin: 5px 0px 0px 8px;
    font-size: 15px;
  }
`;
const SignUpButton = styled.button`
  margin: 20px 0px 0px 00px;
  height: 50px;
  background-color: #6bc7a1;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    /* transform: 0.5s; */
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;

    height: 30px;
    margin: 5px 0px 0px 8px;
    font-size: 12px;
  }
`;

const AuthGrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  align-items: center;
  top: 0;
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
  width: 300px;
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

export default function Login() {
  const [inputMode, setInputMODE]: boolean = useState(true);

  const authKey = {
    googleKey: process.env.GOOGLE_LOGIN_CLIENT_ID,
  };
  return (
    <>
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
    </>
  );
}
