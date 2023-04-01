import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumb = (props) => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  const generateLink = (label, path) => (
    <li>
      <Link href={path}>{label}</Link>
      <span className="mx-2"> / </span>
    </li>
  );

  const generateTitle = (label) => (
    <li>
      <span>{label}</span>
    </li>
  );

  return (
    <nav>
      <ul className="flex flex-wrap">
        <li>
          <Link href="/">ホーム</Link>
          <span className="mx-2"> / </span>
        </li>

        {pathSegments.map((segment, index) => {
          const path = "/" + pathSegments.slice(0, index + 1).join("/");
          switch (segment) {
            case "lp":
              return index === pathSegments.length - 1
                ? generateTitle("LPを作ってみよう")
                : generateLink("LPを作ってみよう", "/lp");
            case "react":
              return index === pathSegments.length - 1
                ? generateTitle("Reactチュートリアル")
                : generateLink("Reactチュートリアル", "/react");
            case "diary":
              return index === pathSegments.length - 1
                ? generateTitle("ダイアリー")
                : generateLink("ダイアリー", "/diary");
            case "setup":
              return index === pathSegments.length - 1
                ? generateTitle("セットアップ")
                : generateLink("セットアップ", "/setup");
            default:
              return (
                index === pathSegments.length - 1 && (
                  <li>
                    <span>{router.query.title}</span>
                  </li>
                )
              );
          }
        })}
        <li>
          <Link href={router.asPath}>{props.title}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
