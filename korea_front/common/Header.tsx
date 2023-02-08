import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Swal from "sweetalert2";
import { requestLogOut } from "../hook/auth";
import { fontSizeState } from "../module/LoginAtom";

/* header z-index 1 ~ 10 */
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  background: #fff;
  box-shadow: 0 5px 10px #00000026;
  z-index: 10;
`;

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  color: ${(props) => props.theme.globalColors.main};
  font-size: 20px;
  font-weight: 700;
  transform: translate(0%, -50%);
`;

const GolbalMenuList = styled.ul`
  position: relative;
  display: inline-flex;
  top: 50%;
  left: 50%;
  gap: 0 4rem;
  transform: translate(-50%, -50%);
`;

const GolbalMenu = styled.li`
  position: relative;
  font-size: 18px;
  font-weight: 700;
`;

const MyPageMenu = styled.div`
  position: absolute;
  display: flex;
  gap: 0 1rem;
  top: 50%;
  right: 5%;
  transform: translate(0%, -50%);
  & .Menu-mypage {
    color: #333;
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
      <GolbalMenuList>
        <GolbalMenu>
          <Link href="/" className="Menu-main">
            Home
          </Link>
        </GolbalMenu>
        <GolbalMenu>
          <Link href="/" className="Menu-main">
            Product
          </Link>
        </GolbalMenu>
        <GolbalMenu>
          <Link href="/" className="Menu-main">
            About
          </Link>
        </GolbalMenu>
        <GolbalMenu>
          <Link href="/" className="Menu-main">
            Blog
          </Link>
        </GolbalMenu>
      </GolbalMenuList>
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
