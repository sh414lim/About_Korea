import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { RequestloginApi } from "../pages/api/auth/api";
import { useRouter } from "next/router";

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
  border: 1px solid gray;
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

export default function LoginInput({ setInputMode }) {
  const [Uemail, setUemail] = useState("");
  const [Upassword, setpassword] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  const handleSignUp = () => {
    RequestloginApi(Uemail, Upassword)
      .then((res) => {
        console.log(res);
        setToken(res.token);
        router.push("/main/introduce");
      })
      .catch((err) => {
        console.log(err, 77);
      });
  };
  return (
    <>
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
          <LoginButton onClick={handleSignUp}>Sign In</LoginButton>
          <SignUpButton
            onClick={() => {
              setInputMode(false);
            }}
          >
            Do you want to sign up?
          </SignUpButton>
        </InputGroup>
      </Box>
    </>
  );
}
