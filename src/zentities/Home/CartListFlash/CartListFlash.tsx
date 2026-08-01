import { IProduct } from "@/state/services/api"
import CartItem from "./CartItem/CartItem"
import "./CartList.scss"

interface ICartList{
    offset: number,
    btnName: boolean,
    ref: React.RefObject<HTMLUListElement | null>,
    discount: IProduct[] | undefined
}

function CartListFlash({offset, btnName, ref, discount} : ICartList)
{

    return(
        <div className="FlashSales__cart">
            <div className="cart__content">
                <ul className={`cart__list ${btnName ? `AllProduct` : ``}`} style={{ transform: `translateX(${offset}px)`}} ref={ref}>
                    { discount ? discount.map(item => (
                      <CartItem key={item.id} item={item}/>
                    )) : (
                        <h1>Loding...</h1>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default CartListFlash
                                    
               
                               