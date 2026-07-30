'use client'

import { useSelector, useDispatch } from "react-redux";
import {  WishlistNull } from "@/state/Slice/counterSlice";
import { RootState } from "@/state/store";
import Link from "next/link"
//import Image from "next/image";
import Сердце from './icone/Wishlist.svg';
import "./WishlistNaw.scss"



function WishlistNaw()
{
    const Wishlistcount = useSelector((state: RootState) => state.Wishlistcount.count);
    const dispatch = useDispatch();

    function OpenWishlist()
    {
      dispatch( WishlistNull());
    }  
   
    return(
        <Link href={'/Wishlist'} onClick={OpenWishlist} className={`icone__Wishlist`}>
            <span className="tooltip">Wishlist</span>
            <div className={`Wishlist__count ${Wishlistcount > 0 ? `Wishlist__count-true` : ``}`}>{Wishlistcount}</div>
            <Сердце alt="роо" />
        </Link>
    )
}

export default WishlistNaw