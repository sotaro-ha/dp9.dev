// lib/articles.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import _ from 'lodash';

function getArticlesForCategory(category) {
    const files = fs.readdirSync(`articles/${category}`);
    const articles = files.map((file) => {
        const slug = file.replace('.md', '');
        const fileContent = fs.readFileSync(path.join('articles', category, file), 'utf-8');
        const { data } = matter(fileContent);
        return {
            slug,
            title: data.title,
            order: data.order,
        };
    });
    return articles;
}

export function getArticleData() {
    return {
        setup: _.sortBy(getArticlesForCategory('setup'), 'order'),
        diary: _.sortBy(getArticlesForCategory('diary'), 'order'),
        lp: _.sortBy(getArticlesForCategory('lp'), 'order'),
        react: _.sortBy(getArticlesForCategory('react'), 'order'),
    };
}
