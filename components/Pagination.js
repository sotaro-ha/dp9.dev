import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Pagination = ({ Links, currentOrder }) => {
  const basePath = Links.basePath;
  const Link_array = Links.links;
  const router = useRouter();
  const path = router.asPath;
  return (
    <div key={path}>
      <ul className="flex flex-wrap my-8">
        {Link_array.map((article) => (
          <li key={article.order} className="mr-4">
            <Link
              href={`/${basePath}/${article.slug}`}
              className={
                article.order === currentOrder
                  ? "bg-primary text-white rounded-md px-3 py-1 shadow-sm hover:shadow-md"
                  : " text-primary px-4 py-2 bg-white shadow-sm rounded-md hover:shadow-md"
              }
            >
              {article.order}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
