import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ImgObject } from "../../components/img";
import Subway from "../../layout/subway/Subway";

const AnimatedContainer = animated(styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  position: relative;
  background-size: contain;
  object-fit: cover;
  /* &:before {
    content: "";
    opacity: 0.1;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  } */
`);

export default function InfoPage() {
  const router = useRouter();
  console.log(router.query.cate);
  const animationProps = useSpring({
    opacity: 0.9,
    width: "100vw",
    height: "100vh",
    from: {
      opacity: 1,
      backgroundSize: "500px",
      width: "10vw",
      height: "10vh",
      transition: "all 0.1s",
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <AnimatedContainer>
      <Subway />
    </AnimatedContainer>
  );
}
