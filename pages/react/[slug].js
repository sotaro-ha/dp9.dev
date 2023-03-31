import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubNavbar from '../../components/subNavbar';
import { getArticleData } from '../../lib/articles';
import ArticleNavigation from '../../components/ArticleNavigation';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { getTitlesFromDirectory } from "../../lib/navLinks";

export default function Article({ article, articles, prevArticle, nextArticle, navLinks }) {
    return (
        <div>
            <Header />
            <div className='flex max-6xl mx-auto shadow-sm'>
                <SubNavbar navLinks={navLinks} />
                <div className='p-8'>
                    <div className='markdown'>
                        <MarkdownRenderer content={article.content} />
                    </div>
                    <ArticleNavigation category="setup" prevArticle={prevArticle} nextArticle={nextArticle} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync('articles/react');
    const slugs = files.map((file) => file.replace('.md', ''));
    const paths = slugs.map((slug) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const file = fs.readFileSync(path.join('articles/react', `${slug}.md`), 'utf-8');
    const { data, content } = matter(file);
    const articles = getArticleData().setup;

    const setupTitles = getTitlesFromDirectory("articles/setup");
    const lpTitles = getTitlesFromDirectory("articles/lp");
    const diaryTitles = getTitlesFromDirectory("articles/diary");
    const reactTitles = getTitlesFromDirectory("articles/react");

    // Find the current article index in the articles array
    const currentArticleIndex = articles.findIndex((article) => article.slug === slug);

    // Get the previous and next articles
    const prevArticle = currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;
    const nextArticle = currentArticleIndex < articles.length - 1 ? articles[currentArticleIndex + 1] : null;

    // create Navlinks
    const navLinks = [
        { title: "Setup", basePath: "setup", links: setupTitles },
        { title: "LP", basePath: "lp", links: lpTitles },
        { title: "Diary", basePath: "diary", links: diaryTitles },
        { title: "React", basePath: "react", links: reactTitles },
    ]
    return {
        props: {
            article: {
                title: data.title,
                order: data.order,
                content,
            },
            articles,
            prevArticle,
            nextArticle,
            navLinks: navLinks,
        },
    };
}