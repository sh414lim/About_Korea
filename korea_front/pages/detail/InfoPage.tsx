import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ImgObject } from "../../components/img";

const AnimatedContainer = animated(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url(${(props) => ImgObject[props.cate]});
  background-size: cover;
  object-fit: cover;
  &:before {
    content: "";
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  }
`);
const Title = styled.h1`
  color: #fff;
  text-align: center;
  line-height: 300px;
  position: relative;
`;

export default function InfoPage() {
  const router = useRouter();
  console.log(router.query.cate);
  const animationProps = useSpring({
    opacity: 0.9,
    width: "100vw",
    // height: "100vh",
    from: {
      opacity: 1,
      backgroundSize: "500px",
      width: "10vw",
      //   height: "10vh",
      transition: "all 0.26s",
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <AnimatedContainer cate={router.query.cate} style={animationProps}>
      <Title>Welcome to {router.pathname}</Title>
    </AnimatedContainer>
  );
}
