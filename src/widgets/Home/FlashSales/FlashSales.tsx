"use client"

import {  useState, useEffect, useRef  } from "react";
import { useGetProductsQuery } from "@/state/services/api"
import FlashSalesName from "./FlashSalesName/FlashSalesName";
import FlippingFlash from "./flipping/flippingFlash";
import CartListFlash from "@/zentities/Home/CartListFlash";
import "./FlashSales.scss"



function FlashSales()
{
    const { data: product} = useGetProductsQuery();
    const discount = product?.filter(item => item.discount)
    
    const [offset, setOffset] = useState(0);

    const ListRef = useRef<HTMLUListElement>(null)

    const [btnName, setbtnName] = useState<boolean>(() => {
       
        if (typeof window === "undefined") return false;
    
      
        const savedData = localStorage.getItem("btnName");
        return savedData ? JSON.parse(savedData) : false;
    
    });
        

    function All()
    {
        setbtnName(prev => !prev)

        setTimeout(() => {
            if (ListRef.current) {
              ListRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
           }
        }, 100);
    }

    useEffect(() => {
  
       localStorage.setItem('btnName', JSON.stringify(btnName));
    }, [btnName]);
  
      
    return(
        <section className="FlashSales sectionHome">
            <div className="FlashSales__content">
             <header className="FlashSales__header">
                <FlashSalesName />
                <FlippingFlash offset={offset} setOffset={setOffset} btnName={btnName} discount={discount} />
             </header>
             <CartListFlash offset={offset} btnName={btnName} ref={ListRef} discount={discount}/>
             <button className={`btn-red ${btnName ? `cart__btn-open` : `cart__btn`}`} onClick={All}>{btnName ? "back" : "View All Products"}</button>
            </div>
        </section>
    )
}

export default FlashSales