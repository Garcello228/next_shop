import {  IProductInCart } from "../../../../next-auth"
import { useGetCartQuery } from "@/state/services/api"
import DeleteCart from "../api/DeleteCart";
import Image from "next/image";
import Верх from "./icone/верх.svg"
import Вниз from "./icone/вниз.svg"
import Удалить from "./icone/Vector.svg"
import "./CartItem.scss"

interface Iitem {
    quantity: number;
    id: number;
    createdAt: Date;
    userId: number;
    productId: number;
    product: IProductInCart;
}


interface ICartItemm {
    item: Iitem,
    setCartItems: React.Dispatch<React.SetStateAction<Iitem[]| undefined>>;
    updateQuantity: (id : number, delta : number) => void;
}

function CartItem({item, setCartItems, updateQuantity} : ICartItemm)
{

    const qty = item.quantity || 1;
    const price = item.product.discountPrice || item.product.Price;
    const subtotal = (price || 0) * qty;

    const Add = () => updateQuantity(item.id, 1);
    const Minus = () => updateQuantity(item.id, -1);

    const { refetch } = useGetCartQuery();

    async function RemoveCart()
    {
        const responce = await DeleteCart(item.productId)
        if (responce && responce.success) {
            setCartItems(prev => prev?.filter(i => i.id !== item.id));
            refetch();
        }
    }


    return(
        <li className="container__list-item">
            <div className="imgtitle">
                <Image className={`img ${item.product.name === `AK-900 Wired Keyboard` ? `img-к` : ``}`} src={item.product.img} alt="" width={180} height={190}/>
                <button className="Remove" onClick={RemoveCart}>
                    <Удалить alt="" />
                </button>
                <h2 className="title h2">{item.product.name}</h2>
            </div>
            <h2 className="Price h2">${item.product.discountPrice ? item.product.discountPrice : item.product.Price}</h2>
            <div className="Quantity">
                <h2 className="Quantity__count h2">{qty < 10 ? `0${qty}` : qty}</h2>
                <div className="Quantity__btns">
                    <button className="btns__btn" onClick={Add}>
                        <Верх alt="" />
                    </button>
                    <button  className="btns__btn" onClick={Minus}>
                        <Вниз alt="" />
                    </button>
                </div>
            </div>
            <h2 className="Subtotal h2">${subtotal}</h2>
        </li>
    )
}

export default CartItem