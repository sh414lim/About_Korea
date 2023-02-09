import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import styled from "styled-components";
import MainLayout from "../../layout/main/MainLayout";
import MainBanner from "./MainBanner";
import MainIntrouduce from "./MainIntrouduce";
import MainNavigator from "./MainNavigator";

const Container = styled.div`
  margin: 0 auto;
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
        <MainNavigator />
        <MainIntrouduce />
      </Container>
    </MainLayout>
  );
}
