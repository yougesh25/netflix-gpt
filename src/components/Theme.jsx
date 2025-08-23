import findNthPrime from "../utils/findNthPrime";
import React, { useMemo, useState } from "react";

const Theme = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "border border-black w-50 h-50 absolute mt-40 ml-200 m justify-between" +
        (isDarkTheme && " bg-gray-700 border-red-500 text-white")
      }
    >
      <button
        className="bg-amber-300"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Theme
      </button>
      <input
        name="prime"
        type="number"
        className="border border-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <div>
        <h1 className="mt-5">nth Prime is:{prime}</h1>
      </div>
    </div>
  );
};

export default Theme;
