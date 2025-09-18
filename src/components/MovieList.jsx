import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log("movies path is :", movies);
  return (
    <div className="px-6 text-white bg-[rgba(0,0,0,0)]">
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="m-2 flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} photoPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
