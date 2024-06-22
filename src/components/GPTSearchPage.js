import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import body from "./Assets/body.jpg";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="bg-gradient-to-bbg-gradient-to-b from-black"
          src={body}
          alt="body"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GPTSearchPage;
