import React from "react";
import { IMG_CDN_URL } from "./Contsants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) {
    return null;
  }
  return (
    posterPath && (
      <div className=" pr-5 w-44">
        <h1>{title}</h1>
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
      </div>
    )
  );
};

export default MovieCard;
