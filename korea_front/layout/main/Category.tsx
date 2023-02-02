import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
`;
const CateBox = styled.div`
  background-color: grey;
  border: 1px solid black;
`;
const CateGroup = styled.div`
  display: flex;
  flex-direction: ;
`;

export default function Category() {
  return (
    <Container>
      <CateGroup>
        <CateBox>123</CateBox>
        <CateBox>123</CateBox>
        <CateBox>123</CateBox>
      </CateGroup>
    </Container>
  );
}
