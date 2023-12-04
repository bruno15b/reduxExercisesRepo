import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    abrir: () => true,
    fechar: () => false,
  },
});

export const { abrir, fechar } = modal.actions;
export default modal.reducer;
