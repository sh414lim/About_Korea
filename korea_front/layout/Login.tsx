import React from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";

const Box = styled.div`
  color: white;
`;

const InputGroup = styled.ul``;

const InputItem = styled.li``;

const SignInput = styled.input``;

const AuthGrop = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

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
        <GoogleLogin
          clientId={authKey.googleKey}
          buttonText="Google Login"

          // onSuccess={responseGoogle}
          // onFailure={responseGoogle}
        />
      </AuthGrop>
    </>
  );
}
