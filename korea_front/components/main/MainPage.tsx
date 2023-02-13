import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import styled from "styled-components";
import MainLayout from "../../layout/main/MainLayout";
import ScrollEvent from "../ScrollEvent";
import MainBanner from "./MainBanner";
import MainIntrouduce from "./MainIntrouduce";
import MainNavigator from "./MainNavigator";

const Container = styled.div`
  margin: 0 auto;
`;

const MainContainer = styled.div`
  max-width: 85%;
  width: 100%;
  margin: 5rem auto;
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

const DumeContent = styled.div`
  height: 30vh;
  border-radius: 5px;
  box-shadow: 3px 5px 10px #00000026;
  padding: 0.5rem;
`;

export default function MainPage() {
  const key =
    "lSYafr8mWAHjJY9zI+69426243707368343131374841444352+GssWRGtowqtiZ+mTgWrS2/low==";
  useEffect(() => {
    //추후 인증키 => .env 로 변환
    console.log(process.env);
    axios
      .get(
        `http://openapi.seoul.go.kr:8088/69426243707368343131374841444352/json/SebcCollegeInfoKor/1/20/`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(Cookies.get("token"));
  return (
    <MainLayout>
      <Container>
        <MainBanner />
        {/* <ScrollEvent /> */}
        <MainNavigator />
        <MainIntrouduce />
        <MainContainer data-aos="fade-right" className="flex">
          <MainContent>
            <DumeContent>더미 컨텐츠2</DumeContent>
          </MainContent>
        </MainContainer>
        <MainContainer data-aos="fade-up-left" className="flex">
          <MainContent>
            <DumeContent>더미 컨텐츠3</DumeContent>
          </MainContent>
        </MainContainer>

        <MainContainer data-aos="zoom-in-up" className="flex">
          <MainContent>
            <DumeContent>더미 컨텐츠4</DumeContent>
          </MainContent>
        </MainContainer>
      </Container>
    </MainLayout>
  );
}
