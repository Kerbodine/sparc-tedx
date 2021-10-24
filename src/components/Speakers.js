import React from "react";
import Speaker from "./Speaker";
import { ReactComponent as SpeakerIcon } from "./speaker.svg";

export default function Speakers() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-4xl">
      <div className="w-full bg-gray-900 rounded-xl text-white p-8 flex gap-4">
        <div>
          <h2 className="text-2xl font-medium leading-6 mb-2">
            Become a TEDx speaker
          </h2>
          <p className="w-full text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            possimus fugit accusantium molestiae illum molestias quae, tempore,
            officiis, cumque repellat quia necessitatibus aliquam.
          </p>
          <button className="mt-4 px-4 py-2 rounded-md bg-white text-black hover:bg-ted-red hover:text-white">
            Sign up today →
          </button>
        </div>
        <SpeakerIcon className="flex-none hidden md:block w-64 rounded-xl" />
      </div>
      <h2 className="mt-8 text-xl font-bold mb-2">All Speakers:</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
      </div>
    </div>
  );
}
