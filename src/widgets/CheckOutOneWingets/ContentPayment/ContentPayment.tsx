import { useState } from "react";
import PaymentProduct from "./PaymentProduct";
import PaymentBank from "./PaymentBank";
import PaymentCoupon from "./PaymentCoupon/PaymentCoupon";
import { Dispatch, SetStateAction } from 'react';
import "./ContentPayment.scss"

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

interface finalOrderTotal {
  order: finalOrder | null; 
  Total: number;
}



interface IContentPayment {
    setPayment: Dispatch<SetStateAction<finalOrderTotal>>;
    isOpen: number,
    setisOpen: Dispatch<SetStateAction<number>>
    orders : finalOrder | null
}

function ContentPayment({ setPayment, isOpen, setisOpen, orders } : IContentPayment)
{
   const [discount, setDiscount] = useState(1);
   

    return(
        <div className='content__payment'>
            <PaymentProduct order={orders} discount={discount} setPayment={setPayment}/>
            <PaymentBank isOpen={isOpen} setisOpen={setisOpen}/>
            <PaymentCoupon setDiscount={setDiscount}/>
            <button className='payment__btn btn-red' type="submit" form="my-form">Place Order</button>
        </div>
    )
}

export default ContentPayment