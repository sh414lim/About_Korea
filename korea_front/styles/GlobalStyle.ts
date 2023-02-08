import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// import url('https://webfontworld.github.io/pretendard/Pretendard.css');
// import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

// * {font-family: 'Pretendard', 'Roboto', sans-serif ; }

const GlobalStyle = createGlobalStyle`
    ${reset}
  *, *::before, *::after {
    box-sizing: border-box;

  }
  input {
    outline:"none";
  }

  body {
    line-height: 2;
  }
  *{
    
  }
`;

export default GlobalStyle;
