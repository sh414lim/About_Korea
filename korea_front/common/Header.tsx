import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Swal from "sweetalert2";
import { requestLogOut } from "../hook/auth";
import { UserInfo } from "../module/atoms/UserAtoms";
import { RequestUserInfoApi } from "../pages/api/auth/api";

/* header z-index 1 ~ 10 */
const Container = styled.div`
  position: relative;
  max-width: 90%;
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  border-bottom: solid 2px #ddd;
  z-index: 10;
`;

const Logo = styled.div`
  position: absolute;
  top: 50%;
  color: ${(props) => props.theme.globalColors.main};
  font-size: 20px;
  font-weight: 900;
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
  & .Menu-main {
    display: inline-flex;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.2s;
    &:hover {
      color: ${(props) => props.theme.globalColors.main};
      transition: all 0.2s;
    }
    &.on {
      position: relative;
      font-weight: 700;
      color: ${(props) => props.theme.globalColors.main};
      &::before {
        content: "";
        position: absolute;
        bottom: -17px;
        width: 100%;
        height: 3px;
        border-radius: 5px;
        background: ${(props) => props.theme.globalColors.main};
      }
    }
  }
`;

const MyPageMenu = styled.div`
  position: absolute;
  display: flex;
  gap: 0 1rem;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
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
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useRecoilState(UserInfo);

  const router = useRouter();
  useEffect(() => {
    const checkCookie = Cookies.get("token");
    if (checkCookie) {
      setCurrentToken(true);
    }
    RequestUserInfoApi(1);
  }, [currentToken]);

  return (
    <Container>
      <Logo>
        <Link href="/">About KOREA</Link>
      </Logo>
      <GolbalMenuList>
        <GolbalMenu>
          <Link href="/" className="Menu-main on">
            Home
          </Link>
        </GolbalMenu>
        <GolbalMenu>
          <Link href="/trip/ListPage" className="Menu-main">
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
            <Link className="Menu-btn" href={`/detail/Mypage?id=`}>
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
