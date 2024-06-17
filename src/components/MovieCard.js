import React from "react";
import { IMG_CDN_URL } from "./Contsants";
import VideoBg from "./VideoBg";
import MovieDetails from "./MovieDetails";

const MovieCard = ({ posterPath,id }) => {

  const handleOnClick=()=>{
    return(
       <MovieDetails props={posterPath}/> 
    )
  }
  return (
    posterPath && (
      <div className=" pr-5 w-44">
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
          onClick={handleOnClick}
        />
      </div>
    )
  );
};

export default MovieCard;
