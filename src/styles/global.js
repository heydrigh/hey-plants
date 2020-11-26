import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    background: #EAEFF8;
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
