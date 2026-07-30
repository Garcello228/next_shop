import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
 count: Cookies.get("Basket_count") ? Number(Cookies.get("Basket_count")) : 0,
};

const BasketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    AddBasket: (state) => {
      state.count++;
      Cookies.set("Basket_count", String(state.count), { expires: 7, path: "/" });
    },
    BasketNull: (state) => {
      state.count = 0;
      Cookies.set("Basket_count", "0", { expires: 7, path: "/" });
    },
  },
});

export const  BasketReducer = BasketSlice.reducer;
export const { AddBasket, BasketNull } = BasketSlice.actions;

