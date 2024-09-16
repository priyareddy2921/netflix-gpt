import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            title={movieName}
            key={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;