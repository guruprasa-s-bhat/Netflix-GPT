import React, { useRef, useState } from "react";
import lang from "../components/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./Contsants";
import { addGptMovieResult } from "../Utils/GPTSlice";
import SearchMovieCard from "./SearchMovieCard";
import "./SearchMovie.css";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const [searchResult, setSearchResult] = useState(null);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptSearchClick = async (event) => {
    event.preventDefault();
    const query = searchText.current.value.trim();
    if (!query) return;

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        query +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const tmdbResult = json.results.filter((movie) => movie.poster_path); // Filter movies without posters
    setSearchResult(tmdbResult);
    dispatch(addGptMovieResult(tmdbResult));
    searchText.current.value = "";
  };

  return (
    <>
      <div className="pt-[15%] w-1/2 flex justify-center">
        <form className="bg-black" onSubmit={handleGptSearchClick}>
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 w-[500px]"
            placeholder={lang[langkey].gptSearchPlaceHolder}
          />
          <button
            type="submit"
            className="py-2 px-4 bg-red-700 text-white rounded-xl w-[130px] m-3"
          >
            {lang[langkey].search}
          </button>
        </form>
      </div>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 ">
        {searchResult ? (
          <div className="movie-list">
            {searchResult.map((movie) => (
              <SearchMovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.original_title}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-white text-3xl">No result found</h1>
        )}
      </div>
    </>
  );
};

export default GptSearchBar;
