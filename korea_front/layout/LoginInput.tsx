import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { RequestloginApi } from "../pages/api/auth/api";
import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";

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
  border: 3px solid black;
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
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    height: 30px;
    margin: 5px 0px 0px 8px;
    font-size: 12px;
  }
`;

export default function LoginInput({ setInputMode }: any) {
  const [Uemail, setUemail] = useState("");
  const [Upassword, setpassword] = useState("");
  const [token, setToken] = useState("");

  const animationProps = useSpring({
    width: "80vw",

    from: {
      //   backgroundSize: "500px",

      width: "0vw",
      height: "70vh",
      transition: "all 0.1s",
    },
    // config: { mass: 5, tension: 500, friction: 80 },
  });

  const router = useRouter();

  const handleSignUp = () => {
    RequestloginApi(Uemail, Upassword)
      .then((res: any) => {
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
          <Link href="/login/SignUp">
            <SignUpButton>Do you want to sign up?</SignUpButton>
          </Link>
        </InputGroup>
      </Box>
    </>
  );
}
