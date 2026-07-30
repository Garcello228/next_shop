"use client"

import { Dispatch, SetStateAction } from 'react';
import { useEffect } from "react"
import {  IProductInCart } from "../../../../next-auth"
import CartItem from '../CartItem/CartItem';
import "./CartList.scss"


interface ICartItems {
    quantity: number;
    id: number;
    createdAt: Date;
    userId: number;
    productId: number;
    product: IProductInCart;
}

interface ICartList {
    CartItems:  ICartItems[] | undefined,
    setSubtotalcheck: Dispatch<SetStateAction<number>>,
    setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]| undefined>>;
}


function CartList({CartItems, setSubtotalcheck, setCartItems} : ICartList)
{

    const updateQuantity = (id : number, delta : number) => {
        setCartItems(prev => prev?.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, (item.quantity || 1) + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    
    const total = CartItems?.reduce((sum, item) => {
        const price = item.product.discountPrice || item.product.Price;
        const qty = item.quantity || 1; 
        return sum + (Number(price) * qty);
    }, 0);

    useEffect(() => {
        setSubtotalcheck(total ?? 0);
    }, [total, setSubtotalcheck]);
   
   
   
   return(
    <ul className="container__list">
        {CartItems?.map(item => (
            <CartItem key={item.id} item={item} setCartItems={setCartItems} updateQuantity={updateQuantity}/>
        ))}
    </ul>
   )
   
}

export default CartList