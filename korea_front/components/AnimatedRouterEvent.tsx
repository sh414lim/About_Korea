import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import styled from "styled-components";

export const AnimatedContainer = animated(styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%; */
`);
