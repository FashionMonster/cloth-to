/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../components/common/auth/authProvider";
import { makeDispUserName } from "../../utils/makeDispUserName";
import { NavLink } from "./navLink";
import { SettingNav } from "./settingNav";

const Navigation = () => {
  const value = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className="relative">
      <div className=" absolute left-4 top-3 max_2xl:hidden">
        ようこそ　{makeDispUserName(value.userInfo.userName)} さん
      </div>
      <nav className="bg-purple-200 h-12 w-full grid grid-cols-contents">
        <ul className="col-start-2 col-end-3 grid grid-cols-4 h-12 w-1080">
          <li>
            <NavLink href="/search" isSettingNav={false}>
              一覧/検索
            </NavLink>
          </li>
          <li>
            <NavLink href="/contribution" isSettingNav={false}>
              投稿
            </NavLink>
          </li>
          <li>
            <NavLink href="/contributionHistory" isSettingNav={false}>
              履歴/編集
            </NavLink>
          </li>
          <li className="relative group">
            <SettingNav router={router} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navigation };
