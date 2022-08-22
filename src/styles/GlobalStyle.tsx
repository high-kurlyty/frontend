import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  }

  body {
    font-family: "Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif;
    line-height: 1.5;
  }

  .Header {
    display: flex;
  }
`;

export default GlobalStyle;
