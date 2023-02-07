import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

const TitleContainer = styled.div`
  padding: 40px 0px 20px 0px;
  top: 0;
`;

const InputContainer = animated(styled.div`
  background-color: white;
  border-radius: 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  height: 70vh;
`);

export default function LoginLayout({ children }: any) {
  const animationProps = useSpring({
    width: "40vw",
    height: "70vh",

    from: {
      //   backgroundSize: "500px",

      width: "0vw",
      height: "70vh",
      transition: "all 0.1s",
    },
    // config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <AllContainer>
      <InputContainer style={animationProps}>
        <main>{children}</main>
      </InputContainer>
    </AllContainer>
  );
}
