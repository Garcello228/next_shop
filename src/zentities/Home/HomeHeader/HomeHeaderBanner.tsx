"use client"

import { ComponentType, SVGProps, useState, useCallback, memo } from "react"
import { StaticImageData } from "next/image"
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
  isActive: boolean,
  setisOpen: (id: number)  => void
}

interface ImageItemI {
  id: number,
  img: ComponentType<SVGProps<SVGSVGElement>>,
  title: string,
  discount: string,
  mobile: StaticImageData
}

const ItemBtnn: FC<Btns> = memo(({id, isActive, setisOpen}) => {

  const CurentSvg = isActive ? Redbtn : Btn

  return(
    <li className="item">
        <CurentSvg className={isActive ? `active` : undefined} alt="" onClick={() => setisOpen(id)}/>
    </li>
  )
})
ItemBtnn.displayName = "Item"

const Baner = [
  {img: Apple, title: "iPhone 14 Series", discount: "Up to 10% off Voucher", mobile: телефон, id: 1},
  {img: Apple, title: "iPhone 14 Series", discount: "Up to 12% off Voucher", mobile: телефон, id: 2},
  {img: Apple, title: "iPhone 14 Series", discount: "Up to 13% off Voucher", mobile: телефон, id: 3},
  {img: Apple, title: "iPhone 14 Series", discount: "Up to 14% off Voucher", mobile: телефон, id: 4},
  {img: Apple, title: "iPhone 14 Series", discount: "Up to 15% off Voucher", mobile: телефон, id: 5},
]

const ACHIEVEMENTS_LIST = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];


function ImageItem({item} : {item : ImageItemI})
{
  return(
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
  )
}

function HomeHeaderBanner()
{

  const [isOpen, setisOpen] = useState<number>(() => {
   
    if (typeof window === "undefined") return 1;

    const savedData = localStorage.getItem("advertising");
    return savedData ? JSON.parse(savedData) : 1;
  });

  const handleSelect = useCallback((id: number) => {
    setisOpen(id)
    localStorage.setItem("advertising", String(id))
  }, []);
   

   return(
      <div className='right'>
        <div className='right__content'>
            <div className='content'>
                <ul className={`advertising__list pos-${isOpen}`}>
                    {Baner.map(item => (
                      <ImageItem key={item.id} item={item}/>
                    ))}
                </ul>
                <div className='flipping'>
                    <ul className='flipping__list'>
                        {ACHIEVEMENTS_LIST.map((item) => (
                          <ItemBtnn id={item.id} isActive={isOpen === item.id} setisOpen={handleSelect} key={item.id}/>
                        ))}
                    </ul>
                </div>
            </div>
               
        </div>
      </div>
   )
}

export default HomeHeaderBanner