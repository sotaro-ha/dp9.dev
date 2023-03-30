import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubNavbar from '../../components/subNavbar';
import { getArticleData } from '../../lib/articles';
import ArticleNavigation from '../../components/ArticleNavigation';

export default function Article({ article, articles, prevArticle, nextArticle }) {
    return (
        <div>
            <Header />
            <div className='flex'>
                <SubNavbar category="setup" articles={articles} />
                <div className='p-8'>
                    <ReactMarkdown>{article.content}</ReactMarkdown>
                    <ArticleNavigation category="setup" prevArticle={prevArticle} nextArticle={nextArticle} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync('articles/setup');
    const slugs = files.map((file) => file.replace('.md', ''));
    const paths = slugs.map((slug) => ({ params: { slug } }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const file = fs.readFileSync(path.join('articles/setup', `${slug}.md`), 'utf-8');
    const { data, content } = matter(file);
    const articles = getArticleData().setup;

    // Find the current article index in the articles array
    const currentArticleIndex = articles.findIndex((article) => article.slug === slug);

    // Get the previous and next articles
    const prevArticle = currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;
    const nextArticle = currentArticleIndex < articles.length - 1 ? articles[currentArticleIndex + 1] : null;

    return {
        props: {
            article: {
                title: data.title,
                content,
            },
            articles,
            prevArticle,
            nextArticle,
        },
    };
}
