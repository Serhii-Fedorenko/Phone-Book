import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  isEditModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleEditModal: (state) => {
      state.isEditModalOpen = !state.isEditModalOpen;
    },
  },
});

export const { toggleModal, toggleEditModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
