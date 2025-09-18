import React from "react";
import Header from "./Header";
import Theme from "./Theme";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import usePopularMovies from "..//hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  console.log("Rendering...");
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
         <MainContainer />
         <SecondaryContainer />
        {/*<Theme /> */}
    </div>
  );
};

export default Browse;
