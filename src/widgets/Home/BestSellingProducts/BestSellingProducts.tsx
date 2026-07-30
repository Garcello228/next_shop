"use client"

import { useEffect, useState } from "react";
import CartListBest from "./CartList"
import TitleHome from "@/zshared/Home/HeaderHome"
import "./BestSellingProducts.scss"



function BestSellingProducts()
{
    const [btnAll, setbtnAll] = useState<boolean>(() => {
       
        if (typeof window !== "undefined") {
            try {
                const savedData = localStorage.getItem("btnAll");
                return savedData ? JSON.parse(savedData) : false;
            } catch (e) {
                console.error("Ошибка парсинга localStorage", e);
                return false;
            }
        }
        return false;
    
    });

    function All()
    {
        setbtnAll(!btnAll)
    }
        
        
    useEffect(() => {
        localStorage.setItem('btnAll', JSON.stringify(btnAll));
    }, [btnAll]);
  
   
    return(
        <section className="BestSellingProducts">
            <div className="BestSellingProducts__content">
             <header className="content__header">
                <TitleHome подзаголовок="This Month" title="Best Selling Products"/>
                <button className="header__btn btn-red" onClick={All}>{btnAll ? "Back" : "View All"}</button>
             </header>
             <CartListBest btnAll={btnAll}/>
            </div>
        </section>
    )
}

export default BestSellingProducts


                
                
               
                