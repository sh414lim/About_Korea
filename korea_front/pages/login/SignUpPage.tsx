import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { PostSignUpApi } from "../api/auth/api";
import e, { Router } from "express";
import LoginLayout from "../../layout/login/LoginLayout";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Box = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  /* align-content: center; */
  top: 0;
`;

const InputGroup = styled.ul`
  display: flex;
  flex-direction: column;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  @media ${(props) => props.theme.mobile} {
    padding: 10px 0px 0px 0px;
  }
`;

const InputItem = styled.li`
  display: flex;
  align-content: flex-start;
  justify-items: flex-start;
`;

const SignInput = styled.input`
  font-size: 20px;
  width: 23vw;
  height: 7.5vh;
  margin: 10px 10px 10px 30px;
  border-radius: 10px;
  border: 4px solid black;
`;

const LoginButton = styled.button`
  /* width: 80%; */
  margin: 20px 0px 0px 30px;
  height: 5.5vh;
  width: 23vw;
  background-color: black;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 5.95px 5.95px 4.6px;
    background-color: gray;
    transition: 0.5s;
    /* transform: 0.5s; */
  }
`;
const SignUpButton = styled.button`
  height: 5.5vh;
  width: 23vw;
  background-color: black;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin: 20px 0px 0px 30px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 5.95px 5.95px 4.6px;
    background-color: gray;
    transition: 0.5s;
    /* transform: 0.5s; */
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;

    height: 30px;
    margin: 5px 0px 0px 8px;
    font-size: 12px;
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
  return (
    <LoginLayout>
      <Box>
        <InputGroup>
          <InputItem>
            <SignInput
              type="text"
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

          <SignUpButton onClick={handleSignUp}>Sign UP</SignUpButton>
          <Link href="/login/LoginPage">
            <LoginButton>Back</LoginButton>
          </Link>
        </InputGroup>
      </Box>
    </LoginLayout>
  );
}
