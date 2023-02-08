import Link from "next/link";
import React from "react";
import styled from "styled-components";

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
// const MypageContainer = styled.div`
//   display: flex;
//   justify-content: end;
//   margin: 0px 30px 0px 0px;
// `;

// const Title = styled.h5`
//   top: 0;
//   &:hover {
//     color: gray;
//     transition: 0.3s;
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   font-size: 40px;
//   justify-content: end;
//   align-content: center;
//   align-items: center;
// `;

// const MypageGroup = styled.ul`
//   display: flex;
//   font-size: 17px;
// `;

// const MypageList = styled.li`
//   padding: 10px;
//   &:hover {
//     color: gray;
//     transition: 0.3s;
//   }
// `;

export default function Header() {
  return (
    <Container>
      <Logo>
        <Link href="/">About KOREA</Link>
      </Logo>
      <MyPageMenu>
        <Link className="Menu-btn" href="/login/LoginPage">
          LOGIN
        </Link>
        <Link className="Menu-btn" href="/login/SignUpPage">
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
