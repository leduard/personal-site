import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    color: black;
    background-color: #0f0f0f;
  }

  button, svg:hover {
    cursor: pointer;
  }
`;
