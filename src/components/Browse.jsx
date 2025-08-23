import React from "react";
import Header from "./Header";
import Theme from "./Theme";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  console.log("Rendering...");
  useGetNowPlayingMovies();
  return (
    <>
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
    </>
  );
};

export default Browse;
