/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../components/common/auth/authProvider";
import { isActiveUrl } from "../../utils/isActiveUrl";
import { LogoutBtn } from "./button/logoutBtn";
import { DropDownNavigation } from "./dropDownNavigation";
import { NavLink } from "./navLink";

const Navigation = () => {
  const value = useContext(AuthContext);
  const router = useRouter();

  const activeStyle = "bg-purple-300 font-black h-12 leading-12 text-center";
  const defaultStyle =
    "bg-purple-100 font-black h-12 leading-12 text-center hover:bg-purple-300";

  return (
    <div className="relative">
      <div className=" absolute left-4 top-3">
        ようこそ　{value.userInfo.userName} さん
      </div>
      <nav className="bg-purple-100 h-12 grid grid-cols-layout">
        <div className="col-start-2 col-end-3">
          <ul className="grid grid-cols-4 h-12 items-center w-1080">
            <li>
              <NavLink href="/search" currentUrl={router.pathname}>
                一覧/検索
              </NavLink>
            </li>
            <li>
              <NavLink href="/contribute" currentUrl={router.pathname}>
                投稿
              </NavLink>
            </li>
            <li>
              <NavLink href="/edit" currentUrl={router.pathname}>
                履歴/編集
              </NavLink>
            </li>
            <li className="relative group">
              <div
                className={
                  isActiveUrl("/userSetting", router.pathname) ||
                  isActiveUrl("/groupSetting", router.pathname) ||
                  isActiveUrl("/linkUserToGroup", router.pathname)
                    ? activeStyle
                    : defaultStyle
                }
              >
                設定
              </div>
              <div className="absolute top-12 z-0 invisible group-hover:visible">
                <DropDownNavigation />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <LogoutBtn />
    </div>
  );
};

export { Navigation };
