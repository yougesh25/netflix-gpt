import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      console.log("data is :", data);
      dispatch(addNowPlayingMovies(data.data.results));
    } catch (err) {
      console.error("erro in fetching api", err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getNowPlayingMovies();
    return () => controller.abort();
  }, []);
};

export default useGetNowPlayingMovies;
