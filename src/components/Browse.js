import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useLatestMovies from "../hooks/useLatestMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useLatestMovies();
  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
