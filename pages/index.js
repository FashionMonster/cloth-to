import Head from "next/Head";
import Image from "next/image";
import React from "react";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { SlickImages } from "../components/common/slickImages";

export default function Index() {
  return (
    <div>
      <Head>
        <title>アパレル事業者向けの情報共有ツール Cloth-To</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <body className="grid grid-rows-index gap-4 min-h-screen relative">
        <Header isLogined={false} />
        <div className="grid grid-cols-contents">
          <main className="col-start-2 col-end-3 grid  grid-rows-indexMain gap-12">
            <div>
              <Image
                src="/share_and_create.png"
                alt="イメージ"
                width="1080px"
                height="600px"
              />
              <h1 className="text-center text-purple-700 text-4xl font-bold mt-8">
                アパレル事業者の情報共有を簡単にします
              </h1>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl">
              <p className="text-center text-purple-700 text-3xl font-semibold mb-8">
                あなたの環境はこんな状況ではありませんか？
              </p>
              <ul className="text-2xl font-semibold">
                <div className="grid grid-cols-indexUl">
                  <div className=" leading-16">
                    <li className="h-16">
                      ・あなたが持つ仕入先や素材・製品に関する情報を周りに共有できていない
                    </li>
                    <li className="h-16">
                      ・他の人が持つ仕入先や素材・製品に関する情報を知ることが難しい
                    </li>
                    <li className="h-16">
                      ・ミーティングで情報共有をしているけど、不必要な情報も多く時間を浪費している
                    </li>
                  </div>
                  <Image
                    src="/bad_icon.png"
                    alt="イメージ"
                    width="200px"
                    height="200px"
                  />
                </div>
              </ul>
            </div>
            <div>
              <h2 className="text-center text-purple-700 text-3xl font-semibold mb-8">
                サービス Cloth-Toについて
              </h2>

              <p className="text-center text-2xl font-semibold mb-4">
                アパレル事業を営む企業、グループ内で社員それぞれが持つ情報を簡単に共有出来ます。
                <br />
                ユーザーはその情報から新しい知見を得ることが出来、さらなるクリエイションに活かせます。
              </p>
              <div className="grid grid-cols-auto3x">
                <div></div>
                <Image
                  src="/data_share.png"
                  alt="DATA_SHARE"
                  width="1080px"
                  height="550px"
                />
                <div></div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-center text-purple-700 text-3xl font-semibold mb-8">
                サービスの使い方
              </h2>
              <SlickImages />
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </div>
  );
}
