import { useState } from "react"
import {  IProductInCart } from "../../../../next-auth"
import PaymentCoupon from "../PaymentCoupon";
import Link from "next/link"
import CartList from "../CartList/CartList";
import Checkout from "../Checkout";
import "./CartMain.scss"

interface ICartItems {
    quantity: number;
    id: number;
    createdAt: Date;
    userId: number;
    productId: number;
    product: IProductInCart;
}

interface ICartMain{
    CartItems:  ICartItems[] | undefined,
    setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]| undefined>>;
}

function CartMain({CartItems, setCartItems} : ICartMain)
{
    
    const [Subtotalcheck, setSubtotalcheck] = useState(0)
    const [Discount, setDiscount] = useState(1)
    

    return(

        <main className="Cart__main">
            <div className="main__Basket">
                <div className="Basket__list">
                    <div className="list__title">
                      <h2 className="title__1 h2">Product</h2>
                      <h2 className="title__2 h2">Price</h2>
                      <h2 className="title__3 h2">Quantity</h2>
                      <h2 className="title__4 h2">Subtotal</h2>
                    </div>
                    <div className={`list__container`}>
                      <CartList CartItems={CartItems} setCartItems={setCartItems} setSubtotalcheck={setSubtotalcheck}/>
                    </div>
                </div>
                <div className="Basket__btns">
                   <Link href={"/"} className="btns__btn">Return To Shop</Link>
                   <button className="btns__btn">Update Cart</button>
                </div>
            </div>
            <div className="main__Price">
                <PaymentCoupon setDiscount={setDiscount}/>
                <Checkout Subtotalcheck={Subtotalcheck} Discount={Discount} CartItems={CartItems}/>
            </div>
        </main>
    )
       
    
}

export default CartMain

