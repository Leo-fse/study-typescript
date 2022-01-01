import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { AppLayout } from "../layouts/Applayout";
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
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
}

export default MyApp;
