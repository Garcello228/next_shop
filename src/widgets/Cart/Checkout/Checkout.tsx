import {  IProductInCart } from "../../../../next-auth"
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setFinalOrder } from '@/state/Slice/orderSlice';
import "./Checkout.scss"

interface ICartItems {
    quantity: number;
    id: number;
    createdAt: Date;
    userId: number;
    productId: number;
    product: IProductInCart;
}

interface ICheckout {
    Subtotalcheck : number,
    Discount: number,
    CartItems:  ICartItems[] | undefined,
}


function Checkout({Subtotalcheck, Discount, CartItems} : ICheckout)
{
    const Dis = Subtotalcheck * Discount
    const Shipping = Subtotalcheck > 1000
    const Total = Shipping ? Dis : Dis + 100

    const dispatch = useDispatch();
    const router = useRouter();


    function Buy()
    {

        if (!CartItems) {
          alert("Корзина пуста или еще загружается!");
          return;
        }


        const finalOrder = {
          CartItems: CartItems,
          Discount: Discount,
          Total: Total,
          Subtotal: Subtotalcheck
        };

        dispatch(setFinalOrder(finalOrder));
        router.push('/CheckOut');

    }
   
    return(
        <div className="Price__checkout">
            <h2 className="checkout__title">Cart Total</h2>
            <ul className="checkout__list">
                <li className="checkout__list-item">
                    <h2 className="title h2">Subtotal:</h2>
                    <h2 className="title__price h2">${Subtotalcheck}</h2>
                </li>
                <li className="checkout__list-item">
                    <h2 className="title h2">Shipping:</h2>
                    <h2 className="title__price h2">{Shipping ? `Free` : `$100`}</h2>
                </li>
                <li className="checkout__list-item">
                    <h2 className="title h2">Total:</h2>
                    <h2 className="title__price h2">${Total}</h2>
                </li>
            </ul>
            <button className="checkout__btn btn-red" onClick={Buy}>Procees to checkout</button>
        </div>
    )
}

export default Checkout