import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background-primary: #FFFFFF;
    --background-secondary: #0B7D54;
    --background-secondary__dark: #085c3e;
    --background-secondary__hover: #06402B;
    --list-primary: #FAD861;
    --list-secondary: #FFF1C1;
  }

  /* noto-sans-regular - latin */
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/assets/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* lily-script-one-regular - latin */
  @font-face {
    font-family: 'Lily Script One';
    font-style: normal;
    font-weight: 400;
    src: local(''),
      url('/assets/fonts/lily-script-one-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('/assets/fonts/lily-script-one-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* handlee-regular - latin */
  @font-face {
    font-family: 'Handlee';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('assets/fonts/handlee-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('assets/fonts/handlee-v14-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #__next {
    height: 100vh;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: var(--background-primary);
  }

  #__next {
    display: grid;
    // header main footer
    grid-template-rows: 4rem 1fr 4rem;
  }

  main {
    overflow-y: auto;
  }
`;

export default GlobalStyle;
