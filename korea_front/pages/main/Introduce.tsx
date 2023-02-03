import React from "react";
import styled from "styled-components";
import Category from "../../layout/main/Category";

const Container = styled.div`
  height: 100vh;
  /* background-color: black; */
`;

const CategoryBox = styled.div`
  height: 80vh;
  /* background-color: black; */
  display: flex;
  justify-content: center;
`;

const TitleContainer = styled.div`
  height: 13vh;
  /* background-color: grey; */
`;

export default function Introduce() {
  return (
    <Container>
      <TitleContainer>123</TitleContainer>
      <CategoryBox>
        <Category />
      </CategoryBox>
    </Container>
  );
}
