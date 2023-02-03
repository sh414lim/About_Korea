import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ImgObject } from "../../components/img";

const AnimatedContainer = animated(styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  position: relative;
  /* background-repeat: no-repeat; */
  background-size: auto;
  background-image: url(${(props) => ImgObject[props.cate]});
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
const ListContainer = styled.div`
  position: relative;
`;

const CateList = styled.ul``;

const CateItem = styled.li`
  color: white;
  padding: 50px 150px 0px 150px;
  font-size: 40px;
  font-weight: 100;
  margin-right: 80rem;
  height: 25vh;
  width: 25vw;
`;

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
      <ListContainer>
        <CateList>
          <CateItem>123</CateItem>
          <CateItem>123</CateItem>
          <CateItem>123</CateItem>
          <CateItem>123</CateItem>
        </CateList>
      </ListContainer>

      <Title>Welcome to {router.pathname}</Title>
    </AnimatedContainer>
  );
}
