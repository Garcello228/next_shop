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

interface cleanOrderToSend {
    Name: string;
    Company?: string | undefined;
    Address: string;
    Optional?: string | undefined;
    City: string;
    Phone: string;
    Email: string;
    CartItems: ICartItems[];
    Total: number;
}

interface OrderState {
  currentOrder: cleanOrderToSend | null;
}

const initialState : OrderState = {
  currentOrder: null,
};

const orderToSendSlice = createSlice({
  name: 'orderToSend',
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


export const orderToSendReducer =  orderToSendSlice.reducer;
export const { setFinalOrder, clearOrder } =
orderToSendSlice.actions;