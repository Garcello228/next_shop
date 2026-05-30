import { useState } from "react";
import PaymentProduct from "./PaymentProduct";
import PaymentBank from "./PaymentBank";
import PaymentCoupon from "./PaymentCoupon/PaymentCoupon";
import { IProductInCart } from "../../../../next-auth";
import { Dispatch, SetStateAction } from 'react';
import "./ContentPayment.scss"


interface ICartItems {
  quantity: number;
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInCart;
}


export interface IOrders {
  CartItems: ICartItems[];
  Discount: number;
  Total: number;
  Subtotal: number;
}



interface IContentPayment {
    setPayment: Dispatch<SetStateAction<IOrders | null>>;
    isOpen: number,
    setisOpen: Dispatch<SetStateAction<number>>
    orders : IOrders | null
}

function ContentPayment({ setPayment, isOpen, setisOpen, orders } : IContentPayment)
{
   const [discount, setDiscount] = useState(1);

    return(
        <div className='content__payment'>
            <PaymentProduct order={orders} discount={discount} setPayment={setPayment}/>
            <PaymentBank isOpen={isOpen} setisOpen={setisOpen}/>
            <PaymentCoupon setDiscount={setDiscount} order={orders}/>
            <button className='payment__btn btn-red' type="submit" form="my-form">Place Order</button>
        </div>
    )
}

export default ContentPayment