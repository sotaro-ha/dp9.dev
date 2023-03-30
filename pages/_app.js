import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>dp9.dev | Web tutorial by designing plus nine</title>
        <meta name="description" content="Web制作を学ぶためのチュートリアル" />
        <meta charSet="utf-8"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
