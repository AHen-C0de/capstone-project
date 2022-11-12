import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background-primary: #FFFFFF;
    --background-secondary: #0B7D54;
    --background-secondary__gradient:
    radial-gradient(
    circle,
    rgba(28, 133, 95, 1) 0%,
    rgba(20, 83, 61, 1) 73%
  );
    --background-secondary__dark: #095A3D;
    --background-secondary__hover: #06402B;
    --list-primary: #FAD861;
    --list-secondary: #FFF1C1;
    --button-shaddow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  /* inter-regular - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/assets/fonts/inter-v12-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/inter-v12-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* inter-500 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('/assets/fonts/inter-v12-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/inter-v12-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

    /* inter-600 - latin */
    @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('/assets/fonts/inter-v12-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/inter-v12-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* inter-700 - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/assets/fonts/inter-v12-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/inter-v12-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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
        url('/assets/fonts/handlee-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/handlee-v14-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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
    font-family: 'Inter';
    background-color: var(--background-primary);
  }

  #__next {
    display: grid;
    // header main footer
    grid-template-rows: 4rem 1fr 4rem;
  }

  main {
    overflow-y: hidden;
  }
`;

export default GlobalStyle;
