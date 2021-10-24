import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Speaker() {
  return (
    <div className="w-full h-24 hover:ring-gray-200 hover:ring-2 rounded-xl flex px-4 py-4 gap-4 group relative cursor-pointer">
      <div className="w-16 h-16 border-ted-red border-4 rounded-full"></div>
      <div>
        <h3 className="text-lg uppercase font-bold tracking-tight text-ted-red -mb-2">
          Speaker Name
        </h3>
        <p className="text-sm text-gray-500">Speaker description</p>
        <p className="text-lg font-bold">TED Talk Title</p>
      </div>
      <FiArrowUpRight className="absolute top-2 hidden right-2 text-2xl text-gray-500 group-hover:block" />
    </div>
  );
}
