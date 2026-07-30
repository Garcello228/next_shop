import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { IProductInCart } from "../../../next-auth";

interface ICartItems {
  quantity: number;
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInCart;
}

interface OrderState {
  currentOrder: {
    CartItems: ICartItems[]; 
    Discount: number;
    Total: number;
    Subtotal: number;
  } | null;
}

const initialState : OrderState = {
  currentOrder: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setFinalOrder: (state, action: PayloadAction<OrderState['currentOrder']>) => {
      state.currentOrder = action.payload;
    },
    clearOrder: (state) => {
      state.currentOrder = null;
    }
  },
});


export const OrderReducer = orderSlice.reducer;
export const { setFinalOrder, clearOrder } =
orderSlice.actions;
