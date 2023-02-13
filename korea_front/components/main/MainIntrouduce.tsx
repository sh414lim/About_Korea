import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  max-width: 85%;
  width: 100%;
  margin: 2rem auto;
  &.flex {
    display: flex;
    gap: 2%;
  }
`;

const MainContent = styled.div`
  width: 100%;
  &.half {
    width: 49%;
  }
`;

const ContentItem = styled.div`
`;
export default function MainIntrouduce() {
  return (
    <MainContainer className="flex">
      <MainContent>
        <ContentItem>

        </ContentItem>
      </MainContent>
    </MainContainer>
  );
}
