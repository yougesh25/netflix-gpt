import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="border border-black bg-white text-black p-4 px-12 cursor-pointer text-2xl mr-4 rounded-xl hover:bg-white/50">
          ▶️ Play
        </button>
        <button className="border border-black bg-gray-500/50 text-white p-4 px-12 cursor-pointer text-2xl rounded-xl hover:bg-white/70 hover:text-black">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
