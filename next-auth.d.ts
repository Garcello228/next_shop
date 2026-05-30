import { IProductColor } from "@/state/services/api";
import { DefaultSession } from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"


export interface IProductInWishlist {
  id: number;
  name: string;
  category: string;
  discountPrice?: number | null;
  Price?: number | null;
  grade: string;
  reviews: number;
  discount?: number | null;
  new?: string | null;
  img: string;
  description: string;
  color?: IProductColor
}
export interface IWishlistItem {
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInWishlist;
}

export interface IProductInCart {
  id: number;
  name: string;
  category: string;
  discountPrice?: number | null;
  Price?: number | null;
  grade: string;
  reviews: number;
  discount?: number | null;
  new?: string | null;
  img: string;
  description: string;
  color?: IProductColor
}
export interface ICartItem {
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInCart;
}



declare module "next-auth" {
  
  interface User{
    id: string;
    name: string;
    contact: string;
    email?: string | null;
    LastName?: string | null;
    Address?: string | null;
    Wishlist?: IWishlistItem[];
    Cart?: ICartItem[];
  }

  
  interface Session {
    user: {
      id: string;
      name: string;
      contact: string;
      email?: string | null;
      LastName?: string | null;
      Address?: string | null;
      Wishlist?: IWishlistItem[];
      Cart?: ICartItem[];
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    contact: string;
    email?: string | null;
    LastName?: string | null;
    Address?: string | null;
    Wishlist?: IWishlistItem[];
    Cart?: ICartItem[];
  }
}
