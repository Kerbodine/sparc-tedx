import React from "react";

export default function FormInput({ label, id, type }) {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-bold text-gray-500">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="outline-none w-full h-8 rounded-md bg-gray-100 px-2 focus:ring-2 focus:ring-ted-red"
      />
    </>
  );
}
