import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Section from "../components/Section";
import fs from "fs";
import { getCategoryArticles, getTitlesFromDirectory } from "../lib/api";
const data = [
  {
    title: "基本設定をしよう",
    image: "/index/setup.svg",
    alt: "setup image",
    description: "VScodeや、GitなどWeb開発に欠かせないツールを導入します。",
    href: "/setup/",
    index: "01",
  },
  {
    title: "日記ページを作ってみよう",
    image: "/index/diary.svg",
    alt: "diary image",
    description:
      "まずは、導入としてシンプルな日記サイトの制作を通してhtmlやcssの基本を学びます。",
    href: "/diary/",
    index: "02",
  },
  {
    title: "LPを作ってみよう",
    image: "/index/lp.svg",
    alt: "lp image",
    description:
      "LP(ランディングページ)と呼ばれるWebサイトの制作を通して実践的な知識を身につけます。",
    href: "/lp/",
    index: "03",
  },
  {
    title: "Reactを使ってみよう",
    image: "/index/react.svg",
    alt: "react image",
    description:
      "Reactのフレームワークの1つであるNext.jsに触れることで、コンポーネントのような概念を理解します。",
    href: "/react/",
    index: "04",
  },
];
function Hero() {
  return (
    <section
      className="w-full bg-cover bg-center py-8  sm:py-16"
      style={{ backgroundImage: 'url("/bg.jpg")' }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="w-full text-4xl xs:text-6xl font-extrabold text-white sm:text-8xl text-left my-8">
            <p>Design</p>
            <p>By</p>
            <p className="w-full">Development</p>
          </h2>
          <p className="text-white text-base sm:text-xl sm:w-2/3 font-medibold">
            自分でコードが書けるようになると、デザインのアイデアを実現することができます。
            自分にはWebコーディングは難しい......どこから学べば良いかわからない......という人のための、一通りwebサイトが作れるようになるようにチュートリアルです。
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className=" font-bold">
              <Link
                href="/setup"
                className="w-full flex items-center rounded-xl justify-center px-16 py-3  text-base  text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Card(props) {
  return (
    <Link href={props.href}>
      <div className="hover:shadow-md shadow-sm p-8 block items-center relative rounded-md xl:flex">
        <Image
          src={props.image}
          width={200}
          height={200}
          alt={props.alt}
          className="h-24 mr-4"
        />
        <div className="p-4 sm:p-0">
          <p className="absolute right-0 text-7xl opacity-40 text-primary font-bold">
            {props.index}
          </p>
          <h3 className="text-2xl font-bold mb-4">{props.title}</h3>
          <p className="mb-4 xl:mb-0"> {props.description}</p>
          <p className="text-right text-primary font-bold mt-4">詳しく見る→</p>
        </div>
      </div>
    </Link>
  );
}
function Cards() {
  return (
    <>
      <h2 className="text-5xl font-extrabold text-gray-800 text-left mt-8 ">
        Learn
      </h2>
      <p className="text-gray2 mb-8 font-bold">Web制作を学ぶ</p>
      <div className="grid sm:grid-cols-2 gap-8 grid-cols-1">
        {data.map((item) => Card(item))}
      </div>
    </>
  );
}
function About() {
  return (
    <>
      <h2 className="text-5xl font-extrabold text-gray-800 text-left mt-8 ">
        About
      </h2>
      <p className="text-gray2 mb-8 font-bold">このチュートリアルについて</p>
      <h3 className="text-2xl font-bold mb-4">経緯</h3>
      <div className="mb-4">
        <p className="mb-2">
          このチュートリアルは、デザインサークルであるdesigning plus nine
          のサークル内勉強資料をweb上に公開したものです。
        </p>
        <p className="mb-2">
          私たちは「design for
          everyone」をテーマに、デザインを通じたさまざまな活動を行っており、
          チュートリアルの全体公開もその形の一つとして行っています。
        </p>
      </div>
      <h3 className="text-2xl font-bold mb-4">対象</h3>
      <div className="mb-4">
        <p className="mb-2">
          このチュートリアルは、デザインの基礎を学んだことがあるが、コーディングについては初心者の人向けに設計されています。したがって、デザインの基礎ツールなどは使えるものとして、主にコーディングについて学ぶことを目的としています。このチュートリアルを最後まで完了することで、CW（クライアントワーク）でランディングページをコーディングすることができるようになることを期待しています。
        </p>
      </div>
      <Button href="/about" text="詳しく見る" external={false} />
    </>
  );
}
function Dojo() {
  return (
    <>
      <h2 className="text-5xl font-extrabold text-gray-800 text-left mt-8 ">
        Dojo
      </h2>
      <p className="text-gray2 mb-8 font-bold">道場</p>
      <div className="mb-4">
        <p className="mb-2">COMING SOON......</p>
      </div>
    </>
  );
}
export default function Home({ navLinks }) {
  return (
    <>
      <Header navLinks={navLinks} />
      <Hero />
      <Section>
        <Cards />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Dojo />
      </Section>
      <Footer />
    </>
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
