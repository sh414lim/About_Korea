import React from "react";
import styled from "styled-components";
import CategoryHeader from "../../common/CategoryHeader";
import Header from "../../common/Header";
import { ImgObject } from "../../common/img";
import MainBanner from "../../components/main/MainBanner";

type Props = {};

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
const HeaderContainer = styled.div`
  background-image: url(${ImgObject.college});
  background-position: center center;
  background-size: cover;
  filter: blur(1.5px);
  height: 45vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
`;

export default function CategoryLayout({ children }: any) {
  const currrentRoute = "college";
  return (
    <Container>
      <HeaderContainer />
      <CategoryHeader />
      <MainBanner currentRoute={currrentRoute} />
      <main>{children}</main>
    </Container>
  );
}
