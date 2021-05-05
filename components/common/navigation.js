import React, { useContext } from "react";
import { AuthContext } from "../../components/common/auth/authProvider";
import { LogoutBtn } from "./button/logoutBtn";
import { NavLink } from "./navLink";

const Navigation = () => {
  const value = useContext(AuthContext);

  return (
    <div className="relative">
      <div className=" absolute left-4 top-3">
        ようこそ　{value.userInfo.userName} さん
      </div>
      <nav className="bg-purple-100 h-12 grid grid-cols-layout">
        <div className="col-start-2 col-end-3">
          <ul className="grid grid-cols-4 h-12 items-center w-1080">
            <NavLink href="/search">一覧/検索</NavLink>
            <NavLink href="/contribute">投稿</NavLink>
            <NavLink href="/edit">履歴/編集</NavLink>
            <NavLink href="/setting">設定</NavLink>
          </ul>
        </div>
      </nav>
      <LogoutBtn />
    </div>
  );
};

export { Navigation };
