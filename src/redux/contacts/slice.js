import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
});

export const contactsReducer = contactsSlice.reducer;
