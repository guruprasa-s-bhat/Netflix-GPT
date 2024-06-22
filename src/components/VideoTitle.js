import React from "react";
import { FaPlay } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/cg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[14%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-4/12">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black p-4 px-16 text-xl rounded-lg hover:bg-slate-300 flex items-center">
          <FaPlay className="mr-2" />
          <span>Play</span>
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg flex items-center gap-[8px]">
          <CgMoreVerticalO /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
