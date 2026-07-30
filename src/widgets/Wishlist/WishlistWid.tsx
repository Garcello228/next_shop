"use client"

import { useState, useEffect } from "react"
import { useGetWishlistQuery } from "@/state/services/api"
import CartWishlist from "./CartWishlist"
import "./WishlistWid.scss"
import ForYou from "./ForYou"
import { IWishlistItem } from "../../../next-auth"




function WishlistWid()
{
    const { data: Wishlist, isLoading } = useGetWishlistQuery()
    const [wishlistItems, setWishlistItems] = useState<IWishlistItem[]| undefined>([])
    
    useEffect(() => {
        if (Wishlist) {
             // eslint-disable-next-line react-hooks/set-state-in-effect
            setWishlistItems(Wishlist);
        }
    }, [Wishlist]);

    const length = wishlistItems?.length

    const [Wisall, setWisall] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
    
        try {
            const savedData = localStorage.getItem("Wisall");
            const parsed = savedData ? JSON.parse(savedData) : false;
            return (length ?? 0) < 5 ? false : parsed;
        } catch (e) {
            console.error("Ошибка парсинга localStorage", e);
            return false;
        }

    });

    useEffect(() => {
        localStorage.setItem('Wisall', JSON.stringify(Wisall));
    },[Wisall]);
  
  
    function WisAll()
    {
      setWisall(!Wisall)
    }

   if (isLoading) return(
     <section className="container pading">
        <h1>Loading..</h1>
     </section>
   )

    return(
        <section className="Wishlist container pading">
            {length ?? 0 > 0 ? (
             <div className="Wishlist__content">
              <div className="content__wis">
                <header className="wis__header">
                  <h1 className="header__length">Wishlist({length})</h1>
                  <button className="header__btn" onClick={WisAll} disabled={(length ?? 0) < 5}>{(length ?? 0) < 5 ? "Move All To Bag" : (Wisall ? "Back" : "Move All To Bag")}</button>
                </header>
                <div className="wis__prodyct">
                    <CartWishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} Wisall={(length ?? 0) < 5 ? false : Wisall}/>
                </div>
              </div>
              <ForYou />
             </div>
            ) : (
               <div className="Нету">Добавьте что нибудь в Wishlist</div>
            )}
        </section>
    )
}

export default WishlistWid

