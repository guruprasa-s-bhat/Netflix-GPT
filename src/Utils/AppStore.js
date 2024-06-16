import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserSlice";

const AppStore = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default AppStore;
