import React, { useState } from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ImgObject } from "../../common/img";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

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

const ListBox = styled.div`
  width: 80vw;
  height: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const ListItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 70%;
  height: 40vh;
  margin: auto;
  background-image: url(${ImgObject.trip});
  background-position: center center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: flex-end;
`;
const ListNav = styled.div``;

const ListTitleBox = styled.div`
  width: 80%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px 2rem 10px;
`;

const ListTitle = styled.span`
  font-size: 30px;
  font-weight: 900;
  align-content: center;
  align-content: center;
  justify-content: center;
`;

const ListSub = styled.div`
  font-size: 17px;
  opacity: 0.5;
  display: flex;
`;

const TitleNavBox = styled.div`
  color: black;
  font-weight: 600;
  position: relative;
  padding: 10px;
  width: 100%;
  height: 25%;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;
const TitleSub = styled.span`
  opacity: 0.7;
`;

type Props = {};

export default function TripList({}: Props) {
  const [demo, setDeom] = useState([
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
  ]);

  return (
    <Container>
      <ListTitleBox>
        <ListTitle>
          Recommended Tours
          <ListSub>Recommended travel destinations for BEACT </ListSub>
        </ListTitle>
        <ListSub>
          See more travel destinations
          <ArrowForwardIcon style={{ marginLeft: "10px" }} />
        </ListSub>
      </ListTitleBox>
      <ListBox>
        {demo.map((props, inmdex) => (
          <>
            <ListItem>
              <TitleNavBox>
                <Title>
                  Gyeongpo Beach
                  {props == true ? (
                    <StarRateIcon style={{ color: "yellow" }} />
                  ) : (
                    <StarOutlineIcon style={{ color: "black" }} />
                  )}
                </Title>
                <TitleSub>Landmarks in Gangneung</TitleSub>
              </TitleNavBox>
            </ListItem>
          </>
        ))}
      </ListBox>
    </Container>
  );
}
