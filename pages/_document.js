import Document, { Head, Html, Main, NextScript } from "next/document";

// class Document extends NextDocument {
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-noto font-medium">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
