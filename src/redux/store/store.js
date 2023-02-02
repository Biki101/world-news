import { configureStore } from "@reduxjs/toolkit";
import popPopularPost from "../reducers/popPopularPost";
import globalNewsSlice from "../global-news-slice/global-news-slice";

const store = configureStore(
  {
    reducer: {
      popularPost: popPopularPost,
      globalPost: globalNewsSlice,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
