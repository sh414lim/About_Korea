import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { ImgObject } from "../common/img";

const CateImg = styled.div`
  object-fit: cover;
  width: 19vw;
  height: 40vh;
  background-image: url(${ImgObject.trip});
  background-position: center center;
  background-size: cover;

  &:hover {
    z-index: 1;
    transition: 1.3s;
    opacity: 1;
  }
`;

const Container = animated(styled.div`
  height: 70vh;
  width: 90%;
  margin: 0px 0px 0px 8rem;
`);
const Title = styled.h1`
  width: 100%;
  max-width: 40%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  align-content: flex-end;
  height: 30%;
  font-size: 35px;
  font-weight: 400;
`;
const TitleSt = styled.span`
  margin: 0px 0px 0px 10px;
  color: rgb(95, 106, 255);
  font-weight: 900;
`;

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
        slidesPerView={4}
        // spaceBetween={30}
        autoplay={true}
        loop={true}
        // centeredSlides={true}
        pagination={
          {
            // clickable: true,
          }
        }
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <CateImg />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
