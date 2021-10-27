import React from "react";

export default function Member({ name, description, img }) {
  return (
    <div className="w-32 rounded-md bg-gray-100 p-4 flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full border-4 border-ted-red mb-4"
      />
      <h3 className="text-md font-bold">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
