import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { TripData, TripDetailImg } from "../../common/img";
import DetailBanner from "../../components/trip/DetailBanner";
import NavTrip from "../../components/trip/NavTrip";
import MainLayout from "../../layout/main/MainLayout";

const Container = styled.div``;
const BenerContainer = styled.div`
  width: 100vw;
  height: 40vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const NavContainer = styled.div`
  height: 16vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const InfoContainer = styled.div`
  height: 39vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlidContainer = styled.div`
  width: 85vw;
  height: 40vh;
  margin: 4rem auto;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
`;
const IntroduceBox = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const TitleBox = styled.div`
  width: 40%;
`;

const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  display: flex;
  margin: 1rem auto;
`;
const InfroSub = styled.span`
  color: grey;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
`;

const ImgBox = styled.div`
  width: 13vw;
  height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  margin: 0rem 0rem 0rem 3rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

type Props = {};

export default function TripDetail({}: Props) {
  return (
    <MainLayout>
      <Container>
        <DetailBanner />
        <InfoContainer>
          <SlidContainer>
            <IntroduceBox>
              <TitleBox>
                <IntroTitle>Trip Planner</IntroTitle>
                <InfroSub>
                  A city located in the eastern part of Gangwon-do. It is one of
                  the three major cities in Gangwon-do along with Wonju-si and
                  Chuncheon-si, and is the largest hub city in Yeongdong,
                  Gangwon-do, bordering the east coast. Therefore, Gangwon-do
                  Hwanhae Headquarters, a branch office of Gangwon-do Office, is
                  the name was Myeongju. From 1955 to 1995 (before urban and
                  rural integration), it was divided into Gangneung-si and
                  Myeongju-gun. It borders the East Sea to the east, Donghae-si
                  and Jeongseon-gun in the name was Myeongju. From 1955 to 1995
                  (before urban and rural integration), it was divided into
                  Gangneung-si and Myeongju-gun. It borders the East Sea to the
                  east, Donghae-si and Jeongseon-gun in
                </InfroSub>
              </TitleBox>

              <ImgContainer>
                {TripDetailImg.map((item) => (
                  <ImgBox>
                    <Img
                      data-aos="flip-right"
                      // data-aos-duration="2100"
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      // alt={item.title}
                    />
                  </ImgBox>
                ))}
              </ImgContainer>
            </IntroduceBox>
          </SlidContainer>
        </InfoContainer>
        {/* 여행지 추천 */}
        <NavTrip />
      </Container>
    </MainLayout>
  );
}
