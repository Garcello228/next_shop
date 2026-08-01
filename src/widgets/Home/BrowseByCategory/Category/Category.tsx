"use client"

import {  useState } from "react";
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


const itemsData = [
  { id: 1, Img: Тел, ImgActive: ТелАктив, title: 'Phones'},
  { id: 2, Img: Комп, ImgActive: КомпАктив, title: 'Computers'},
  { id: 3, Img: Часы, ImgActive: ЧасыАктив, title: 'SmartWatch'},
  { id: 4, Img: Камера, ImgActive: КамераАктив, title: 'Camera'},
  { id: 5, Img: Наушники, ImgActive: НаушникиАктив, title: 'HeadPhones'},
  { id: 6, Img: Гейм, ImgActive: ГеймАктив, title: 'Gaming'},
  { id: 7, Img: Тел, ImgActive: ТелАктив, title: 'Phones'},
  { id: 8, Img: Комп, ImgActive: КомпАктив, title: 'Computers'},
  { id: 9, Img: Часы, ImgActive: ЧасыАктив, title: 'SmartWatch'},
  { id: 10, Img: Камера, ImgActive: КамераАктив, title: 'Camera'}
];

function Category({ offset } : { offset : number})
{

    const savedData = localStorage.getItem("Category");
    const [activeId, setActiveId] = useState<number>(savedData ? JSON.parse(savedData) : 4)

    return(
        <div className="Category">
            <div className="Category__content">
                <ul className="list" style={{ transform: `translateX(${offset}px)`}}>
                    {itemsData.map((item) => (
                        <Item id={item.id} Img={item.Img} ImgActive={item.ImgActive} title={item.title}  isActive={activeId === item.id} setActiveId={setActiveId} key={item.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category