import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface finalOrder {
  color: string;
  size: string;
  quantity: number;
  productId: number;
  img: string;
  title: string;
  discountPrice: number | undefined;
  Price: number | undefined;
}

interface IcurrentOrder {
  currentOrder: finalOrder | null
}

const initialState : IcurrentOrder = {
  currentOrder: null,
};

const orderOneSlice = createSlice({
  name: 'orderOne',
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


export const OrderOneReducer = orderOneSlice.reducer;
export const { setFinalOrder, clearOrder } =
orderOneSlice.actions;
