import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import usePagePoints from "../hooks/usePagePoints";

function MyApp({ Component, pageProps }) {
  const points = usePagePoints();
  return (
    <>
      <Head>
        <title>dp9.dev | Web tutorial by designing plus nine</title>
        <meta name="description" content="Web制作を学ぶためのチュートリアル" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} points={points} />
    </>
  );
}

export default MyApp;
