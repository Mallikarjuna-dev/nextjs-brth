//import '@/styles/globals.css'

import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import "styles/layout.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>About page of example</title>
        <meta name="description" content="welcome"></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
