import React from "react";
import Header from "./Header";
import Theme from "./Theme";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import usePopularMovies from "..//hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  console.log("Rendering...");
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useGetNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="relative">
      <Header />
      {/*
        -MainContainer
          -VideoBackground
          -VideoTitle
        -SecondaryContainer
          -MovieList * n
            -cards * n
         */}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*<Theme /> */}
    </div>
  );
};

export default Browse;
