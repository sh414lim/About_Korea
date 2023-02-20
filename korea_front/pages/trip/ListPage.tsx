import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layout/main/MainLayout";
import styled from "styled-components";
import TripBanner from "../../components/trip/TripBanner";
import { ImgObject, TripData } from "../../common/img";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Link from "next/link";

const Container = styled.div`
  width: 98%;
  height: 100%;
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

const LinstBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CateItem = styled.div`
  width: 15vw;
  height: 30vh;
  padding: 10px;
  background-image: url(${ImgObject.house});
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
`;
const BennerBox = styled.div``;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ImgTitle = styled.span`
  position: absolute;
  z-index: 10;
  color: white;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

const ImgSub = styled.span`
  position: absolute;
  z-index: 10;
  color: white;
  font-size: 15px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7rem 4rem 2rem 3rem;
`;

const TextBox = styled.div;

const ImgBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;
`;

export default function ListPage() {
  const router = useRouter();
  const currrentRoute = "college";
  console.log(router);

  return (
    <>
      <MainLayout>
        <Container data-aos="flip-right" data-aos-duration="1800">
          <CateBox>
            <BennerBox>
              <TripBanner />
            </BennerBox>
            <LinstBox>
              <Box
                sx={{
                  width: "90%",
                  margin: "0px 0px 20px 0px",
                }}
              >
                <ImageList variant="masonry" cols={4} gap={11}>
                  {TripData.map((item) => (
                    <ImageListItem
                      key={item.img}
                      sx={{
                        opacity: 0.7,
                        // boxShadow: "5px 5px 15px 1px rgba(0, 0, 0, .3)",
                        "&:hover": {
                          boxShadow: "10px 10px 20px 3px rgba(0, 0, 0, .9)",
                          transition: "0.5s",
                          opacity: 1,
                        },
                      }}
                    >
                      <Link href="/trip/TripDetail">
                        <ImgBox>
                          <Img
                            data-aos="flip-right"
                            // data-aos-duration="2100"
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            // alt={item.title}
                          />
                          <ImgTitle data-aos="flip-right">
                            {item.title}
                          </ImgTitle>
                          <ImgSub data-aos="flip-right">{item.sub}</ImgSub>
                        </ImgBox>
                      </Link>
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </LinstBox>
          </CateBox>
        </Container>
      </MainLayout>
    </>
  );
}
