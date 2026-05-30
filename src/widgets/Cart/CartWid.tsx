"use client"

import { useState, useEffect } from "react"
import CartMain from "./main/CartMain"
import { useGetCartQuery } from "@/state/services/api"
import "./CartWid.scss"


function CartWid()
{
  const { data: Cart, isLoading } = useGetCartQuery()
  const [CartItems, setCartItems] = useState(() => {
    const cart = Cart;
    return cart?.map(item => ({ ...item, quantity: 1 }));
  })

  useEffect(() => {
    if (Cart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCartItems(() => {
        const cart = Cart;
        return cart?.map(item => ({ ...item, quantity: 1 }));
      });
    }
  }, [Cart]);

  const length = CartItems?.length

  if (isLoading) return(
    <section className="container pading">
     <h1>Loading..</h1>
    </section>
  )
    
  return(
      <section className="Cart container pading">
        {length ?? 0 > 0 ? (
        <>
         <header className="Cart__header">
            <p ><span>Home /</span> Cart</p>
         </header>
         <CartMain CartItems={CartItems} setCartItems={setCartItems}/>
         
        </>
        ) : (
           <div className="Нету">Добавьте что нибудь в Корзину</div>
        )}
      </section>
  )
}

export default CartWid