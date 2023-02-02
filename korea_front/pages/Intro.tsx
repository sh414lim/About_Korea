import React from "react";
import styled from "styled-components";
import Login from "../layout/Login";

const Container = styled.div`
  top: 0;
  /* background-color: red; */
  /* margin: 50px 0px 0px 0px; */

  @media ${(props) => props.theme.mobile} {
    background-image: url("https://images.unsplash.com/photo-1599033769063-fcd3ef816810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    height: 800px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }
`;
const ImgCotanier = styled.div``;

const Title = styled.h1`
  top: 0;
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

const VideoContainer = styled.div``;

export default function Intro() {
  return (
    <Container>
      <Title>About KOREA</Title>
      <SubTitle>Korean daily life tutorial.</SubTitle>
      <Login />
    </Container>
  );
}
