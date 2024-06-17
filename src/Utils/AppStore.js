import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserSlice";
import MoviesReducer from "./MoviesSlice";

const AppStore = configureStore({
  reducer: {
    user: useReducer,
    movies: MoviesReducer,
  },
});

export default AppStore;
