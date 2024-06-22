import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.movieResults = action.payload; 
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = GPTSlice.actions;
export default GPTSlice.reducer;
