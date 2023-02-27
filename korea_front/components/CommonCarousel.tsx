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
const ListTitleBox = styled.div`
  width: 80%;
  height: 5vh;
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
      <ListTitleBox>
        <ListTitle>
          Recommended View
          <ListSub>Recommended travel destinations for BEACT </ListSub>
        </ListTitle>
      </ListTitleBox>
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
