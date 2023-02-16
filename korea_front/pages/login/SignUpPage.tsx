import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { PostSignUpApi } from "../api/auth/api";
import e, { Router } from "express";
import LoginLayout from "../../layout/login/LoginLayout";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { ImgObject } from "../../common/img";
import { AnimatedContainer } from "../../common/AnimatedRouterEvent";
import { useSpring } from "@react-spring/core";

const Box = styled.div`
  width: 60vw;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 40vw;
  /* background-image: url(${ImgObject.loginNote}); */
  height: 100vh;
  background-position: center center;
  background-size: cover;
  /* filter: blur(1.5px); */
  /* height: 45vh; */
  /* width: 100vw; */
  /* position: absolute; */
`;

const TextBox = styled.div`
  z-index: 0;
  background-color: black;
  width: 40vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;
`;

const TiTleGroup = styled.div`
  color: white;
`;
const CommentGroup = styled.ul`
  margin: 0px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const CommentItem = styled.li`
  padding: 20px;
`;

const CommentTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const CommentDec = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const CommentButton = styled.button`
  font-size: 20px;
  padding: 19px 150px 19px 150px;
  background-color: black;
  color: white;
  border: 3px solid white;
  border-radius: 20px;
  margin: 30px 0px 0px 0px;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
`;

const InputGroup = styled.ul``;

const InputItem = styled.li`
  /* align-content: flex-start; */
  /* justify-items: flex-start; */
`;

const InputTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 0px 0px 10px 0px;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
`;

const InputDec = styled.span`
  display: flex;
  justify-content: center;
  padding: 0px 0px 30px 0px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: grey;
`;

const SignInput = styled.input`
  font-size: 20px;
  width: 29vw;
  height: 7.5vh;
  margin: 10px 10px 10px 30px;
  border-radius: 10px;
  background-color: #eaeeed;
  padding: 10px;
  border: none;
`;

const LoginButton = styled.button`
  /* width: 80%; */
  margin: 20px 0px 0px 30px;
  height: 5.5vh;
  width: 29vw;
  background-color: black;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 5.95px 5.95px 4.6px;
    background-color: gray;
    transition: 0.5s;
    /* transform: 0.5s; */
  }
`;

export default function SignUpInput({ setInputMode }: any) {
  const [Uemail, setUemail] = useState("");
  const [Upassword, setpassword] = useState("");
  const [Ucountry, setUcountry] = useState("");

  const router = useRouter();

  const handleSignUp = () => {
    PostSignUpApi(Uemail, Upassword, Ucountry).then((res) => {
      console.log(res);
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Sign Up",
          text: " Membership registration completed.",
          confirmButtonText: "Login",
        }).then((res) => {
          if (res.isConfirmed) {
            router.push("/login/LoginPage");
          }
        });
      } else {
        Swal.fire("Failed to register as a member");
      }
    });
  };

  const springs = useSpring({
    from: {
      x: 1000,
      transition: " 0.1s",
    },
    to: { x: 0 },
  });

  const InputSpring = useSpring({
    from: {
      x: -700,
      transition: " 0.1s",
    },
    to: { x: 0 },
  });

  return (
    <>
      <Container>
        {/* <AnimatedContainer style={animationProps}> */}
        <ImgBox>
          <AnimatedContainer
            style={{
              ...springs,
            }}
          >
            <TextBox>
              <TiTleGroup>
                <CommentGroup>
                  <CommentItem>
                    <CommentTitle>WELCOME BACK! Friends!</CommentTitle>
                  </CommentItem>
                  <CommentItem>
                    <CommentDec>
                      If you've visited before, go log in.
                    </CommentDec>
                  </CommentItem>
                  <CommentItem>
                    <Link href="/login/LoginPage">
                      <CommentButton>Login</CommentButton>
                    </Link>
                  </CommentItem>
                </CommentGroup>
              </TiTleGroup>
            </TextBox>
          </AnimatedContainer>
        </ImgBox>
        <Box>
          <AnimatedContainer
            style={{
              ...InputSpring,
            }}
          >
            <InputGroup>
              <InputTitle>Create Account</InputTitle>
              <InputDec>Only Email and Nationality</InputDec>
              <InputItem>
                <SignInput
                  type="email"
                  placeholder="E-Mail"
                  onChange={(e) => {
                    setUemail(e.target.value);
                  }}
                />
              </InputItem>
              <InputItem>
                <SignInput
                  type="password"
                  placeholder="PASSWORD"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </InputItem>

              <InputItem>
                <SignInput
                  type="text"
                  placeholder="Country"
                  onChange={(e) => {
                    setUcountry(e.target.value);
                  }}
                />
              </InputItem>

              <LoginButton onClick={handleSignUp}>Sign UP</LoginButton>
              {/* <Link href="/login/LoginPage">
              <LoginButton>Back</LoginButton>
            </Link> */}
            </InputGroup>
          </AnimatedContainer>
        </Box>
      </Container>
    </>
  );
}
