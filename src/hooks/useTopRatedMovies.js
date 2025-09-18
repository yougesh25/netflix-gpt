import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const data = await axios(
        TOP_RATED_MOVIES_URL,
        API_OPTIONS
      );
      console.log("data is :", data);
      dispatch(addTopRatedMovies(data.data.results));
    } catch (err) {
      console.error("erro in fetching api", err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getTopRatedMovies();
    return () => controller.abort();
  }, []);
};

export default useTopRatedMovies;
