import Link from "next/Link";
import { useRouter } from "next/router";
import React from "react";
import { isActiveUrl } from "../../utils/isActiveUrl";

const NavLink = ({ href, isSettingNav, children }) => {
  const router = useRouter();

  const activeStyle =
    "bg-purple-300 font-black h-12 leading-12 text-center border-l-2";

  let defaultStyle;
  //設定サブナビの場合
  if (isSettingNav) {
    defaultStyle =
      "bg-purple-200 font-black h-12 leading-12 text-center hover:bg-purple-300 border-t-2";
  } else {
    defaultStyle =
      "bg-purple-200 font-black h-12 leading-12 text-center hover:bg-purple-300 border-l-2";
  }

  const width = isSettingNav ? 266 : 270;

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
