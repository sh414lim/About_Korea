import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";



// * {font-family: 'Pretendard', 'Roboto', sans-serif ; }

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://webfontworld.github.io/pretendard/Pretendard.css');  
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    :root {
      font-family: 'Pretendard', 'Roboto', sans-serif;

    }
  * {
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  input {
    outline:"none";
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
    line-height: 1.6;
  }

  html {font-size: 15px; line-height: 1.6;}

  /* * {font-family: 'Pretendard', 'Roboto', sans-serif;} */

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
