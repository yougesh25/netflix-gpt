import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const data = await axios(
        POPULAR_MOVIES_URL,
        API_OPTIONS
      );
      console.log("data is :", data);
      dispatch(addPopularMovies(data.data.results));
    } catch (err) {
      console.error("erro in fetching api", err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getPopularMovies();
    return () => controller.abort();
  }, []);
};

export default usePopularMovies;
