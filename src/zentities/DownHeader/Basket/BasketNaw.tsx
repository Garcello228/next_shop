'use client'

import { useSelector, useDispatch } from "react-redux";
import {  BasketNull } from "@/state/Slice/BasketSlice";
import { RootState } from "@/state/store";
import Link from "next/link"
//import Image from "next/image";
import Корзина from './icone/Cart1 with buy.svg';
import "./BasketNaw.scss"



function BasketNaw()
{
    const Basketcount = useSelector((state: RootState) => state.Basketcount.count);
    const dispatch = useDispatch();

    function OpenBasket()
    {
      dispatch(BasketNull());
    }  
   
    return(
        <Link href={'/Cart'} onClick={OpenBasket} className={`icone__Cart`}>
            <span className="Cart__tooltip">Cart</span>
            <div className={`Cart__count ${Basketcount > 0 ? `Cart__count-true` : ``}`}>{Basketcount}</div>
            <Корзина alt="" />
        </Link>
    )
}

export default BasketNaw