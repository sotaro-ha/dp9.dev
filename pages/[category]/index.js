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
import Breadcrumb from "../../components/BreadCrumb";
import Pagination from "../../components/Pagination";

import Link from "next/link";

export default function Article({
  navLinks,
  category,
  firstArticle,
  ...props
}) {
  const index = { setup: 0, diary: 1, lp: 2, react: 3 };
  return (
    <div>
      <Header navLinks={navLinks} />
      <div className="flex  mx-auto shadow-sm">
        <div className="hidden lg:block">
          <SubNavbar navLinks={navLinks} points={props.points} />
        </div>
        <div className="p-8 max-w-6xl mx-auto text-left w-full">
          <div>
            <Breadcrumb title={null} />
            <Pagination currentOrder={0} Links={navLinks[index[category]]} />
            <div className="markdown "></div>
            <ArticleNavigation
              category={category}
              prevArticle={null}
              nextArticle={firstArticle}
              isFirstArticle={false}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const categories = ["lp", "setup", "diary", "react"];
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const articles = getCategoryArticles(fs, category);
  const firstArticle = articles.find((article) => article.order === 1);

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
  ].map((navLink) => ({
    ...navLink,
    links: navLink.links.sort((a, b) => a.order - b.order),
  }));
  return {
    props: {
      navLinks,
      category,
      firstArticle,
    },
  };
}
