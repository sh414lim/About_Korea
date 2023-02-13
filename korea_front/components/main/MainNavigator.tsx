import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 2rem auto;
  &.flex {
    display: flex;
    gap: 2%;
  }
`;

const MainContent = styled.div`
  width: 100%;
  &.half {
    width: 49%;
  }
  &.main-nav{
    display: flex;
    align-items: center;
    margin: 4rem 0;
    padding: 0 4rem 2rem 4rem;
    border-radius: 3rem;
    background: ${(props) => props.theme.globalColors.main};
    box-shadow: 3px 5px 10px #00000026;
  }
`;

const NavTitle = styled.h2`
  width: 20%;
  margin-top: 2rem;
  color: #fff;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.2;
`;

const MainNavList = styled.ul`
  display: flex;
  width: 80%;
`;

const MainNavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 2rem 2rem 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  transition: all .2s;
  &:hover {
    background: ${(props) => props.theme.globalColors.sub1};
    transition: all .2s;
      & div {
      box-shadow: 3px 5px 10px #00000026;
      transition: all .2s;
    }
  }
  & div {
    background: #fff;
    width: 120px;
    height: 120px;
    border-radius: 1rem;
    transition: all .2s;
  }
  & h2 {
    margin-top: 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
  }
  & p {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
  }
`;

export default function MainNavigator() {
  return (
    <>
      <MainContainer>
        <MainContent className="main-nav">
          <NavTitle>
            About<br />Another
          </NavTitle>
          <MainNavList>
            <MainNavItem>
              <div></div>
              <h2>Product</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
            <MainNavItem>
              <div></div>
              <h2>About</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
            <MainNavItem>
              <div></div>
              <h2>Blog</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
            <MainNavItem>
              <div></div>
              <h2>Sign-Up</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
            <MainNavItem>
              <div></div>
              <h2>Sign-Up</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
          </MainNavList>
        </MainContent>
      </MainContainer>
    </>
  );
}
