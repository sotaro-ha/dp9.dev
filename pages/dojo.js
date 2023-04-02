import Footer from "../components/Footer";
import Header from "../components/Header";
import { getCategoryArticles, getTitlesFromDirectory } from "../lib/api";
import fs from "fs";
export default function Dojo({ navLinks }) {
  return (
    <div>
      <Header navLinks={navLinks} />
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold text-gray-800 text-left mt-8 ">
          Dojo
        </h2>
        <p className="text-gray2 mb-8 font-bold">道場</p>
        <div className="mb-4">
          <p className="mb-2">COMING SOON......</p>
          <p className="mb-2">
            このページでは、単発の記事を通して、より高度なcssや技術について学ぶことが出来るようになる予定です。
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Create navLinks
  const navLinks = [
    {
      title: "Setup",
      basePath: "setup",
      links: getTitlesFromDirectory(fs, "articles/setup"),
    },
    {
      title: "Diary",
      basePath: "diary",
      links: getTitlesFromDirectory(fs, "articles/diary"),
    },
    {
      title: "LP",
      basePath: "lp",
      links: getTitlesFromDirectory(fs, "articles/lp"),
    },
    {
      title: "React",
      basePath: "react",
      links: getTitlesFromDirectory(fs, "articles/react"),
    },
  ];
  return {
    props: {
      navLinks,
    },
  };
}
