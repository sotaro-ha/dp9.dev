import path from "path";
import matter from "gray-matter";

function getArticleSlugs(fs, category) {
  const fullPath = path.join(process.cwd(), "articles", category);
  const fileNames = fs.readdirSync(fullPath);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}

function getArticlesForCategory(fs, category) {
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

function getArticleData(fs, category, slug) {
  const fullPath = path.join(process.cwd(), "articles", category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    order: data.order,
    content,
    quiz: data.quiz,
  };
}
export function getCategoryArticles(fs, category) {
  return getArticlesForCategory(fs, category);
}
function getCategorySlugs(fs, category) {
  const fullPath = path.join(process.cwd(), "articles", category);
  const fileNames = fs.readdirSync(fullPath);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}

function getTitlesFromDirectory(fs, directory) {
  const fullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(fullPath);
  const titles = fileNames.map((fileName) => {
    const filePath = path.join(fullPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      title: data.title,
      slug: fileName.replace(/\.md$/, ""),
      order: data.order,
    };
  });
  titles.sort((a, b) => a.order - b.order);
  return titles;
}

export {
  getArticleSlugs,
  getArticleData,
  getCategorySlugs,
  getTitlesFromDirectory,
};
