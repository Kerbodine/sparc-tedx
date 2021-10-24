import React from "react";
import { useLocation } from "react-router-dom";

export default function NavbarItem({ title, path }) {
  const location = useLocation();
  let active = false;

  if (location.pathname === path) {
    active = true;
  } else {
    active = false;
  }

  return (
    <div className="font-medium h-10 relative flex items-center group">
      <p
        className={`text-gray-700 z-10 px-1 py-1 rounded-md uppercase font-semibold`}
      >
        {title}
      </p>
      <div
        className={`absolute bottom-0 w-full h-1 ${
          active ? "bg-ted-red" : "group-hover:bg-gray-300"
        }`}
      ></div>
    </div>
  );
}
