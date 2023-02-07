import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "../components/main/Category";

const Container = styled.div`
  height: 100vh;
  background-color: black;
  /* background-color: #181e2d; */
`;

const CategoryBox = styled.div`
  height: 76vh;
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  height: 13vh;
  /* background-color: grey; */
`;

export default function Introduce() {
  const [layoutOn, setLayoutOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // if (loading) {
  //   return <h1>hello</h1>;
  // }

  return (
    <Container>
      <TitleContainer>thro소개</TitleContainer>
      <CategoryBox>
        <Category />
      </CategoryBox>
    </Container>
  );
}
