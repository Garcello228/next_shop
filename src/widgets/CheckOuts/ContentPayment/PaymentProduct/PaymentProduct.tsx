import { Dispatch, SetStateAction } from "react";
import { IProductInCart } from "../../../../../next-auth";
import Image from "next/image";
import "./PaymentProduct.scss"


interface ICartItems {
  quantity: number;
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInCart;
}


interface IOrders {
  CartItems: ICartItems[];
  Discount: number;
  Total: number;
  Subtotal: number;
}



interface IPaymentProduct {
    order: IOrders | null
    discount: number,
    setPayment:  Dispatch<SetStateAction<IOrders | null>>;   
}

function PaymentProduct({order, discount, setPayment} : IPaymentProduct)
{
   
    const items = Array.isArray(order?.CartItems) ? order.CartItems : [];

    
    const subtotalValue = order?.Subtotal ?? 0;
    const isFreeShipping = subtotalValue > 1000;
    const shippingCost = isFreeShipping ? 0 : 100;
    let calculatedTotal = order?.Total ?? 0;
    
    

    if(discount === 0.9)
    {
        calculatedTotal = (subtotalValue * discount) + shippingCost;
  
        setPayment(prev => {


            if (!prev) return null;
            return {
              ...prev,
              Total: calculatedTotal

            };    
        });
    }

    
    
    
        
        

    
    
    return(
        <div className='payment__product'>
            <div className='product__info'>
                <ul className='info__list'>
                   {items.map((item, index) => {
                        const itemPrice = (item?.product.discountPrice || item?.product.Price || 0) * item.quantity;
                        return (
                            <li className='info__list-item' key={index}>
                                <div className='imgtitle'>
                                    <Image src={item.product.img} alt="" className={`${item.product.name === "AK-900 Wired Keyboard" ? `img-клава` : ``}`} width={54} height={54}/>
                                    <h3>{item.product.name}</h3>
                                </div>
                                <h3 className='item__price'>${itemPrice}</h3>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='product__price'>
                <ul className='price__list'>
                    <li className='price__list-item'>
                      <h3 className='item__title'>Subtotal:</h3>
                      <h3 className='item__price'>${subtotalValue}</h3>
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