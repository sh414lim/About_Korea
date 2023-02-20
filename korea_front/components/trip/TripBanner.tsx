import React from "react";
import styled from "styled-components";
import { ImgObject } from "../../common/img";

interface Iroute {
  currentRoute: string;
}

const BannerList = styled.div`
  max-width: 90%;
  width: 100%;
  height: 15vh;
  margin: 0rem 4rem 4rem 4rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BannerText = styled.div`
  position: absolute;
  width: 70%;
  height: 10vh;
  z-index: 10;
`;

const BannerMainTitle = styled.h2`
  font-size: 3vw;
  color: #151516;
  font-weight: 00;
  display: flex;
  font-weight: 900;
  color: ${(props) => props.theme.globalColors.main};
  justify-content: center;
`;
const BannerSubTitle = styled.p`
  font-size: 1vw;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin: 5px 0px 0px 0px;
`;

export default function TripBanner() {
  return (
    <>
      <BannerList>
        <BannerText>
          <BannerMainTitle>About Trip</BannerMainTitle>
          <BannerSubTitle data-aos="zoom-in">
            About Korea presents you with memories.
          </BannerSubTitle>
        </BannerText>
      </BannerList>
    </>
  );
}
