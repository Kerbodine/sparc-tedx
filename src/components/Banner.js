import React from "react";
import { BiX } from "react-icons/bi";

export default function Banner({ setShowBanner }) {
  return (
    <div className="w-full h-20 sm:h-12 bg-black text-white flex flex-col sm:flex-row items-center text-sm justify-center gap-y-2">
      <p>Seats are limited, apply to attend today!</p>
      <button className="ml-8 px-2 h-8 rounded-md bg-white hover:bg-ted-red hover:text-white transition-colors text-black">
        Apply now →
      </button>
      <button
        className="absolute right-4 text-2xl"
        onClick={() => setShowBanner(false)}
      >
        <BiX />
      </button>
    </div>
  );
}
