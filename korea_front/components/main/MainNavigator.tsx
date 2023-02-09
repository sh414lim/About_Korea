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
`;

const NavTitle = styled.h2`
  font-size: 2rem;
`;

const MainNavList = styled.ul`
  display: flex;
`;

const MainNavItem = styled.li`
  font-size: 2rem;
`;

export default function MainNavigator() {
  return (
    <>
      <MainContainer>
        <MainContent className="main-nav">
          <NavTitle>
            About Another
          </NavTitle>
          <MainNavList>
            <MainNavItem>
              <h2>Product</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
            <MainNavItem>
              <h2>Product</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
            <MainNavItem>
              <h2>Product</h2>
              <p>더미 텍스트</p>
            </MainNavItem>
          </MainNavList>
        </MainContent>
      </MainContainer>
    </>
  );
}
