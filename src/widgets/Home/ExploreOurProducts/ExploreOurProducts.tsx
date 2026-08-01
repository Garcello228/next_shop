import { useState, useRef, useEffect } from "react";
import { useGetProductsQuery } from "@/state/services/api";
import TitleHome from "@/zshared/Home/HeaderHome"
import CartListExplore from "./CartList/CartListExplore";
import FlippingExplore from "./flipping/FlippingExplore";
import "./ExploreOurProducts.scss"



function ExploreOurProducts()
{
    const { data: product} = useGetProductsQuery();
    const [offset, setOffset] = useState(0);

    const ListRef = useRef<HTMLUListElement>(null)
    const [btnName, setbtnName] = useState(() => {
  
        if (typeof window !== "undefined") {
           
            const savedData = localStorage.getItem("btnExplore");
            return savedData ? JSON.parse(savedData) : false;
        }
        return false;
    });

    function All()
    {
        setbtnName(!btnName)
        setOffset(0)
        
        setTimeout(() => {
           if (ListRef.current) {
             ListRef.current.scrollIntoView({
                behavior: 'smooth',
            });
           }
        }, 100);
    }
    useEffect(() => {
  
       localStorage.setItem('btnExplore', JSON.stringify(btnName));
    }, [btnName]);
   
   
    
    return(
        <section className="ExploreOurProducts sectionHome">
            <div className="ExploreOurProducts__content">
             <header className="ExploreOurProducts__header">
                <TitleHome подзаголовок="Our Products" title="Explore Our Products"/>
                <FlippingExplore offset={offset} setOffset={setOffset} btnName={btnName} product={product} />
             </header>
             <CartListExplore offset={offset} btnName={btnName} ref={ListRef} product={product}/>
             <button className={`btn-red ${btnName ? `cart__btn-open` : `cart__btn`}`} onClick={All}>{btnName ? "back" : "View All Products"}</button>
            </div>
        </section>
    )
}

export default ExploreOurProducts
                
                    
                