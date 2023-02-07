import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 10;
  position: absolute;
  display: grid;
  grid-template-columns: 57vw 43vw;
  width: 100vw;
  height: 10vh;
  padding: 0px 0px 0px 0px;
  color: white;
`;

const MypageContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 0px 30px 0px 0px;
`;

const Title = styled.h5`
  top: 0;
  &:hover {
    color: gray;
    transition: 0.3s;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  font-size: 40px;
  justify-content: end;
  align-content: center;
  align-items: center;
`;

const MypageGroup = styled.ul`
  display: flex;
  font-size: 17px;
`;

const MypageList = styled.li`
  padding: 10px;
  &:hover {
    color: gray;
    transition: 0.3s;
  }
`;

export default function Header() {
  return (
    <Container>
      <LogoContainer>
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
      </MypageContainer>
    </Container>
  );
}
