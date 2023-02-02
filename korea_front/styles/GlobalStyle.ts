import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset}
  *, *::before, *::after {
    box-sizing: border-box;

  }
  input {
    outline:"none";
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 2;

  }
  *{
    
  }
`;

export default GlobalStyle;
