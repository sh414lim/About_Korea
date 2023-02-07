import React from "react";
import styled from "styled-components";
import MainLayout from "../layout/main/MainLayout";

const Container = styled.div`
  margin: 0 auto;
`;
const BannerList = styled.div`
  width: 100%;
  height: 45vh;
  background: #ddd;
`;
const MainContainer = styled.div`
  max-width: 85%;
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
const DumeContent = styled.div`
  height: 30vh;
  border-radius: 5px;
  box-shadow: 3px 5px 10px #00000026;
  padding: 0.5rem;
`;

export default function MainPage() {
  return (
    <MainLayout>
      <Container>
        <BannerList></BannerList>
        <MainContainer className="flex">
          <MainContent className="half">
            <DumeContent>더미 컨텐츠</DumeContent>
          </MainContent>
          <MainContent className="half">
            <DumeContent>더미 컨텐츠</DumeContent>
          </MainContent>
        </MainContainer>
        <MainContainer>
          <MainContent>
            <DumeContent>더미 컨텐츠</DumeContent>
          </MainContent>
        </MainContainer>
      </Container>
    </MainLayout>
  );
}
