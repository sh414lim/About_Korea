import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import { ImgObject } from "../../common/img";
// import s from "../../public/videos"
const Container = styled.div`
  display: flex;
  justify-content: center;

  /* background-color: #181e2d; */
  background-color: black;
  width: 100vw;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const AnimatedContainer = animated(styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 10px;
  width: 70vw;
  height: 90vh;
  /* gap: 0px 0px 2px 1px; */
`);

const SubwayBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: end;
  box-sizing: "border-box";
`;

const CateImg = styled.img`
  object-fit: cover;
  width: 40vw;
  height: 30.3vh;
  opacity: 0.8;
  position: relative;
  margin: 20px 0px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:hover {
    z-index: 1;
    transition: 1.3s;
    opacity: 1;
  }
`;

const CateTitleBox = styled.div`
  z-index: 0;
  color: white;
  position: absolute;
  background-color: #ddb29c;
  width: 40vw;
  height: 10vh;
  /* margin: 0px 0px 0px 5px; */
  opacity: 0.7;
`;

const CateTite = styled.span`
  font-size: 25px;
  color: #181f2a;
  margin: 0px 0px 0px 20px;
`;
const CateDec = styled.span`
  font: 15px;
  color: #181f2a;
  margin: 0px 0px 0px 20px;
`;

export default function Subway() {
  const [isPlaying, setIsPlay] = useState(false);

  const animationProps = useSpring({
    width: "80vw",

    from: {
      //   backgroundSize: "500px",

      width: "0vw",
      height: "70vh",
      transition: "all 0.1s",
    },
    // config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <Container>
      <AnimatedContainer style={animationProps}>
        <Link href="/detail/SubwayDetail">
          <SubwayBox>
            <CateImg src={ImgObject.subwayDemo} />
            <CateTitleBox>
              <CateTite>SUBWAY</CateTite>
              <br />
              <CateDec>
                Information on Seoul Subway Utilization and Route Map in Seoul
              </CateDec>
            </CateTitleBox>
          </SubwayBox>
        </Link>

        <SubwayBox>
          <CateImg src={ImgObject.taxi} />
          <CateTitleBox>
            <CateTite>TAXI</CateTite>
            <br />
            <CateDec>
              Information on Seoul Subway Utilization and Route Map in Seoul
            </CateDec>
          </CateTitleBox>
        </SubwayBox>
        <SubwayBox>
          <CateImg src={ImgObject.bus} />
          <CateTitleBox>
            <CateTite>BUS</CateTite>
            <br />
            <CateDec>
              Information on Seoul Subway Utilization and Route Map in Seoul
            </CateDec>
          </CateTitleBox>
        </SubwayBox>
        <SubwayBox>
          <CateImg src={ImgObject.airport} />
          <CateTitleBox>
            <CateTite>AIR</CateTite>
            <br />
            <CateDec>
              Information on Seoul Subway Utilization and Route Map in Seoul
            </CateDec>
          </CateTitleBox>
        </SubwayBox>
        <SubwayBox>
          <CateImg src={ImgObject.tcard} />
          <CateTitleBox>
            <CateTite>CARD</CateTite>
            <br />
            <CateDec>
              Information on Seoul Subway Utilization and Route Map in Seoul
            </CateDec>
          </CateTitleBox>
        </SubwayBox>
        <SubwayBox>
          <CateImg src={ImgObject.card} />
          <CateTitleBox>
            <CateTite>REVIEW</CateTite>
            <br />
            <CateDec>
              Information on Seoul Subway Utilization and Route Map in Seoul
            </CateDec>
          </CateTitleBox>
        </SubwayBox>
      </AnimatedContainer>
    </Container>
  );
}
