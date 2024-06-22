import { useDispatch } from "react-redux";
import { addSearchMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useSearchMovies = () => {
  const dispatch = useDispatch();

  const getSearchMovies = async () => {
    const data = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=7db17a0"
    );
    const json = await data.json();
    dispatch(addSearchMovies(json.results));
  };

  useEffect(() => {
    getSearchMovies();
  }, []);
};

export default useSearchMovies;
