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
    "lSYafr8mWAHjJY9zI+icXapVH6wmF8GdoaLFug2WmrNT52RZzF3Ls7gfWjKK+GssWRGtowqtiZ+mTgWrS2/low==";
  useEffect(() => {
    axios
      .get(
        `http://openapi.seoul.go.kr:8088/${process.env}/xml/SebcCollegeInfoKor/1/5/`
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
