import Link from "next/Link";
import React from "react";
import { isActiveUrl } from "../../utils/isActiveUrl";

const NavLink = ({ href, currentUrl, children }) => {
  const activeStyle = "bg-purple-300 font-black h-12 leading-12 text-center";
  const defaultStyle =
    "bg-purple-100 font-black h-12 leading-12 text-center hover:bg-purple-300";

  return (
    <li className={isActiveUrl(href, currentUrl) ? activeStyle : defaultStyle}>
      <Link href={href}>
        <a className="w-270 block">{children}</a>
      </Link>
    </li>
  );
};

export { NavLink };
