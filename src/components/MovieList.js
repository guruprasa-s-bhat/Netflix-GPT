import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 
  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-2 px-6 text-bold text-white pb-2">{title}</h1>
      <div className="flex overflow-x-scroll p-4 ">
        <div className="flex">
          {movies?.map((movie) => (

            <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
