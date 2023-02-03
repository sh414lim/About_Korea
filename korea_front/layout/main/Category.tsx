import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  margin: 0;
`;
const CateBox = styled.div`
  /* background-color: grey; */
  /* border: 1px solid black; */
  display: flex;
  flex-direction: "column";
  width: 20vw;
  height: 35vw;
  /* padding: 1rem; */
  transition: 0.5s;
  box-sizing: "border-box";
  &:hover {
    max-width: 80vw;
    transition: 0.5s;
    /* background-color: red; */
    width: 40vw;
    /* padding: 0px 0px 0px 10px; */
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
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
const BackImg = styled.img`
  width: 100%;
`;

export default function Category() {
  return (
    <Container>
      <CateGroup>
        <CateBox>
          <BackImg src="https://images.unsplash.com/photo-1529179307417-ca83d48bd790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </CateBox>
        <CateBox>
          <BackImg src="https://plus.unsplash.com/premium_photo-1661962699053-3f216d2f4c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </CateBox>
        <CateBox>
          <BackImg src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fCVFQyU4QiVBMCVFQyU5QSVBOSUyMCVFQyVCOSVCNCVFQiU5MyU5Q3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </CateBox>
        <CateBox>
          <BackImg src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTk1JUI4JUVCJTkzJTlDJUVEJThGJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </CateBox>
        <CateBox>
          <BackImg src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTk1JTg0JUVEJThDJThDJUVEJThBJUI4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </CateBox>
      </CateGroup>
    </Container>
  );
}
