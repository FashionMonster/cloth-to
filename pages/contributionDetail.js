import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";

export default function ContributionDetail() {
  return (
    <div>
      <body className="grid grid-rows-layout gap-4 min-h-screen">
        <div id="headerWrapper">
          <Header />
          <Navigation />
        </div>
        <p className="text-center">
          投稿情報詳細
          <br />
          検索した投稿情報の詳細を確認します
        </p>
        <main className="grid grid-cols-layout"></main>
        <Footer />
      </body>
    </div>
  );
}
