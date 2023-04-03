// components/Diary.js
import React from "react";
import Image from "next/image";
const Diary = () => {
  return (
    <div className="min-h-screen bg-gray2">
      <header className="bg-white  shadow-md">
        <Image
          src="/logo.png"
          height={60}
          width={60}
          alt={"logo"}
          className="mx-auto py-4"
        ></Image>
      </header>
      <main className="px-8 max-w-6xl mx-auto bg-white">
        <h1 className="text-3xl font-bold text-center py-4">私の日記</h1>
        <article className="mb-8">
          <h2 className="text-2xl mb-2">2023年3月31日</h2>
          <p className="mb-4">
            今日はとても暖かい一日でした。昼間は公園でピクニックを楽しみました。
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>サンドイッチを作った</li>
            <li>友達とフリスビーをした</li>
            <li>夕方には映画を見た</li>
          </ul>
          <Image
            src="/dp9.png"
            alt="公園でのピクニック"
            className="w-full max-w-md mx-auto"
            width={1080}
            height={720}
          />
          <p className="text-center my-2">映画の画像です</p>
        </article>
        <article className="mb-8">
          <h2 className="text-2xl mb-2">2023年3月30日</h2>
          <p className="mb-4">
            今日は雨が降っていたので、家でリラックスしました。Youtubeを沢山見ました。
          </p>
          <div className="relative pt-[56.25%]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-center my-2">面白いYoutubeです。</p>
        </article>
      </main>
      <footer className="bg-black  text-white text-center py-8 mt-8">
        <p>© 2023 私の日記. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Diary;
