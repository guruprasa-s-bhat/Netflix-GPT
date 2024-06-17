import { API_OPTIONS } from "../components/Contsants";
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useLatestMovies = () => {
  const dispatch = useDispatch();

  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addLatestMovies(json.results));
  };

  useEffect(() => {
    getLatestMovies();
  }, []);
};

export default useLatestMovies;
