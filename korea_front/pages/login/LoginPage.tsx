import React, { useState } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import LoginInput from "../../layout/LoginInput";
import SignUpInput from "../../layout/SignUpInput";
import { useSpring, animated } from "react-spring";
import LoginLayout from "../../layout/login/LoginLayout";

export default function Login() {
  const [inputMode, setInputMODE] = useState(true);

  const authKey = {
    googleKey: process.env.GOOGLE_LOGIN_CLIENT_ID,
  };
  return (
    <>
      <LoginInput setInputMode={setInputMODE} />
    </>
  );
}
