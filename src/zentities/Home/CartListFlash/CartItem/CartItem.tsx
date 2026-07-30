"use client"

import Link from "next/link"
import Image from "next/image"
import { useGetCartQuery } from "@/state/services/api"
import { useGetWishlistQuery } from "@/state/services/api"
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { IProduct } from "@/state/services/api"
import {  AddWishlist } from "@/state/Slice/counterSlice";
import { AddBasket } from "@/state/Slice/BasketSlice";
import PostCart from "@/zshared/api/PostCart";
import PostWishlist from "./api/PostWishlist"
import Info from "./cart/info.svg"
import Wis from "./cart/wis.svg"
import Grade from "../../Grade";
import "./CartItem.scss"


function CartItem({ item } : { item : IProduct})
{
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const { refetch: refetchCart } = useGetCartQuery();
    const { refetch: refetchWishlist } = useGetWishlistQuery();


    async function Wishlist()
    {
        try
        { 
            if(session)
            {
               await PostWishlist( session.user.id,  item.id )
               refetchWishlist();
               dispatch(AddWishlist())
               alert("Вы добавили товар в Wishlist")
           } 
           else
           {
              alert("Чтоб добвлять товары в Wishlist надо быть зарегистрированным ")
           }
        }
        catch(err) {

            if (err instanceof Error) {
              if (err.message === "Этот товар вы уже добавляли") {
                alert("Этот товар вы уже добавляли в Wishlist");
              } else {
                alert(err.message || "Произошла ошибка при добавлении");
              }
           }

       }
   }
          
           
    async function AddBaskett()
    {
       
        try
        { 
            if(session)
            {
               await PostCart( session.user.id,  item.id )
               refetchCart();
               dispatch(AddBasket())
               alert("Вы добавили товар в Cart")
            } 
            else
            {
               alert("Чтоб добвлять товары в Cart надо быть зарегистрированным ")
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
        <li key={item.id} className="cart__list-item">
            <div className="image">
                <Image src={item.img} alt=""  className={`image__img ${item.name.includes("AK-900 Wired Keyboard") ? "клава" : ""}`} width={190} height={180}/>
                <div className={item.discount ? `image__info` : `image__infonot`}>
                 <div className={item.discount ? `скидка` : `notскидка`}>-{item.discount}%</div>
                 <div className={item.new ? `NEW` : `notNEW`}>{item.new}</div>
                 <div className="btns">
                    <button className={`btn`} onClick={Wishlist} >
                        <Wis alt="" className={`btn__img`} />
                    </button>
                    <Link href={`/product/${item.id}`} className="btn">
                        <Info alt="" className="btn__img"/>
                    </Link>
                 </div>
                </div>
                <button className="image__карзина" onClick={AddBaskett}>Add To Cart</button>
            </div>
            <div className="info">
                <h3 className="info__title">{item.name}</h3>
                <div className="info__pcice">
                    <p className="pcice__скидка">${item.discountPrice}</p>
                    <p className="pcice__пол">${item.Price}</p>
                </div>
                <div className="info__grade">
                    <Grade grade={item.grade}/>
                    <div className="reviews">
                        <p>({item.reviews})</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem
           
                
                
