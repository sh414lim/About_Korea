import Link from "next/link";
import React from "react";
import styled from "styled-components";

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
  }
`;


export default function Header() {
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
        <Link className="Menu-mypage" href="/login/LoginPage">
          LOGIN
        </Link>
        <Link className="Menu-mypage" href="/login/SignUpPage">
          SIGNUP
        </Link>
      </MyPageMenu>
      {/* <LogoContainer>
        <Link href="/">
          <Title>About KOREA</Title>
        </Link>
      </LogoContainer>
      <MypageContainer>
        <MypageGroup>
          <MypageList>
            <Link href="/login/LoginPage">LOGIN</Link>
          </MypageList>
          <MypageList>
            <Link href="/login/SignUpPage">SIGNUP</Link>
          </MypageList>
          <MypageList>INFO</MypageList>
        </MypageGroup>
      </MypageContainer> */}
    </Container>
  );
}
