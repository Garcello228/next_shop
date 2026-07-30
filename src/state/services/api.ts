import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWishlistItem, ICartItem } from "../../../next-auth";

export interface IProductColor {
  id: number;
  one: string;
  two: string;
  productId: number;
}

export interface IProduct {
  id: number;
  createdAt: string; 
  name: string;
  category: string;
  discountPrice?: number;
  Price?: number; 
  grade: string;
  reviews: number;
  discount?: number;
  new?: string,
  img: string;
  description: string;
  color?: IProductColor;
}


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "products",
    }),

    getProductsById: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),

    getWishlist: builder.query<IWishlistItem[], void>({
      query: () => "getwishlist",
    }),

    getCart: builder.query<ICartItem[], void>({
      query: () => "getcart",
    }),

    
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetWishlistQuery,
  useGetCartQuery
} = api;
