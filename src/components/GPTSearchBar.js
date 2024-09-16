import { useDispatch } from "react-redux";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";

import React, { useRef } from "react";
import { addGPTMovieResults } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the given example result given ahead. example result: Gadar,sholay,RRR,Bahubali,Hi nanna";
    //   const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: "user", content: gptQuery }],
    //     model: "gpt-3.5-turbo",
    //   });
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: gptQuery,
                },
              ],
            },
          ],
        }),
      }
    );
    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text.split(",");
    const promiseArray = text.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGPTMovieResults({ movieNames: text, movieResults: tmdbResults })
    );
  };
  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-1/2 bg-black grid grid-cols-12 "
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder="what would you like to watch today?"
          ></input>
          <button
            onClick={handleGPTSearch}
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
