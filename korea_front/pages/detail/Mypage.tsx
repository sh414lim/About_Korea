import React from "react";
import styled from "styled-components";
import MypageSideMenu from "../../common/MypageSideMenu";
import MainLayout from "../../layout/main/MainLayout";

type Props = {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const InfoBox = styled.div`
  background-color: white;
  width: 83vw;
  height: 86vh;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 20px;
  /* padding: 0px 0px 0px 20px; */
`;

const Box = styled.div`
  height: 88vh;
  width: 90vw;
  /* margin: 30px 0px 0px 0px; */
  border-radius: 20px;
  display: flex;
  /* align-items: center; */
`;
const SideBox = styled.div``;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 39vw;
  height: 86vh;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;
  height: 80vh;
`;

const EventBox = styled.div`
  height: 29.9vh;
  width: 15vw;
  margin: 15px 0px 0px 0px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const InfoContainer = styled.div`
  height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const FavoriteContainer = styled.div`
  height: 45vh;
  margin: 20px 0px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const UserContainer = styled.div`
  height: 77.5vh;
  width: 33vw;
  margin: 12px 50px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default function Mypage({}: Props) {
  return (
    <>
      <MainLayout></MainLayout>
      <Container>
        <Box>
          <SideBox>
            <MypageSideMenu />
            <EventBox>123</EventBox>
          </SideBox>

          <InfoBox>
            <LeftBox>
              <InfoContainer>123</InfoContainer>
              <FavoriteContainer>456</FavoriteContainer>
            </LeftBox>
            <RightBox>
              <UserContainer>789</UserContainer>
            </RightBox>
          </InfoBox>
        </Box>
      </Container>
    </>
  );
}
