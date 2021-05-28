/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../components/common/auth/authProvider";
import { NavLink } from "./navLink";
import { SettingNav } from "./settingNav";
const Navigation = () => {
  const value = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className="relative">
      <div className=" absolute left-4 top-3">
        ようこそ　{value.userInfo.userName} さん
      </div>
      <nav className="bg-purple-200 h-12 grid grid-cols-layout">
        <div className="col-start-2 col-end-3">
          <ul className="grid grid-cols-4 h-12 items-center w-1080">
            <li>
              <NavLink href="/search" isSettingNav={false}>
                一覧/検索
              </NavLink>
            </li>
            <li>
              <NavLink href="/contribute" isSettingNav={false}>
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
        </div>
      </nav>
    </div>
  );
};

export { Navigation };
