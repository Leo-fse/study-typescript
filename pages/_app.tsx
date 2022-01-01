import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default MyApp;
