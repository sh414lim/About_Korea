import React from "react";
import styled from "styled-components";
import { ImgObject } from "../../common/img";
import { AnimatedContainer } from "../../common/AnimatedRouterEvent";
import { useSpring } from "@react-spring/core";
import { fontSize } from "@mui/system";

interface Iroute {
  currentRoute: string;
}

export default function DetailBanner() {
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      from: {
        factor: 10,
        opacity: 0,
        scale: 0.9,
        freq: "0.0175, 0.0",
      },
      to: {
        factor: 150,
        opacity: 1,
        scale: 1,
        freq: "0.0, 0.0",
      },
      config: { duration: 500 },
    }),
    []
  );
  return <AnimatedContainer style={{ scale, opacity }}></AnimatedContainer>;
}
