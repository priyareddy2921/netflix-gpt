import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="w-screen m-3 bg-black text-white -mt-52 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
