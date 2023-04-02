import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubNavbar from "../../components/subNavbar";
import ArticleNavigation from "../../components/ArticleNavigation";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import Quiz from "../../components/Quiz";
import Breadcrumb from "../../components/BreadCrumb";
import Pagination from "../../components/Pagination";

import { useRouter } from "next/router";
import { useState } from "react";
import fs from "fs";
import {
  getArticleSlugs,
  getArticleData,
  getTitlesFromDirectory,
  getCategoryArticles,
} from "../../lib/api";

export default function Article({
  article,
  prevArticle,
  nextArticle,
  navLinks,
  category,
  ...props
}) {
  const router = useRouter();
  const [testedPages, setTestedPages] = useState({});
  const index = { setup: 0, diary: 1, lp: 2, react: 3 };
  return (
    <div>
      <Header />
      <div className="flex  mx-auto shadow-sm">
        <SubNavbar navLinks={navLinks} points={props.points} />
        <div className="p-8 max-w-6xl mx-auto text-left w-full">
          <div>
            <Breadcrumb title={article.title} />
            <Pagination
              currentOrder={article.order}
              Links={navLinks[index[category]]}
            />
            <div className="markdown ">
              <MarkdownRenderer content={article.content} />
              <Quiz
                article={article}
                setTestedPages={setTestedPages}
                pathname={router.asPath}
                key={article.slug}
              />
            </div>
            <ArticleNavigation
              category={category}
              prevArticle={prevArticle}
              nextArticle={nextArticle}
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
  const article = getArticleData(fs, category, slug);
  const articles = getCategoryArticles(fs, category);

  const currentArticleIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle =
    currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;
  const nextArticle =
    currentArticleIndex < articles.length - 1
      ? articles[currentArticleIndex + 1]
      : null;

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
      article,
      prevArticle,
      nextArticle,
      navLinks,
      category,
    },
  };
}
