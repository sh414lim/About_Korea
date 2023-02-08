import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Swal from "sweetalert2";
import { requestLogOut } from "../hook/auth";
import { fontSizeState } from "../module/LoginAtom";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.one};
  z-index: 10;
  box-shadow: 0 5px 10px #00000026;
  z-index: 10;
`;

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 36px;
  transform: translate(-50%, -50%);
`;

const MyPageMenu = styled.div`
  display: flex;
  gap: 0 1rem;
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0 1rem;
  transform: translate(0%, -50%);
  & .Menu-btn {
    padding: 0.2rem 1.5rem;
    background: #3846ff;
    color: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 5px #00000026;
  }
`;

const LogOutButton = styled.button`
  padding: 0.2rem 1.5rem;
  background: #3846ff;
  color: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 5px #00000026;
`;

export default function Header() {
  const [currentToken, setCurrentToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkCookie = Cookies.get("token");
    if (checkCookie) {
      setCurrentToken(true);
    }
  }, [currentToken]);

  return (
    <Container>
      <Logo>
        <Link href="/">About KOREA</Link>
      </Logo>
      <MyPageMenu>
        {currentToken ? (
          <>
            <Link className="Menu-btn" href="/login/LoginPage">
              Mypage
            </Link>
            <LogOutButton onClick={requestLogOut}>LogOut</LogOutButton>
          </>
        ) : (
          <>
            <Link className="Menu-btn" href="/login/LoginPage">
              LOGIN
            </Link>
            <Link className="Menu-btn" href="/login/SignUpPage">
              SIGNUP
            </Link>
          </>
        )}
      </MyPageMenu>
    </Container>
  );
}
