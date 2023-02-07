import React from "react";
import styled from "styled-components";
import MainLayout from "../../layout/main/MainLayout";
import MainBanner from "./MainBanner";
import MainIntrouduce from "./MainIntrouduce";
import MainNavigator from "./MainNavigator";

const Container = styled.div`
  margin: 0 auto;
`;

export default function MainPage() {
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
