import Image from "next/image";
import React, { useContext } from "react";
import { AuthContext } from "../../components/common/auth/authProvider";
import { CreateUserBtn } from "./button/createUserBtn";
import { LoginBtn } from "./button/loginBtn";
import { LogoutBtn } from "./button/logoutBtn";

//ヘッダーコンポーネント
const Header = ({ isLogined }) => {
  const value = useContext(AuthContext);

  if (!isLogined) {
    return (
      <header className="relative w-full h-16 bg-gray-100">
        <div className="absolute top-0 left-0 h-16">
          <Image src="/logo.png" alt="ロゴ" width="64px" height="64px" />
        </div>
        <p className="absolute top-0 left-20 h-16 leading-16 text-lg font-black">
          アパレル事業者のための情報共有ツール
        </p>
        <div className="absolute top-4 right-40">
          <CreateUserBtn />
        </div>
        <div className="absolute top-4 right-8">
          <LoginBtn />
        </div>
      </header>
    );
  } else if (isLogined) {
    return (
      <header className="relative w-full h-16 bg-purple-100">
        <div className="absolute top-0 left-0 h-16">
          <Image src="/logo.png" alt="ロゴ" width="64px" height="64px" />
        </div>
        <p className="absolute top-0 left-20 h-16 leading-16 text-lg font-black">
          アパレル事業者のための情報共有ツール
        </p>
        <div className="h-16 flex justify-center items-center min_2xl:hidden">
          ようこそ　{value.userInfo.userName} さん
        </div>
        <div className="absolute top-2 right-4">
          <LogoutBtn />
        </div>
      </header>
    );
  }
};

export { Header };
