import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggetions = () => {
  const gpt = useSelector((store) => store.GPT);
  console.log(gpt);

  if (
    !gpt ||
    !Array.isArray(gpt.movieResults) ||
    !Array.isArray(gpt.movieNames)
  ) {
    return null;
  }

  return (
    <div>
      <MovieList title="Search Results" movies={gpt.movieResults} />
    </div>
  );
};

export default GptMovieSuggetions;
