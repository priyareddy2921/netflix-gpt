import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import GPTReducer from "./GPTSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GPTReducer,
  },
});

export default appStore;
