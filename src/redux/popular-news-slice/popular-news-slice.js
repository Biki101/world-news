import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularNews: [],
};

export const popularNewsSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    populatePopularNews: (state, action) => {
      state.popularNews = action.payload;
    },
  },
});

export const { populatePopularNews } = popularNewsSlice.actions;

export default popularNewsSlice.reducer;
