import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalNews: [],
};

export const globalNewsSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    populateGlobalArticle: (state, action) => {
      state.globalNews = action.payload;
      // console.log(state.globalNews);
    },
  },
});

export const { populateGlobalArticle } = globalNewsSlice.actions;

export default globalNewsSlice.reducer;
