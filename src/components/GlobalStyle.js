import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: "Outfit", "Segoe UI", sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
