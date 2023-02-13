import React from "react";
import styled from "styled-components";
import { ImgObject } from "../../components/img";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import SubwayMap from "../../layout/subway/SubwayMap";
import CommonCarousel from "../../components/CommonCarousel";

const AnimatedContainer = animated(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  /* display: grid; */
  /* grid-template-columns: 30vw 70vw; */
  /* gap: 0px 0px 2px 1px; */
`);

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  mage: url(${ImgObject.subwayDemo});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  z-index: -1;
`;

export default function SubwayDetail() {
  const animationProps = useSpring({
    opacity: 1,
    height: "100vh",
    width: "100vw",
    from: {
      height: "100vh",
      width: "100vw",
      opacity: 1,
      transition: "all 1s",
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <AnimatedContainer style={animationProps}>
      {/* <Backdrop /> */}
      <CommonCarousel />
    </AnimatedContainer>
  );
}
