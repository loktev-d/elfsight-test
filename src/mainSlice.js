import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  pageCount: 0,
  currentPage: 0,
  filter: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  },
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setCharacters: (state, { payload }) => {
      state.characters = payload;
    },
    setPageCount: (state, { payload }) => {
      state.pageCount = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter[payload.name] = payload.value;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { setCharacters, setPageCount, setFilter, setCurrentPage } =
  mainSlice.actions;
export default mainSlice.reducer;
