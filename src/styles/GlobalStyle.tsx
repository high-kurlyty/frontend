import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  }

  :root {
    --primary-color: #5f0080;
    --secondary-color: #875eb3;
    --third-color: #d2beff;
    --light-background: #f7f7f7;
    --red-color: #e95958;
    --light-gray-color: #ddd;

    --description-text: #999;
    --text-second: #666;
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
