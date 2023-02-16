import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Header from "../../common/Header";

const AllContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  padding: 40px 0px 20px 0px;
  top: 0;
`;

const InputContainer = animated(styled.div`
  background-color: white;
  border-radius: 90px;
  justify-content: center;
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
    <>
      <Header />
      <AllContainer>
        {/* <InputContainer style={animationProps}> */}
        <main>{children}</main>
        {/* </InputContainer> */}
      </AllContainer>
    </>
  );
}
