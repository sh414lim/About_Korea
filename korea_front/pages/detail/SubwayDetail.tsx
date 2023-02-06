import React from "react";
import styled from "styled-components";
import { ImgObject } from "../../components/img";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import SubwayMap from "../../layout/subway/SubwayMap";

const AnimatedContainer = animated(styled.div`
  display: grid;
  grid-template-columns: 30vw 70vw;
  /* gap: 0px 0px 2px 1px; */
`);

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url(${ImgObject.subwayDemo});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  z-index: -1;
`;

const HeaderContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: hsla(10, 33%, 25%, 0.3); */
`;
const HeaderBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30vw;
  opacity: 0.5;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  /* filter: blur(3px); */
  z-index: -1;
  background-color: black;
`;

const HeaderGroup = styled.ul``;

const HeaderItem = styled.li`
  font-size: 30px;
  padding: 4rem;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    transition: 0.2s;
  }
`;

const InfoContainer = styled.div`
  color: white;
`;

export default function SubwayDetail() {
  const animationProps = useSpring({
    opacity: 1,
    height: "100vh",
    width: "100vw",
    from: {
      height: "0vh",
      width: "0vw",
      opacity: 1,
      transition: "all 1s",
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <AnimatedContainer style={animationProps}>
      <Backdrop />
      <HeaderContainer>
        <HeaderGroup>
          <HeaderBack />
          <HeaderItem>Subway Map</HeaderItem>
          <HeaderItem>How to board</HeaderItem>
          <HeaderItem>My location</HeaderItem>
          <HeaderItem>precautions</HeaderItem>
          <HeaderItem>What is transfer?</HeaderItem>
        </HeaderGroup>
      </HeaderContainer>
      <InfoContainer>
        <SubwayMap />
      </InfoContainer>
    </AnimatedContainer>
  );
}
