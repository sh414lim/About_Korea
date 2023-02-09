import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { ImgObject } from "../common/img";


const CateImg = styled.img`
  object-fit: cover;
  width: 60vw;
  height: 70vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    z-index: 1;
    transition: 1.3s;
    opacity: 1;
  }
`;

const Container = animated(styled.div`
  height: 70vh;
  width: 100vw;
`);

export default function CommonCarousel() {
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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation={true}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/">
            <CateImg src={ImgObject.card} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg src={ImgObject.subwayInfo} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg src={ImgObject.taxi} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg src={ImgObject.tcard} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg src={ImgObject.trip} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
