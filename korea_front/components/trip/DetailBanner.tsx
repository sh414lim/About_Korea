import React from "react";
import styled from "styled-components";
import { ImgObject } from "../../common/img";
import { AnimatedContainer } from "../../common/AnimatedRouterEvent";
import { useSpring } from "@react-spring/core";
import { fontSize } from "@mui/system";

interface Iroute {
  currentRoute: string;
}

const BannerList = styled.div`
  max-width: 95%;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
`;

const BannerText = styled.div`
  width: 70%;
`;

const BannerMainTitle = styled.h2`
  font-size: 2vw;
  width: 60%;
  height: 10%;
  color: #151516;
  font-weight: 900;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.globalColors.main};
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SideNav = styled.div`
  width: 5vw;
  height: 83vh;
  margin: 0px 0px 0px 4.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TripListBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TripList = styled.div`
  width: 100%;
  height: 20vh;
  max-width: 100%;
  margin: 0.5rem 0px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TripItem = styled.div`
  width: 50vw;
  height: 90%;
  margin: 1rem 0px 0px 0px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default function DetailBanner() {
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      from: {
        factor: 10,
        opacity: 0,
        scale: 0.9,
        freq: "0.0175, 0.0",
      },
      to: {
        factor: 150,
        opacity: 1,
        scale: 1,
        freq: "0.0, 0.0",
      },
      config: { duration: 500 },
    }),
    []
  );
  return (
    <AnimatedContainer style={{ scale, opacity }}>
      <BannerList>
        <BannerText>
          <BannerMainTitle>Welcome to Gangneung.</BannerMainTitle>

          <LeftBox>
            <SideNav>123</SideNav>
            <TripListBox>
              <TripList>213</TripList>
              <TripList>213</TripList>
              <TripList>213</TripList>
              <TripList>213</TripList>
            </TripListBox>
          </LeftBox>
        </BannerText>
        <TripItem>123</TripItem>
      </BannerList>
    </AnimatedContainer>
  );
}
