import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

const ColorBtnSlice = createSlice({
  name: "ColorBtn",
  initialState,
  reducers: {
    ColorToggle: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const  ColorBtnReducer = ColorBtnSlice.reducer;
export const { ColorToggle } = ColorBtnSlice.actions;
