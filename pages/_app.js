import GlobalStyle from "/components/GlobalStyle";
import Div100vh from "react-div-100vh";

function MyApp({ Component, pageProps }) {
  return (
    <Div100vh>
      <GlobalStyle />
      <Component {...pageProps} />
    </Div100vh>
  );
}

export default MyApp;
