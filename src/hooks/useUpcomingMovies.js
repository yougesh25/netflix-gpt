import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const data = await axios(
        UPCOMING_MOVIES_URL,
        API_OPTIONS
      );
      console.log("data is :", data);
      dispatch(addUpcomingMovies(data.data.results));
    } catch (err) {
      console.error("erro in fetching api", err);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getUpcomingMovies();
    return () => controller.abort();
  }, []);
};

export default useUpcomingMovies;
