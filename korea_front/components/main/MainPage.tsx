import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ImgObject } from "../../common/img";
import MainLayout from "../../layout/main/MainLayout";
import ScrollEvent from "../ScrollEvent";
import MainBanner from "./MainBanner";
import MainIntrouduce from "./MainIntrouduce";
import MainNavigator from "./MainNavigator";

const Container = styled.div`
  margin: 0 auto;
`;

const MainContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 5rem auto;
  /* background-color: #f9fafb; */
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

const ContentCollege = styled.div`
  height: 50vh;
  /* width: 30vw; */
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  margin: 5rem 0px 0px 0px;
  background-color: #f9fafb;
  align-items: center;
`;

const TripCollege = styled.div`
  height: 50vh;
  /* width: 30vw; */
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  margin: 5rem 0px 0px 0px;
  /* background-color: #f9fafb; */
  align-items: center;
`;

const ImgBox = styled.div`
  background-image: url(${ImgObject.house});
  background-position: center center;
  background-size: cover;
  height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 30vw;
`;

const TripBox = styled.div`
  background-image: url(${ImgObject.trip});
  background-position: center center;
  background-size: cover;
  height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 30vw;
`;

const ReviewBox = styled.div`
  background-image: url(${ImgObject.college});
  background-position: center center;
  background-size: cover;
  height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 30vw;
`;
const TextBox = styled.div`
  width: 40vw;
`;

const TextGroup = styled.ul``;

const TextList = styled.li`
  font-size: 20px;
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
        {/* <MainNavigator /> */}
        <MainIntrouduce />
        <MainContainer className="flex">
          <MainContent>
            <ContentCollege>
              <ImgBox data-aos="zoom-in"></ImgBox>
              <TextBox data-aos="fade-up-right">
                <TextGroup>
                  <TextList>
                    I provide information that you are curious about Korean
                    universities.
                  </TextList>
                  <TextList>
                    Find out about education and college life in Korea.
                  </TextList>
                </TextGroup>
              </TextBox>
            </ContentCollege>

            <TripCollege>
              <TextBox data-aos="fade-up-right">
                <TextGroup>
                  <TextList>
                    I provide information that you are curious about Korean
                    universities.
                  </TextList>
                  <TextList>
                    Find out about education and college life in Korea.
                  </TextList>
                </TextGroup>
              </TextBox>
              <TripBox data-aos="zoom-in"></TripBox>
            </TripCollege>

            <ContentCollege>
              <ReviewBox data-aos="zoom-in"></ReviewBox>
              <TextBox data-aos="fade-up-right">
                <TextGroup>
                  <TextList>
                    I provide information that you are curious about Korean
                    universities.
                  </TextList>
                  <TextList>
                    Find out about education and college life in Korea.
                  </TextList>
                </TextGroup>
              </TextBox>
            </ContentCollege>
          </MainContent>
        </MainContainer>
      </Container>
    </MainLayout>
  );
}
