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
  modalOpen: false,
  selectedCharacterId: null,
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
    setModalOpen: (state, { payload }) => {
      state.modalOpen = payload;
    },
    setSelectedCharacterId: (state, { payload }) => {
      state.selectedCharacterId = payload;
    },
  },
});

export const {
  setCharacters,
  setPageCount,
  setFilter,
  setCurrentPage,
  setModalOpen,
  setSelectedCharacterId,
} = mainSlice.actions;
export default mainSlice.reducer;
