import React from "react";
import styled from "styled-components";
import Subway from "../../layout/subway/Subway";
import CommonCarousel from "../CommonCarousel";
import NavInfo from "./NavInfo";
import TripList from "./TripList";
import TripView from "./TripView";
type Props = {};

const Container = styled.div`
  margin: 7rem auto;
`;

const ImgContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;

  /* background-color: black; */
  /* background-color: hsl(0, 0%, 94.50980392156862%); */
`;

const TitmeBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  width: 100%;
  max-width: 20%;
  display: flex;
  height: 30%;
  font-size: 35px;
  font-weight: 600;
`;
const TitleSt = styled.span`
  margin: 0px 0px 0px 10px;
  color: rgb(95, 106, 255);
  font-weight: 900;
`;

export default function NavTrip({}: Props) {
  return (
    <Container>
      <ImgContainer>
        <NavInfo />
      </ImgContainer>
      <TripList />
      {/* <TripView /> */}
      <CommonCarousel />
    </Container>
  );
}
