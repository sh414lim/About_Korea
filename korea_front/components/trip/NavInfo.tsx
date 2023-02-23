import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { ImgObject } from "../../common/img";

const CateImg = styled.div`
  object-fit: cover;
  position: relative;
  width: 19vw;
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
  display: flex;
`);

const Title = styled.h1`
  color: black;
  display: flex;
  position: relative;
  font-weight: 600;
  font-size: 30px;
  padding: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;
const DecTitle = styled.span``;

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
      <CateImg>
        <Title>BEACH</Title>
      </CateImg>
      <CateImg>
        <Title>Restaurant</Title>
      </CateImg>
      <CateImg>
        <Title>tourist</Title>
      </CateImg>
      <CateImg>
        <Title>Best</Title>
      </CateImg>
    </Container>
  );
}
