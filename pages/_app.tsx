import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Katto Studios" key="title" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
