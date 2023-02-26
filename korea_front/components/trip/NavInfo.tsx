import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { ImgObject } from "../../common/img";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const CateImg = styled.div`
  object-fit: cover;
  position: relative;
  width: 15vw;
  max-width: 90%;
  height: 40vh;
  background-image: url(${ImgObject.trip});
  background-position: center center;
  background-size: cover;
  margin: 3rem 1rem 1rem 1rem;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  ::before {
    width: 19vw;
    height: 40vh;
    content: "";
    opacity: 0.1;
    top: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
    bottom: 0px;
    /* background-color: #000; */
    background-color: rgba(255, 255, 255, 0.5);
  }
  &:hover {
    z-index: 1;
    opacity: 1;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Container = animated(styled.div`
  height: 70vh;
  width: 90vw;
  display: flex;
  justify-content: center;
`);

const Title = styled.h1`
  color: white;
  display: flex;
  position: relative;
  font-weight: 400;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

const CateNav = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  width: 22vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecTitle = styled.h1`
  font-size: 40px;
  font-weight: 900;
`;
const DecSub = styled.span`
  opacity: 0.5;
  font-weight: 600;
  width: 80%;
`;

const ImgBox = styled.div`
  display: flex;
  width: 60vw;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
`;
const InfoButton = styled.button`
  border: none;
  width: 30%;
  padding: 10px;
  background-color: black;
  color: White;
  margin: 10px 0px 0px 0px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    background-color: #5f6aff;
    transition: 0.3s;
  }
`;

export default function NavInfo() {
  const animationProps = useSpring({
    opacity: 1,
    // transform: "translate3d(0,0,0)",
    from: {
      opacity: 0,
      transition: "all 1.9s",
      // transform: "translate3d(100%,0₩,0)",
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <Container style={animationProps}>
      <CateNav>
        <TitleBox>
          <DecTitle>Destinations</DecTitle>
          <DecSub>
            I will be your guide on your trip rban a-gun. It borders the East
          </DecSub>
          <InfoButton>Start Menu</InfoButton>
        </TitleBox>
      </CateNav>
      <ImgBox>
        <CateImg>
          <Title>
            <AddLocationIcon style={{ color: "yellow" }} />
            BEACH
          </Title>
        </CateImg>
        <CateImg>
          <Title>
            <AddLocationIcon style={{ color: "yellow" }} />
            Restaurant
          </Title>
        </CateImg>
        <CateImg>
          <Title>
            <AddLocationIcon style={{ color: "yellow" }} />
            tourist
          </Title>
        </CateImg>
        <CateImg>
          <Title>
            <AddLocationIcon style={{ color: "yellow" }} />
            Best
          </Title>
        </CateImg>
      </ImgBox>
    </Container>
  );
}
