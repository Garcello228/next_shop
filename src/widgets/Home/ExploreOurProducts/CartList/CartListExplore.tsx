import { IProduct } from "@/state/services/api"
import CartItemExplore from "./CartItem/CartItemExplore"
import "./CartListExplore.scss"


interface ICartList{
    offset: number,
    btnName: boolean,
    ref: React.RefObject<HTMLUListElement | null>,
    product: IProduct[] | undefined
}


function CartListBest({offset, btnName, ref, product} : ICartList)
{
   
  return(
        <div className="ExploreOurProducts__cart">
            <div className="cart__content">
                <ul className={`cart__list ${btnName ? `AllProduct` : ``}`} style={{ transform: `translateX(${offset}px)`}} ref={ref}>
                    { product ? product.map(item => (
                      <CartItemExplore key={item.id} item={item}/>
                    )) : (
                        <h1>Loding...</h1>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default CartListBest


               
                               