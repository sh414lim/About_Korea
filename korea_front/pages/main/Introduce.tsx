import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "../../layout/main/Category";

const Container = styled.div`
  height: 100vh;
  background-color: #dfc19f;
`;

const CategoryBox = styled.div`
  height: 80vh;
  /* background-color: black; */
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  height: 13vh;
  /* background-color: grey; */
`;

export default function Introduce() {
  const [layoutOn, setLayoutOn] = useState(false);

  useEffect(() => {}, []);

  return (
    <Container>
      {layoutOn ? <TitleContainer>123</TitleContainer> : ""}
      <CategoryBox>
        <Category />
      </CategoryBox>
      <button
        onClick={() => {
          if (layoutOn) {
            setLayoutOn(false);
          } else {
            setLayoutOn(true);
          }
        }}
      >
        test
      </button>
    </Container>
  );
}
