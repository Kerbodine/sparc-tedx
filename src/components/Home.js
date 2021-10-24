import React from "react";

export default function Home({ banner }) {
  return (
    <video
      className={`w-screen ${
        banner ? "h-[calc(100vh-8rem)]" : "h-[calc(100vh-5rem)]"
      } object-cover`}
      autoplay="autoplay"
      muted
      loop
    >
      <source src="intro.mp4" type="video/mp4" />
    </video>
  );
}
