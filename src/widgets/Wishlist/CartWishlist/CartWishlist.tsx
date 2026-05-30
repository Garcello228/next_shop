import { IWishlistItem } from "../../../../next-auth"
import { Dispatch, SetStateAction } from 'react';
import "./CartWishlist.scss"
import CartWishlistItem from "../CartWishlistItem/CartWishlistItem";

interface ICartWishlist {
    wishlistItems: IWishlistItem[] | undefined,
    setWishlistItems: Dispatch<SetStateAction<IWishlistItem[] | undefined>>,
    Wisall: boolean
}

function CartWishlist({wishlistItems, setWishlistItems, Wisall } : ICartWishlist)
{

    return(
        <div className={` ${Wisall ? `prodyct__content-grid` : `prodyct__content`}`}>
         <ul className={`prodyct__list`} >
            {wishlistItems?.map(item => (
                <CartWishlistItem key={item.id} id={item.id} item={item.product} setWishlistItems={setWishlistItems} productId={item.productId}/>
            ))}
         </ul>
        </div>
    )
}

export default CartWishlist
    
    