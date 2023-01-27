import { configureStore } from "@reduxjs/toolkit";
import popPopularPost from "../reducers/popPopularPost";

const store = configureStore(
  {
    reducer: {
      popPopularPost,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
