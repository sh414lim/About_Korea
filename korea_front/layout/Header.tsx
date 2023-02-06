import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 57vw 43vw;
  width: 100vw;
  height: 7vh;
  background-color: black;
  color: white;
`;

const MypageContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 0px 30px 0px 0px;
`;

const LogoContainer = styled.div`
  display: flex;
  /* width: 50%; */
  font-size: 40px;
  margin: 100px 0px 0px 0px;
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
      <LogoContainer>ABOUT KOREA</LogoContainer>
      <MypageContainer>
        <MypageGroup>
          <MypageList>
            <Link href="/login/LoginPage">LOGIN</Link>
          </MypageList>
          <MypageList>SIGNUP</MypageList>
          <MypageList>INFO</MypageList>
        </MypageGroup>
      </MypageContainer>
    </Container>
  );
}
