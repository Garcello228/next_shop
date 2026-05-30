import { Dispatch, SetStateAction } from "react";
import { useEffect } from 'react';
import Image from "next/image";
import "./PaymentProduct.scss"


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


interface IPaymentProduct {
    order: finalOrder | null
    discount: number,
    setPayment:  Dispatch<SetStateAction<finalOrderTotal>>;
}

function PaymentProduct({order, discount, setPayment} : IPaymentProduct)
{
   
    const itemPrice = order?.discountPrice ||order?.Price || 0
    
    const isFreeShipping = itemPrice > 1000;
    const shippingCost = isFreeShipping ? 0 : 100;
    const calculatedTotal = (itemPrice * discount) + shippingCost;
    

    useEffect(() => {
      setPayment(prev => {

        return {
            ...prev,
            Total: calculatedTotal

        };    
      });
    }, [calculatedTotal, setPayment]);
    

    
    
    
        
        

    
    
    return(
        <div className='payment__product'>
            <div className='product__info'>
                <ul className='info__list'>
                   
                        
                    <li className='info__list-item'>
                        <div className='imgtitle'>
                            <Image src={order?.img ?? "Ничерта"} alt="" className={`${order?.title === "AK-900 Wired Keyboard" ? `img-клава` : ``}`} width={54} height={54}/>
                            <h3>{order?.title}</h3>
                        </div>
                        <h3 className='item__price'>${itemPrice}</h3>
                    </li>
    
                </ul>
            </div>
            <div className='product__price'>
                <ul className='price__list'>
                    <li className='price__list-item'>
                      <h3 className='item__title'>Subtotal:</h3>
                      <h3 className='item__price'>${itemPrice}</h3>
                    </li>
                    <li className='price__list-item'>
                      <h3 className='item__title'>Shipping:</h3>
                      <h3 className='item__price'>{ isFreeShipping ? "Free" : "$100"}</h3>
                    </li>
                    <li className='price__list-item'>
                      <h3 className='item__title'>Total:</h3>
                      <h3 className='item__price'>${calculatedTotal}</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PaymentProduct