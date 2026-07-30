"use client"

import { FC, useState, ComponentType,  SVGProps } from "react";
import "./Achievement.scss"
import StoreIcon from './icone/магазин.svg';
import DollarIcon from './icone/долар.svg';
import PacketIcon from './icone/пакет.svg';
import BagIcon from './icone/мешок.svg';

interface AchievementData {
  id: number;
  img: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

interface ItemProps extends AchievementData {
  isActive: boolean;
  onSelect: (id: number) => void;
}


const Item: FC<ItemProps> = ({ id, img: Icon, title, text, isActive, onSelect }) => {
  return (
    <li 
      className={`list-item ${isActive ? "active" : ""}`} 
      onClick={() => onSelect(id)}
    >
      <Icon className="img" />
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

const ACHIEVEMENTS_LIST: AchievementData[] = [
  { id: 1, img: StoreIcon, title: "10.5k", text: "Sellers active on our site" },
  { id: 2, img: DollarIcon, title: "33k", text: "Monthly Product Sale" },
  { id: 3, img: PacketIcon, title: "45.5k", text: "Customer active on our site" },
  { id: 4, img: BagIcon, title: "25k", text: "Annual gross sale on our site" },
];
    
    
  

function Achievement() {

        
    
  
    const [activeId, setActiveId] = useState<number>(() => {
        const savedData : string | null = localStorage.getItem('Achievement');
        return savedData ?  Number(savedData) : 2;
    });

    const handleSelect = (id: number) => {
       setActiveId(id);
       localStorage.setItem("Achievement", String(id));
    };

    

    return(
        <section className="Achievement">
            <div className="Achievement__content">
                <ul className="list">
                    
                    {ACHIEVEMENTS_LIST.map((item) => (
                        <Item
                         key={item.id}
                         {...item}
                          isActive={activeId === item.id}
                         onSelect={handleSelect}
                        />
                    ))}
                    
                    
                </ul>
            </div>
        </section>
    )

    
}

export default Achievement






    
    
                    
                   
   
    

   

