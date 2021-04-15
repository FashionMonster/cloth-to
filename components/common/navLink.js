import Link from "next/Link";
import React from "react";

const NavLink = ({ href, children }) => {
  return (
    <li className="bg-purple-100 font-black h-12 leading-12 text-center hover:bg-purple-300">
      <Link href={href}>
        <a className="w-270 block">{children}</a>
      </Link>
    </li>
  );
};

export { NavLink };
