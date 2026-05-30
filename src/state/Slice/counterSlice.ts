import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  count: Cookies.get("wishlist_count") ? Number(Cookies.get("wishlist_count")) : 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    AddWishlist: (state) => {
      state.count++;
      Cookies.set("wishlist_count", String(state.count), { expires: 7, path: "/" });
    },
    WishlistNull: (state) => {
      state.count = 0;
      Cookies.set("wishlist_count", "0", { expires: 7, path: "/" });
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { AddWishlist, WishlistNull } =
counterSlice.actions;
