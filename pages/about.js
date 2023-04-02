import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getCategoryArticles, getTitlesFromDirectory } from "../lib/api";
import fs from "fs";
import Image from "next/image";
const data = [
  {
    title: "チュートリアルの経緯",
    content: [
      "このチュートリアルは、デザインサークルであるdesigning plus nineのサークル内勉強資料をWeb上に公開したものです。私たちは「design for everyone」をテーマに、デザインを通じたさまざまな活動を行っており、チュートリアルの全体公開もその形の一つとして行っています。",
    ],
    linktext: null,
    href: null,
    image: null,
    alt: null,
    external: null,
  },
  {
    title: "designing plus nineとは",
    content: [
      "デザインサークルであるdesigning plus nineは、2007年に東京大学と東京藝術大学の学生を中心に設立され、東京大学の駒場キャンパスを拠点に活動しています。",
      "私たちのテーマは「design for everyone」であり、デザインを通じてさまざまな活動を展開しています。私たちは、多様なスキルを持つチームを組み、それぞれの情熱やクラフトマンシップを活かして課題解決に取り組んでいます。",
      "さらに、企業、非営利団体、他のサークルとも連携し、デザインの価値を社会に広げることを目指しています。",
      "このチュートリアルの全体公開も、私たちの活動の一環として行われています。",
    ],
    linktext: "公式サイトを見る",
    href: "http://designingplusnine.com/",
    image: "/dp9.png",
    alt: "Image of dp9",
    external: true,
  },
  {
    title: "対象者",
    content: [
      "このチュートリアルは、デザインの基礎を学んだことがあるが、コーディングについては初心者の人向けに設計されています。",
    ],
    linktext: null,
    href: null,
    image: null,
    alt: null,
  },
  {
    title: "チュートリアルの構成",
    content: [
      "このチュートリアルは、初心者向けのWeb開発ガイドとして構成されています。HTML、CSS、JavaScript、Reactなどの主要なWeb技術を段階的に学び、実際のプロジェクトを通じて理解を深めます。セットアップから始め、基本的なWebページの制作を経験し、最終的には現代的なフレームワークを利用したWebアプリケーション開発までカバーします。この構成は、初心者が着実にスキルを習得し、実践的な経験を積むことを目的としています。",
    ],
    linktext: null,
    href: null,
    image: null,
    alt: null,
  },
  {
    title: "免責事項",
    content: [
      "本チュートリアルの情報は、最善を尽くして提供されていますが、その正確性や完全性を保証するものではありません。また、チュートリアルを利用した結果について、当サークルは一切の責任を負いません。",
    ],
    linktext: null,
    href: null,
    image: null,
    alt: null,
  },
  {
    title: "お問い合わせと感想",
    content: [
      "チュートリアルに関するご質問やご意見、またはチュートリアルを通じて得た知識やスキルを活用した感想などがございましたら、お問い合わせフォームからお気軽にお寄せください。皆さんの感想やフィードバックは、今後のチュートリアル改善に役立てさせていただきます。",
    ],
    linktext: "フォームはこちら",
    href: "https://forms.gle/HRoPjXg8eAt5WDT39",
    image: null,
    alt: null,
    external: true,
  },
];

export default function Dojo({ navLinks }) {
  return (
    <div>
      <Header navLinks={navLinks} />
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-800 text-left mt-8 ">
          About
        </h2>
        <p className="text-gray2 mb-8 font-bold">このチュートリアルについて</p>
        {data.map((el) => {
          return (
            <div className="mb-8" key={el.title}>
              <h3 className="text-2xl font-bold mb-4"> {el.title}</h3>
              <div className="mb-4">
                {el.content.map((p) => {
                  return (
                    <p className="mb-2" key={p}>
                      {p}
                    </p>
                  );
                })}
              </div>

              {el.linktext !== null && el.href !== null ? (
                <div className="pb-8">
                  <Button
                    href={el.href}
                    text={el.linktext}
                    external={el.external}
                  />
                </div>
              ) : null}

              {el.image !== null ? (
                <Image
                  src={el.image}
                  alt={el.alt}
                  width={480}
                  height={360}
                  className="w-full"
                />
              ) : null}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Create navLinks
  const navLinks = [
    {
      title: "Setup",
      basePath: "setup",
      links: getTitlesFromDirectory(fs, "articles/setup"),
    },
    {
      title: "Diary",
      basePath: "diary",
      links: getTitlesFromDirectory(fs, "articles/diary"),
    },
    {
      title: "LP",
      basePath: "lp",
      links: getTitlesFromDirectory(fs, "articles/lp"),
    },
    {
      title: "React",
      basePath: "react",
      links: getTitlesFromDirectory(fs, "articles/react"),
    },
  ];
  return {
    props: {
      navLinks,
    },
  };
}
