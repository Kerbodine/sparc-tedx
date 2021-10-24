import React from "react";

export default function Member({ name, description, img }) {
  return (
    <div className="w-48 rounded-md bg-gray-100 p-8 flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="w-32 h-32 rounded-full border-4 border-ted-red mb-4"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
