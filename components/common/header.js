import Image from "next/image";

//ヘッダーコンポーネント
const Header = () => {
  return (
    <header className="relative w-full h-16 bg-purple-400">
      <div className="absolute top-0 left-0 h-16">
        <Image src="/logo.png" alt="ロゴ" width="64px" height="64px" />
      </div>
      <p className="absolute top-0 left-20 h-16 leading-16 text-lg font-black">
        アパレル生産関係者のための情報共有ツール
      </p>
    </header>
  );
};

export { Header };
