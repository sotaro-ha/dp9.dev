// components/Navbar.js
import Link from 'next/link';

export default function Navbar({ articles }) {
    return (
        <nav>
            <ul>
                {articles.map((article) => (
                    <li key={article.slug}>
                        <Link href={`/${article.slug}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
