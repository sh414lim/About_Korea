import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import styled from "styled-components";

const AnimatedContainer = animated(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`);

export default function InfoPage() {
  const { pathname } = useRouter();
  const animationProps = useSpring({
    opacity: 1,
    transform: "translate3d(0,0,0)",
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <AnimatedContainer style={animationProps}>
      <h1>Welcome to {pathname}</h1>
    </AnimatedContainer>
  );
}
