// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "@fontsource/inter";
import { theme } from "../utils/theme";
import { useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.localStorage.setItem("chakra-ui-color-mode", "light");
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Katto Studios</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
