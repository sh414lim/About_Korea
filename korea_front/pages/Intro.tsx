import React from "react";
import styled from "styled-components";
import Login from "../layout/Login";

const Container = styled.div`
  /* background-color: red; */
  margin: 100px 0px 0px 0px;
`;
const Title = styled.h1`
  /* @media ${(props) => props.theme.desktop} {
    color: blue;
  } */
  font-size: 130px;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media ${(props) => props.theme.mobile} {
    color: red;
    font-size: 35px;
  }
`;

export default function Intro() {
  return (
    <Container>
      <Title>WELCOME KOREA</Title>
      <Login />
    </Container>
  );
}
