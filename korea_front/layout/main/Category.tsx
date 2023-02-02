import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  margin: 0;
`;
const CateBox = styled.div`
  background-color: grey;
  border: 1px solid black;
  display: flex;
  flex-direction: "column";
  width: 20vw;
  height: 35vw;
  padding: 1rem;
  transition: 0.5s;
  box-sizing: "border-box";
  &:hover {
    max-width: 80vw;
    transition: 0.5s;
    background-color: red;
    width: 40vw;
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
`;

export default function Category() {
  return (
    <Container>
      <CateGroup>
        <CateBox>123</CateBox>
        <CateBox>123</CateBox>
        <CateBox>123</CateBox>
        <CateBox>123</CateBox>
        <CateBox>123</CateBox>
      </CateGroup>
    </Container>
  );
}
