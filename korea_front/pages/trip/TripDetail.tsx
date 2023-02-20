import Link from "next/link";
import React from "react";
import styled from "styled-components";
import MainLayout from "../../layout/main/MainLayout";

const Container = styled.div`
  width: 98%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 1rem auto;
`;

const CateBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 20px;
`;

type Props = {};

export default function TripDetail({}: Props) {
  return (
    <MainLayout>
      <Container>
        <CateBox
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1800"
        >
          <Link href="/trip/ListPage">123</Link>
        </CateBox>
      </Container>
    </MainLayout>
  );
}
