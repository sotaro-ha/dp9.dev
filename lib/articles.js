// lib/articles.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import sortBy from "loadsh/sortBy";

function getArticlesForCategory(category) {
  const files = fs.readdirSync(`articles/${category}`);
  const articles = files.map((file) => {
    const slug = file.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join("articles", category, file),
      "utf-8"
    );
    const { data } = matter(fileContent);
    return {
      slug,
      title: data.title,
      order: data.order,
      quiz: data.quiz,
    };
  });
  return articles;
}

export function getArticleData() {
  return {
    setup: sortBy(getArticlesForCategory("setup"), "order"),
    diary: sortBy(getArticlesForCategory("diary"), "order"),
    lp: sortBy(getArticlesForCategory("lp"), "order"),
    react: sortBy(getArticlesForCategory("react"), "order"),
  };
}
