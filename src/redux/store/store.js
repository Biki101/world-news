import { configureStore } from "@reduxjs/toolkit";
import popPopularPost from "../reducers/popPopularPost";
import globalNewsSlice from "../global-news-slice/global-news-slice";
import popularNewsSlice from "../popular-news-slice/popular-news-slice";
import categoriesSlice from "../categories-page-slice/categories-slice";

const store = configureStore(
  {
    reducer: {
      popularPost: popPopularPost,
      globalPost: globalNewsSlice,
      popularNews: popularNewsSlice,
      categoryNews: categoriesSlice,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
