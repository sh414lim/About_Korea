import React, { useEffect } from "react";
import styled from "styled-components";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";

const MainContainer = styled.div`
  max-width: 90%;
  width: 95%;
  height: 20vh;
  margin: 2rem auto;
  /* background-color: ${(props) => props.theme.globalColors.main}; */
  border-radius: 20px;
  &.flex {
    display: flex;
    gap: 2%;
  }
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  &.half {
    width: 49%;
  }
`;
const TitleBox = styled.div``;

const NavTitle = styled.h2`
  font-size: 2rem;
  width: 20vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  /* background-color: yellow; */
`;

const MainNavList = styled.ul`
  display: flex;
  height: 20vh;
`;

const MainNavItem = styled.li`
  font-size: 2rem;
  margin: 0px 10px 0px 0px;
  width: 17vw;
  border-radius: 0px 5px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 5px #00000026;
  margin: 20px;
  &:hover {
    background-color: #a5c4e3;
  }
`;
const ItemTitle = styled.span`
  color: white;
`;

const IconBox = styled.div`
  background-color: white;
  border: box;
  width: 7vw;
  height: 8vh;
  border-radius: 10px;
  /* color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainNavigator() {
  return (
    <>
      <MainContainer>
        <MainContent className="main-nav">
          <MainNavList>
            <MainNavItem>
              <IconBox>
                <RateReviewIcon fontSize="large" />
              </IconBox>
              <ItemTitle>123</ItemTitle>
            </MainNavItem>
            <MainNavItem>
              <PublicIcon sx={{ color: "blue" }} fontSize="large" />
              <ItemTitle>123</ItemTitle>
            </MainNavItem>
            <MainNavItem>
              <AccountBalanceIcon />
              <ItemTitle>123</ItemTitle>
            </MainNavItem>
            <MainNavItem>
              <LocalAirportIcon />
              <ItemTitle>123</ItemTitle>
            </MainNavItem>
          </MainNavList>
        </MainContent>
      </MainContainer>
    </>
  );
}
