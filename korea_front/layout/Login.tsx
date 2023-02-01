import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";

const Box = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  align-content: center;
`;

const InputGroup = styled.ul`
  padding: 150px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  @media ${(props) => props.theme.mobile} {
    padding: 50px;
  }
`;

const InputItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const SignInput = styled.input`
  font-size: 20px;
  margin: 5px;
  width: 350px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid black;
  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
    width: 150px;
    height: 25px;
  }
`;

const AuthGrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const AuthButton = styled.button`
  background-color: white;
  border: none;
`;
const AuthImg = styled.img``;

export default function Login() {
  const authKey = {
    googleKey: process.env.GOOGLE_LOGIN_CLIENT_ID,
  };
  return (
    <>
      <Box>
        <InputGroup>
          <InputItem>
            <SignInput type="text" placeholder="E-Mail" />
          </InputItem>
          <InputItem>
            <SignInput type="text" placeholder="PASSWORD" />
          </InputItem>
        </InputGroup>
      </Box>
      <AuthGrop>
        <AuthButton>
          <img
            src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png?hl=ko"
            width="200"
            // alt="카카오 로그인 버튼"
          />
          {/* <GoogleLogin clientId={authKey.googleKey} buttonText="Google Login" /> */}
        </AuthButton>
        <AuthButton>
          <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="200"
            alt="카카오 로그인 버튼"
          />
        </AuthButton>
        <AuthButton>
          <img
            src="/design/human-interface-guidelines/technologies/sign-in-with-apple/images/apple-id-watch-44mm.png"
            width="200"
            alt="카카오 로그인 버튼"
          />
        </AuthButton>
      </AuthGrop>
    </>
  );
}
