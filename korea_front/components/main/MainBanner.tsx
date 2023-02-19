import React from "react";
import styled from "styled-components";
import { ImgObject } from "../../common/img";

interface Iroute {
  currentRoute: string;
}

const BannerList = styled.div`
  max-width: 90%;
  width: 100%;
  height: 70vh;
  margin: 4rem auto;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-image: url(${ImgObject.guide}); */
  background-position: center center;
  background-size: cover;
  filter: blur(0.5px);
`;

const BannerText = styled.div`
  width: 70%;
`;

const BannerMainTitle = styled.h2`
  font-size: 4.5vw;
  color: #151516;
  font-weight: 900;
  display: flex;
  color: ${(props) => props.theme.globalColors.main};
  justify-content: center;
`;
const BannerSubTitle = styled.p`
  font-size: 2.5vw;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #151516;
  margin: 30px 0px 0px 0px;
`;

const BannerListImg = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
`;
const BannerTitle = styled.h2`
  font-size: 4.5vw;
  color: #151516;
  font-weight: 900;
`;

export default function MainBanner() {
  return (
    <>
      <BannerList>
        <BannerText>
          <BannerMainTitle>About KOREA</BannerMainTitle>
          <BannerSubTitle data-aos="zoom-in">
            'About KOREA' will be your guide for your life in Korea.
          </BannerSubTitle>
        </BannerText>
      </BannerList>
    </>
  );
}
