import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieNews: [],
  sportsNews: [],
};

export const homeNewsSlice = createSlice({
  name: "homeNews",
  initialState,
  reducers: {
    populateMovieArticle: (state, action) => {
      state.movieNews = action.payload;
    },
    populateSportsArticle: (state, action) => {
      state.sportsNews = action.payload;
    },
  },
});

export const { populateMovieArticle, populateSportsArticle } =
  homeNewsSlice.actions;

export default homeNewsSlice.reducer;
