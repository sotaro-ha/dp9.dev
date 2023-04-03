import React from "react";
import Header from "../components/Header";
import Image from "next/image";
export default function LPSample() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      >
        <div className="text-center w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-4">Web制作学習サイトへようこそ！</h1>
          <p className="text-2xl mb-8">
            学ぶことが簡単で楽しくなるように設計されたこのサイトで、Web制作のスキルを向上させましょう。
          </p>
          <a
            href="#"
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg"
          >
            今すぐ始める
          </a>
        </div>
      </div>
      <section id="features" className="bg-gray-200 py-12">
        <h2 className="text-center text-4xl mb-8">機能</h2>
        <div className="flex justify-around mb-4">
          <div className="text-center">
            <span className="block text-6xl mb-2">🎯</span>
            <h3 className="text-xl mb-2">ターゲット指定</h3>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
          </div>
          <div className="text-center">
            <span className="block text-6xl mb-2">💡</span>
            <h3 className="text-xl mb-2">アイデア生成</h3>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
          </div>
          <div className="text-center">
            <span className="block text-6xl mb-2">🚀</span>
            <h3 className="text-xl mb-2">プロジェクト推進</h3>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-12">
        <h2 className="text-center text-4xl mb-8">使い方</h2>

        <div className="flex justify-around mb-4">
          <div className="text-center">
            <Image
              src="/step1.jpg"
              alt="ステップ1"
              className="w-72 h-auto mb-4"
              width={288}
              height={240}
            />
            <h3 className="text-xl mb-2">ステップ1</h3>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
          </div>
          <div className="text-center">
            <Image
              src="/step2.jpg"
              alt="ステップ2"
              className="w-72 h-auto mb-4"
              width={288}
              height={240}
            />
            <h3 className="text-xl mb-2">ステップ2</h3>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
          </div>
          <div className="text-center">
            <Image
              src="/step3.jpg"
              alt="ステップ3"
              className="w-72 h-auto mb-4"
              width={288}
              height={240}
            />
            <h3 className="text-xl mb-2">ステップ3</h3>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-12">
        <h2 className="text-center text-4xl mb-8">価格</h2>
        <div className="flex justify-around mb-4">
          <div className="text-center">
            <h3 className="text-xl mb-2">無料プラン</h3>
            <p className="text-4xl mb-4">¥0</p>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
            <a
              href="#"
              className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg mt-4 inline-block"
            >
              無料で始める
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl mb-2">有料プラン</h3>
            <p className="text-4xl mb-4">¥9,800</p>
            <p>ダミーの文章が入ります。ダミーの文章が入ります。</p>
            <a
              href="#"
              className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg mt-4 inline-block"
            >
              今すぐ購入
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="py-12">
        <h2 className="text-center text-4xl mb-8">お問い合わせ</h2>
        <form className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="お名前"
            className="w-full max-w-md mb-4 px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            className="w-full max-w-md mb-4 px-4 py-2 border border-gray-300 rounded-md"
          />

          <textarea
            name="message"
            placeholder="メッセージ"
            className="w-full max-w-md mb-4 px-4 py-2 border border-gray-300 rounded-md h-40"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-black2 w-1/2 max-w-md px-6 py-3 rounded-lg text-lg"
          >
            送信する
          </button>
        </form>
      </section>
      <footer className="bg-gray-800 py-4">
        <div className="footer-content text-center text-black2">
          <div className="social-links flex justify-center mb-4">
            <a href="#" className="mx-2 flex items-center">
              <i className="icon">🔗</i> Facebook
            </a>
            <a href="#" className="mx-2 flex items-center">
              <i className="icon">🔗</i> Twitter
            </a>
            <a href="#" className="mx-2 flex items-center">
              <i className="icon">🔗</i> Instagram
            </a>
          </div>
          <p>© 2023 Web制作学習サイト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
