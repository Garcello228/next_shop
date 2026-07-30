import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface finalOrders {
  color: string;
  size: string;
  quantity: number;
  productId: number;
  img: string;
  title: string;
  discountPrice: number | undefined;
  Price: number | undefined;
}

interface finalOrder {
    Name: string;
    Company?: string | undefined;
    Address: string;
    Optional?: string | undefined;
    City: string;
    Phone: string;
    Email: string;
    order: finalOrders | null;
    Total: number;
}

interface IcurrentOrder {
  currentOrder: finalOrder | null
}

const initialState : IcurrentOrder = {
  currentOrder: null,
};

const orderOneTotalSlice = createSlice({
  name: 'orderOneTotal',
  initialState,
  reducers: {
    setFinalOrder: (state, action: PayloadAction<IcurrentOrder['currentOrder']>) => {
      state.currentOrder = action.payload;
    },
    clearOrder: (state) => {
      state.currentOrder = null;
    }
  },
});


export const OrderOneTotalReducer = orderOneTotalSlice.reducer;
export const { setFinalOrder, clearOrder } =
orderOneTotalSlice.actions;
