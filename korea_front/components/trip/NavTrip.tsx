import React from "react";
import styled from "styled-components";
type Props = {};

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  /* background-color: black; */
  /* background-color: hsl(0, 0%, 94.50980392156862%); */
`;
const Title = styled.h1`
  width: 100%;
  max-width: 40%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  align-content: flex-end;
  height: 30%;
  font-size: 35px;
  font-weight: 700;
`;

export default function NavTrip({}: Props) {
  return (
    <Container>
      <Title>Tourist attractions and attractions</Title>
    </Container>
  );
}
