import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import usePagePoints from "../hooks/usePagePoints";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const points = usePagePoints();
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>
          dp9.dev | Design by Development | dp9によるWeb制作チュートリアルです
        </title>
        <meta name="description" content="Web制作を学ぶためのチュートリアル" />
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dp9.dev/" />
        <meta
          property="og:title"
          content="dp9.dev | Web tutorial by designing plus nine"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="manifest" href="https://www.dp9.dev/manifest.json" />
        <meta
          property="og:description"
          content="designing plus nineが提供する、Web初心者のためのWebチュートリアル"
        />
        <meta property="og:image" content="https://www.dp9.dev/ogp.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dp9.dev/" />
        <meta
          property="twitter:title"
          content="dp9.dev | Web tutorial by designing plus nine"
        />
        <meta
          property="twitter:description"
          content="designing plus nineが提供する、Web初心者のためのWebチュートリアル"
        />
        <meta property="twitter:image" content="https://www.dp9.dev/ogp.png" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />
      <Component {...pageProps} points={points} />
    </>
  );
}

export default MyApp;
