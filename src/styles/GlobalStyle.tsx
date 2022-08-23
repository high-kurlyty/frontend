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
    --text-first: #333;
    --text-second: #666;
  }

  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  body {
    font-family: "Noto Sans";
    line-height: 1.5;
    color: var(—-text-first);
    margin: 0;
  }

  .Header {
    display: flex;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
