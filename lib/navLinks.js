import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getTitlesFromDirectory(directory) {
  const fullPath = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync("articles/" + fullPath);
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

module.exports = {
  getTitlesFromDirectory,
};
