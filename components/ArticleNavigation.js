// components/ArticleNavigation.js
import ActiveNavigation from './ActiveNavigation';

export default function ArticleNavigation({ category, prevArticle, nextArticle }) {
    return (
        <nav className='w-full flex justify-between py-8'>
            <ActiveNavigation
                href={prevArticle ? `/${category}/${prevArticle.slug}` : null}
                isVisible={!!prevArticle}
            >
                &lt;&nbsp;前の記事: {prevArticle && prevArticle.title}
            </ActiveNavigation>
            <ActiveNavigation
                href={nextArticle ? `/${category}/${nextArticle.slug}` : null}
                isVisible={!!nextArticle}
            >
                次の記事: {nextArticle && nextArticle.title} &nbsp;&gt;
            </ActiveNavigation>
        </nav>
    );
}
