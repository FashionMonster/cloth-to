import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";
import { isActiveUrl } from "../../utils/isActiveUrl";

const NavLink = ({ href, isSettingNav, children }) => {
  const router = useRouter();

  let defaultStyle;
  let activeStyle;
  let width;
  //設定サブナビの場合
  if (isSettingNav) {
    defaultStyle =
      "bg-purple-200 font-black h-12 leading-12 text-center hover:bg-purple-300 border-t-2";
    activeStyle =
      "bg-purple-300 font-black h-12 leading-12 text-center border-t-2";
    width = 266;
  } else {
    defaultStyle =
      "bg-purple-200 font-black h-12 leading-12 text-center hover:bg-purple-300 border-l-2";
    activeStyle =
      "bg-purple-300 font-black h-12 leading-12 text-center border-l-2";
    width = 270;
  }

  return (
    <li
      className={
        isActiveUrl(href, router.pathname) ? activeStyle : defaultStyle
      }
    >
      <Link href={href}>
        <a className={`w-${width} block`}>{children}</a>
      </Link>
    </li>
  );
};

export { NavLink };
