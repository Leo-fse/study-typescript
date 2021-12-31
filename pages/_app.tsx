import type { AppProps } from "next/app";
import { Header } from "../components/Layout/Header";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <hr />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
