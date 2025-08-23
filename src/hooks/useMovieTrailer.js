import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  const getMovieBackground = async () => {
    const data = await axios(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const filteredVideo = data.data.results.filter(
      (x) => x.type === "Trailer" && x.name === "Official Trailer"
    );
    const trailer = filteredVideo ? filteredVideo[0] : data.data.results[0];
    console.log("trailer video is :", trailer);
    dispatch(addTrailerVideo(trailer))
  };
  useEffect(() => {
    const controller = new AbortController();

    getMovieBackground();
    return () => controller.abort;
  }, []);
}

export default useMovieTrailer;