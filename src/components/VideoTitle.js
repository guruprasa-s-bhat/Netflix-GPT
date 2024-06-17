import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[14%] px-20 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-4/12">{overview}</p>
      <div>
        <button className="mx-2 bg-white text-black p-4 px-16 w-14 text-xl rounded-lg hover:bg-slate-300">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div> 
  );
};

export default VideoTitle;
