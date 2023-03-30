// components/SubNavbar.js
import Link from 'next/link';

export default function SubNavbar({ category, articles }) {
    return (
        <nav>
            <ul>
                {articles.map((article) => (
                    <li key={article.slug}>
                        <Link href={`/${category}/${article.slug}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
