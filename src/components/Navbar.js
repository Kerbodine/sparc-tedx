import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo-light.svg";

import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-gray-100 flex items-center px-8">
      <Link to="/" aria-label="Home">
        <Logo className="h-16" />
      </Link>
      <div className="ml-auto flex gap-2">
        <Link to="/" aria-label="Home">
          <NavbarItem title="Home" path="/" />
        </Link>
        <Link to="/speakers" aria-label="Speakers">
          <NavbarItem title="Speakers" path="/speakers" />
        </Link>
        <Link to="/watch" aria-label="Watch talks">
          <NavbarItem title="Watch talks" path="/watch" />
        </Link>
        <Link to="/contact" aria-label="Contact">
          <NavbarItem title="Contact" path="/contact" />
        </Link>
      </div>
    </div>
  );
}
