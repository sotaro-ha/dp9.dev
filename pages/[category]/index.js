import { useRouter } from "next/router";
import { useState } from "react";
import fs from "fs";
import {
  getArticleSlugs,
  getArticleData,
  getTitlesFromDirectory,
  getCategoryArticles,
} from "../../lib/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubNavbar from "../../components/subNavbar";
import ArticleNavigation from "../../components/ArticleNavigation";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import Quiz from "../../components/Quiz";
import Breadcrumb from "../../components/BreadCrumb";
import Pagination from "../../components/Pagination";

export default function Article({ navLinks, category, ...props }) {
  const index = { setup: 0, diary: 1, lp: 2, react: 3 };
  return (
    <div>
      <Header />
      <div className="flex  mx-auto shadow-sm">
        <SubNavbar navLinks={navLinks} points={props.points} />
        <div className="p-8 max-w-6xl mx-auto text-left w-full">
          <div>
            <Breadcrumb title={null} />
            <Pagination currentOrder={0} Links={navLinks[index[category]]} />
            <div className="markdown "></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const categories = ["lp", "setup", "diary", "react"];
  const paths = [];

  categories.forEach((category) => {
    const slugs = getArticleSlugs(fs, category);
    slugs.forEach((slug) => {
      paths.push({ params: { category, slug } });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category, slug } = params;
  const articles = getCategoryArticles(fs, category);

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
      category,
    },
  };
}
