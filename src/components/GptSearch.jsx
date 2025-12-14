import React from "react";
import GptSearchBar from "./GptSearchBar";
import background from "../assets/background_2.png";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className="w-screen h-screen bg-cover bg-center bg-no-repeat brightness-80"
          src={background}
          alt="logo"
        ></img>
      </div>
      <GptSearchBar />
    </>
  );
};

export default GptSearch;
