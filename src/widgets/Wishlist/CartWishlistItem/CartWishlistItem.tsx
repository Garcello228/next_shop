import { IProductInWishlist, IWishlistItem } from "../../../../next-auth"
import { useGetCartQuery, useGetWishlistQuery } from "@/state/services/api"
import { useDispatch } from "react-redux";
import { AddBasket } from "@/state/Slice/BasketSlice";
import { Dispatch, SetStateAction } from "react";
import { useSession } from "next-auth/react";
import PostCart from "@/zshared/api/PostCart";
import Image from "next/image";
import Корзина from "./icon/корзина.svg"
import Помойка from "./icon/корзинаc.svg"
import DeleteWishlist from "../api/DeleteWishlist";

interface ICartWishlistItem {
    item : IProductInWishlist,
    setWishlistItems: Dispatch<SetStateAction<IWishlistItem[] | undefined>>,
    id : number,
    productId: number
}

function CartWishlistItem({item, setWishlistItems, id, productId} : ICartWishlistItem)
{
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const { refetch } = useGetWishlistQuery();
    const { refetch: refetchCart } = useGetCartQuery();
   
    async function RemoveWis()
    {
        const responce = await DeleteWishlist(productId)
        if (responce && responce.success) {
            setWishlistItems(prevItems => prevItems?.filter(itema => itema.id !== id));
            refetch();
        }
    }

    async function AddBaskett()
    {
       
        try
        { 
            const responce = await PostCart( session?.user.id,  item.id )
            if (responce && responce.item) {
                dispatch(AddBasket())
                refetchCart();
                alert("Вы добавили товар в Cart")
            }
        }
        catch(err) {

            if (err instanceof Error) {
              if (err.message === "Этот товар вы уже добавляли") {
                alert("Этот товар вы уже добавляли в Cart");
              } else {
                alert(err.message || "Произошла ошибка при добавлении");
              }
            }

       }
    }     


    return(
        <li className="prodyct__list-item" key={id}>
            <div className="image">
                <Image src={item.img} alt=""  className={`image__img ${item.name.includes("AK-900 Wired Keyboard") ? "клава" : ""}`} width={180} height={190} />
                <div className={item.discount ? `image__info` : `image__infonot`}>
                  <div className={item.discount ? `скидка` : `notскидка`}>-{item.discount}%</div>
                  <div className={item.new ? `NEW` : `notNEW`}>{item.new}</div>
                  <div className="btns">
                    <button className="btn" onClick={RemoveWis}>
                        <Корзина alt="" className="btn__img" />
                    </button>
                  </div>
                </div>
                <button className="image__карзина" onClick={AddBaskett}>
                    <div className="карзина__content">
                        <Помойка alt="" />
                        <p>Add To Cart</p>
                    </div>
                </button>
            </div>
            <div className="info">
                <h3 className="info__title">{item.name}</h3>
                <div className="info__pcice">
                    <p className="pcice__скидка">${item.discountPrice}</p>
                    <p className="pcice__пол">{item.Price && `$${item.Price}`}</p>
                </div>
            </div>
        </li>
    )
}

export default CartWishlistItem
