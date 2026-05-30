"use client"

import {  useState, useEffect } from "react";
import Item from "../Item/Item"
import Тел from "./icone/item/тел.svg"
import ТелАктив from "./icone/item/телАктив.svg"
import Комп from "./icone/item/комп.svg"
import КомпАктив from "./icone/item/компАктив.svg"
import Часы from "./icone/item/часы.svg"
import ЧасыАктив from "./icone/item/часыАктив.svg"
import Камера from "./icone/item/камера.svg"
import КамераАктив from "./icone/item/камераАктив.svg"
import Наушники from "./icone/item/наушники.svg"
import НаушникиАктив from "./icone/item/наушникиАктив.svg"
import Гейм from "./icone/item/гейм.svg"
import ГеймАктив from "./icone/item/геймАктив.svg"
import "./Category.scss"


function Category({ offset } : { offset : number})
{


    const [activeId, setActiveId] = useState<number | null>(null);

    
    useEffect(() => {
        try {
            const savedData = localStorage.getItem("Category");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActiveId(savedData ? JSON.parse(savedData) : 4);
        } catch (e) {
            console.error("Ошибка парсинга localStorage", e);
            setActiveId(4);
        }
    }, []);

        
        
   
    return(
        <div className="Category">
            <div className="Category__content">
                <ul className="list" style={{ transform: `translateX(${offset}px)`}}>
                    <Item id={1} Img={Тел} ImgActive={ТелАктив} title="Phones"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={2} Img={Комп} ImgActive={КомпАктив} title="Computers"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={3} Img={Часы} ImgActive={ЧасыАктив} title="SmartWatch"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={4} Img={Камера} ImgActive={КамераАктив} title="Camera"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={5} Img={Наушники} ImgActive={НаушникиАктив} title="HeadPhones"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={6} Img={Гейм} ImgActive={ГеймАктив} title="Gaming"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={7} Img={Тел} ImgActive={ТелАктив} title="Phones"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={8} Img={Комп} ImgActive={КомпАктив} title="Computers"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={9} Img={Часы} ImgActive={ЧасыАктив} title="SmartWatch"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                    <Item id={10} Img={Камера} ImgActive={КамераАктив} title="Camera"  activeId={activeId ?? 4} setActiveId={setActiveId} />
                </ul>
            </div>
        </div>
    )
}

export default Category