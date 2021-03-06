import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo-light.svg";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const pages = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/speakers",
      title: "Speakers",
    },
    {
      path: "/talks",
      title: "Talks",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/team",
      title: "Our team",
    },
  ];

  return (
    <>
      <div className="w-full h-20 bg-gray-100 flex items-center px-4 sm:px-8">
        <Link to="/" aria-label="Home">
          <Logo className="h-16" />
        </Link>
        <div className="ml-auto hidden gap-4 md:flex">
          {pages.map((page) => (
            <Link to={page.path} aria-label={page.title}>
              <NavbarItem title={page.title} path={page.path} />
            </Link>
          ))}
        </div>
        <div
          className="flex items-center justify-center ml-auto md:hidden text-2xl w-8 h-8 rounded-md hover:bg-gray-200"
          onClick={toggleNav}
        >
          <BiMenu />
        </div>
      </div>
      {showNav ? (
        <div className="w-full border-t-2 border-gray-300 bg-gray-100 flex flex-wrap gap-x-2 py-2 justify-center">
          {pages.map((page) => (
            <Link to={page.path} aria-label={page.title}>
              <NavbarItem title={page.title} path={page.path} />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
