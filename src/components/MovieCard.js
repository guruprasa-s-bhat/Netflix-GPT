import React from "react";
import { IMG_CDN_URL } from "./Contsants";

const MovieCard = ({ posterPath }) => {
  return (
    posterPath && (
      <div className=" pr-5 w-44">
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
      </div>
    )
  );
};

export default MovieCard;
