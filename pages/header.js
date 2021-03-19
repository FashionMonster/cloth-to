import Image from "next/image";
import React from "react";

export function Header() {
  return (
    <div>
      <header className="bg-purple-400 grid grid-cols-20 h-16">
        <div className="col-start-1 h-16">
          <Image src="/logo.png" alt="ロゴ" width="64px" height="64px" />
        </div>
        <p className="text-lg font-black col-start-2 col-end-6 h-16 leading-16">
          アパレル生産関係者のための情報共有ツール
        </p>
      </header>
    </div>
  );
}
