import React from "react";
import langConstants from "../utils/langConsts";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className=" pt-[30%] sm:pt-[20%] md:pt-[15%] flex justify-center">
      <form className="w-full sm:w-4/6  bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="col-span-9 p-4 m-4 rounded-lg bg-white"
          placeholder={langConstants[langKey].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {langConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
