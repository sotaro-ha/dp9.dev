// components/ArticleNavigation.js
import ActiveNavigation from "./ActiveNavigation";

export default function ArticleNavigation({
  category,
  prevArticle,
  nextArticle,
  isFirstArticle,
}) {
  return (
    <nav className="w-full flex justify-between py-8">
      <ActiveNavigation
        href={
          prevArticle
            ? `/${category}/${prevArticle.slug}`
            : isFirstArticle
            ? `/${category}`
            : null
        }
        isVisible={!!prevArticle || isFirstArticle}
      >
        &lt;&nbsp;前の記事:{" "}
        {(prevArticle && prevArticle.title) || (isFirstArticle && "Index")}
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
