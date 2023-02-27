import React from "react";
import styled from "styled-components";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {};

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 5rem auto;
`;

const ListTitleBox = styled.div`
  width: 80%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px 2rem 10px;
`;

const ListSub = styled.div`
  font-size: 17px;
  opacity: 0.5;
  display: flex;
`;

const ListTitle = styled.span`
  font-size: 30px;
  font-weight: 900;
  align-content: center;
  align-content: center;
  justify-content: center;
`;

export default function TripView({}: Props) {
  return (
    <Container>
      <ListTitleBox>
        <ListTitle>
          Recommended View
          <ListSub>Recommended travel destinations for BEACT </ListSub>
        </ListTitle>
        <ListSub>
          See more travel destinations
          <ArrowForwardIcon style={{ marginLeft: "10px" }} />
        </ListSub>
      </ListTitleBox>
    </Container>
  );
}
