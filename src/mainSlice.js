import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  pageCount: 0,
  nextPageUrl: "",
  prevPageUrl: "",
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
    setCharactersAndPages: (state, { payload }) => {
      state.characters = payload.characters;
      state.nextPageUrl = payload.next;
      state.prevPageUrl = payload.prev;
    },
    setPageCount: (state, { payload }) => {
      state.pageCount = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter[payload.name] = payload.value;
    },
  },
});

export const { setCharactersAndPages, setPageCount, setFilter } =
  mainSlice.actions;
export default mainSlice.reducer;
