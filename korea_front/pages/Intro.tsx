import React from "react";
import styled from "styled-components";
import Login from "../layout/Login";

const Container = styled.div`
  /* background-color: red; */
  margin: 100px 0px 0px 0px;
`;
const Title = styled.h1`
  font-size: 100px;
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media ${(props) => props.theme.laptop} {
    font-size: 80px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 50px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 35px;
  }
`;

const SubTitle = styled.span`
  font-size: 40px;
  display: flex;
  color: black;
  top: 0;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  @media ${(props) => props.theme.laptop} {
    font-size: 30px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
  }

  @media ${(props) => props.theme.mobile} {
    color: black;
    font-size: 20px;
  }
`;

const Back = styled.button``;

export default function Intro() {
  return (
    <Container>
      <Title>About KOREA</Title>
      <SubTitle>Korean daily life tutorial.</SubTitle>
      <Login />
    </Container>
  );
}
