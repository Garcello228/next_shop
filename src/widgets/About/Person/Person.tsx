"use client"

import { useState, FC, memo, useCallback } from "react"
import { StaticImageData } from "next/image"
import Image from 'next/image'
import "./Person.scss"
import one from "./icone&img/1.png"
import two from "./icone&img/2.png"
import three from "./icone&img/3.png" 
import Twiter from "./icone&img/Icon-Twitter.svg"
import Insta from "./icone&img/icon-instagram.svg" 
import Lin from "./icone&img/Icon-Linkedin.svg"
import Btn from "./icone&img/btn.svg"
import Redbtn from "./icone&img/redbtn.svg"

interface AchievementData {
  id: number;
}

interface ItemBtns {
   id: number,
   isActive: boolean,
   setisOpen(id : number): void
}

interface PersonItemData {
  id: number;
  img: StaticImageData;     
  name: string;     
  jobtitle: string;
}



const ItemBtn : FC<ItemBtns> = memo(({id, setisOpen, isActive}) => {

    const CurrentIcon = isActive ? Redbtn : Btn;

    return(
        <li className="item">
            <CurrentIcon  className={`item__img ${isActive && `item__active`}`} alt="" onClick={() => setisOpen(id)}/>
        </li>
    )

})
ItemBtn.displayName = "Item"



const PersonMap = [
{img: one, name: "Tom Cruise", jobtitle: "Founder & Chairman", id: 1},
{img: two, name: "Emma Watson", jobtitle: "Managing Director", id: 2},
{img: three, name: "Will Smith", jobtitle: "Product Designer" , id: 3},
{img: one, name: "Tom Cruise2", jobtitle: "Founder & Chairman", id: 4},
{img: two, name: "Emma Watson2", jobtitle: "Managing Director", id: 5},
{img: three, name: "Will Smith2", jobtitle: "Product Designer", id: 6},
{img: one, name: "Tom Cruise3", jobtitle: "Founder & Chairman", id: 7},
{img: two, name: "Emma Watson3", jobtitle: "Managing Director", id: 8},
{img: three, name: "Will Smith3", jobtitle: "Product Designer", id: 9},
{img: one, name: "Tom Cruise4", jobtitle: "Founder & Chairman", id: 10},
{img: two, name: "Emma Watson4", jobtitle: "Managing Director", id: 11},
{img: three, name: "Will Smith4", jobtitle: "Product Designer", id: 12},
{img: one, name: "Tom Cruise5", jobtitle: "Founder & Chairman", id: 13},
{img: two, name: "Emma Watson5", jobtitle: "Managing Director", id: 14},
{img: three, name: "Will Smith5", jobtitle: "Product Designer", id: 15},
]

const ACHIEVEMENTS_LIST: AchievementData[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

function PersonItem({ item  } : { item :  PersonItemData})
{
    return(
        <li className="list-item">
            <Image src={item.img} alt="" />
            <div className="info">
                <div className="info__name">
                  <h2 className="name">{item.name}</h2>
                  <p className="jobtitle">{item.jobtitle}</p>
                </div>
                <div className="info__mes">
                    <a href="">
                       <Twiter alt="" />
                    </a>
                    <a href="">
                       <Insta alt="" />
                    </a>
                    <a href="">
                       <Lin alt="" />
                    </a>
                </div>
            </div>
        </li>
   )
}


function Person()
{

   const [isOpen, setisOpen] = useState<number>(() => {
       const savedData = localStorage.getItem("btnlist")
       const three = 3;
       return savedData ? Number(savedData) : three
   })

    const handleSelect = useCallback((id: number) => {
      setisOpen(id)
      localStorage.setItem("btnlist", String(id))
    }, []);


   

   return(
    <section className="Person">
        <div className="Person__content">
            <div className="content">
             <ul className={`list pos-${isOpen}`}>
                {PersonMap.map(item => (
                    <PersonItem item={item} key={item.id}/>
                ))}
             </ul>
            </div>
            <div className="btn">
                <ul className="btn__list">
                    {ACHIEVEMENTS_LIST.map((item) => (
                        <ItemBtn id={item.id} setisOpen={handleSelect} key={item.id}  isActive={isOpen === item.id}/>
                    ))}
                </ul>
            </div>
        </div>
        
    </section>
   )
}

export default Person;
                        