import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImgObject } from "../../components/img";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { AnimatedContainer } from "../../components/AnimatedRouterEvent";

const Container = styled.div`
  color: white;
  margin: 0;
`;
const CateBox = styled.div`
  /* background-color: grey; */
  /* border: 1px solid black; */
  display: flex;
  flex-direction: "column";
  width: 20.5vw;
  height: 39.3vw;
  /* padding: 1rem; */
  transition: 0.5s;

  box-sizing: "border-box";
  &:hover {
    max-width: 80vw;
    transition: 0.5s;
    /* background-color: red; */
    width: 40vw;
    /* padding: 0px 0px 0px 10px; */
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    /* display: block;
        width: 100vw;
        height: 100%;
        transition: width 0.4s, height 0.8s; */
  }
`;
const CateGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 80%;
  width: 100%;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 10px;
`;
const BackImg = styled.img`
  width: 100%;
  opacity: 0.8;
  object-fit: cover;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`;

export default function Category() {
  const animationProps = useSpring({
    opacity: 1,
    // transform: "translate3d(0,0,0)",
    from: {
      opacity: 0,
      transition: "all 1.9s",
      // transform: "translate3d(100%,0,0)",
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <AnimatedContainer style={animationProps}>
      <Container>
        <CateGroup>
          <Link href="/detail/InfoPage">
            <CateBox>
              <BackImg src={ImgObject.subway} />
            </CateBox>
          </Link>

          <CateBox>
            <BackImg src={ImgObject.trip} />
          </CateBox>
          <CateBox>
            <BackImg src={ImgObject.card} />
          </CateBox>
          <CateBox>
            <BackImg src={ImgObject.phone} />
          </CateBox>
          <CateBox>
            <BackImg src={ImgObject.house} />
          </CateBox>
        </CateGroup>
      </Container>
    </AnimatedContainer>
  );
}
