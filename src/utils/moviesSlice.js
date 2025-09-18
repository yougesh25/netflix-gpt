import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowplayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state,action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state,action)=> {
      state.trailerVideo = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
