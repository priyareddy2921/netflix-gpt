import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl py-4 font-bold">{title}</h1>
      <div className="flex"></div>
      <div className="flex overflow-x-scroll space-x-4  p-4">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))
        ) : (
          <p>No Movies available</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
