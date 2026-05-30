import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterSlice";
import { BasketReducer } from "./Slice/BasketSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ColorBtnReducer } from "./Slice/ColorBtnSlice";
import { OrderReducer } from "./Slice/orderSlice";
import { OrderOneReducer } from "./Slice/orderOneSlice";
import { orderToSendReducer } from "./Slice/orderToSend";
import { OrderOneTotalReducer } from "./Slice/orderOneTotalSlice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    Wishlistcount: counterReducer,
    Basketcount: BasketReducer,
    ColorBtn: ColorBtnReducer,
    Orders: OrderReducer,
    Order: OrderOneReducer,
    OrderToSend: orderToSendReducer,
    OrderTotal: OrderOneTotalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;


