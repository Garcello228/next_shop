"use client"

import { useState } from "react"
import  { FC } from 'react';
import Image from 'next/image';
import Apple from "./icone/Apple.svg"
import Стрел from "./icone/стрелка.svg"
import телефон from "./icone/телефон.png"
import Btn from "./icone/кружок.svg"
import Redbtn from "./icone/кружоккрас.svg"
import "./HomeHeaderBanner.scss"

interface Btns{
    id: number,
    isOpen: number,
    setisOpen: (id: number)  => void
}

const ItemBtnn: FC<Btns> = ({id, isOpen, setisOpen}) => {

    const isActive = id === isOpen;
    const CurentSvg = isActive ? Redbtn : Btn

    return(
        <li className="item">
            <CurentSvg className={isActive ? `active` : undefined} alt="" onClick={() => {setisOpen(id); localStorage.setItem("advertising", String(id))}}/>
        </li>
    )
}


function HomeHeaderBanner()
{

    const [isOpen, setisOpen] = useState<number>(() => {
   
       if (typeof window === "undefined") return 1;

    
        try {
          const savedData = localStorage.getItem("advertising");
           return savedData ? JSON.parse(savedData) : 1;
        } catch (e) {
          console.error("Ошибка парсинга localStorage", e);
          return 1;
        }
    });

    

   const Baner = [
     {img: Apple, title: "iPhone 14 Series", discount: "Up to 10% off Voucher", mobile: телефон, id: 1},
     {img: Apple, title: "iPhone 14 Series", discount: "Up to 12% off Voucher", mobile: телефон, id: 2},
     {img: Apple, title: "iPhone 14 Series", discount: "Up to 13% off Voucher", mobile: телефон, id: 3},
     {img: Apple, title: "iPhone 14 Series", discount: "Up to 14% off Voucher", mobile: телефон, id: 4},
     {img: Apple, title: "iPhone 14 Series", discount: "Up to 15% off Voucher", mobile: телефон, id: 5},
   ]
   

   return(
      <div className='right'>
        <div className='right__content'>
            <div className='content'>
                <ul className={`advertising__list pos-${isOpen}`}>
                    {Baner.map(item => (
                      <li className='advertising__item' key={item.id}>
                        <div className='advertising'>
                           <div className='advertising__info'>
                              <div className='content'>
                                 <div className='model'>
                                     <item.img/>
                                     <p className='model__title'>{item.title}</p>
                                 </div>
                                 <div className='discount'>
                                    <h1>{item.discount}</h1>
                                 </div>
                                 <div className='купить'>
                                    <a>Shop Now</a>
                                    <Стрел />
                                 </div>
                              </div>
                           </div>
                           <div className='advertising__img'>
                              <Image src={item.mobile} alt="дебил" />
                           </div>
                        </div>
                      </li>
                    ))}
                </ul>
                <div className='flipping'>
                    <ul className='flipping__list'>
                        <ItemBtnn id={1} isOpen={isOpen} setisOpen={setisOpen} />
                        <ItemBtnn id={2} isOpen={isOpen} setisOpen={setisOpen} />
                        <ItemBtnn id={3} isOpen={isOpen} setisOpen={setisOpen} />
                        <ItemBtnn id={4} isOpen={isOpen} setisOpen={setisOpen} />
                        <ItemBtnn id={5} isOpen={isOpen} setisOpen={setisOpen} />
                    </ul>
                </div>
            </div>
               
        </div>
      </div>
   )
}

export default HomeHeaderBanner