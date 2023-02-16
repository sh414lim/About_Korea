import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { RequestloginApi } from "../pages/api/auth/api";
import { useRouter } from "next/router";
import { useSpring, animated } from "react-spring";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import axios from "axios";
import { AnimatedContainer } from "../common/AnimatedRouterEvent";

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

  const handleLogin = () => {
    RequestloginApi(Uemail, Upassword)
      .then((res: any) => {
        console.log(res);
        setToken(res.token);
        //로그인 방식 스토리지 vs cookie 방식 분석 필요
        // localStorage.setItem("token", token);
        //RECOIL 방식 사용 예쩡
        if (res.token) {
          Cookies.set("token", `Bearer ${res.token}`);
        }
        console.log(res.token);

        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "Login",
            text: "Success Login",
            confirmButtonText: "Login",
          }).then((res) => {
            if (res.isConfirmed) {
              axios.defaults.headers.Authorization = `Bearer ${token}`;

              router.push("/");
            }
          });
        }
      })
      .catch((err) => {
        console.log(err, 77);
      });
  };

  useEffect(() => {
    const cookie = Cookies.get("token");
  }, [token]);

  const springs = useSpring({
    from: {
      x: -1000,
      transition: " 0.1s",
    },
    to: { x: 0 },
  });

  const InputSpring = useSpring({
    from: {
      x: 700,
      transition: " 0.1s",
    },
    to: { x: 0 },
  });

  return (
    <>
      <Container>
        <Box>
          <AnimatedContainer
            style={{
              ...InputSpring,
            }}
          >
            <InputGroup>
              <InputTitle>Login</InputTitle>
              <InputDec>Please enter your registered information.</InputDec>
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
              <LoginButton onClick={handleLogin}>Login</LoginButton>
            </InputGroup>
          </AnimatedContainer>
        </Box>
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
                    <CommentTitle>Hello Friend!!</CommentTitle>
                  </CommentItem>
                  <CommentItem>
                    <CommentDec>
                      Did you make your first visit today?
                    </CommentDec>
                  </CommentItem>
                  <CommentItem>
                    <Link href="/login/SignUpPage">
                      <CommentButton>SIGN UP</CommentButton>
                    </Link>
                  </CommentItem>
                </CommentGroup>
              </TiTleGroup>
            </TextBox>
          </AnimatedContainer>
        </ImgBox>
      </Container>
    </>
  );
}
