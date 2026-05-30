"use client"

import { FC, useState } from "react";
import "./Achievement.scss"
import Магазин from './icone/магазин.svg';
import Долар from './icone/долар.svg';
import Пакет from './icone/пакет.svg';
import Мешок from './icone/мешок.svg';

interface Items {
   id: number,
   img: React.FC<React.SVGProps<SVGSVGElement>>,
   title: string,
   text: string,
   activeId: number,
   setActiveId(id : number): void
}

const Item : FC<Items> = ({ id, img: Icon, title, text, activeId, setActiveId }) => {
    
    const isActive = activeId === id;

    return (
       <li className={`list-item ${isActive && 'active'}`}  onClick={() => {setActiveId(id); localStorage.setItem('Achievement', String(id))} } >
            <Icon className="img"/> 
            <h2>{title}</h2>
            <p>{text}</p>
       </li>
    );
};
    
    
  

function Achievement() {

        
    
  
    const [activeId, setActiveId] = useState<number>(() => {
        const savedData : string | null = localStorage.getItem('Achievement');
        return savedData ?  Number(savedData) : 2;
    });

    

    return(
        <section className="Achievement">
            <div className="Achievement__content">
                <ul className="list">
                    
                   
                    <Item id={1} img={Магазин} title="10.5k" text="Sallers active our site" activeId={activeId} setActiveId={setActiveId} />
                    <Item id={2} img={Долар} title="33k" text="Mopnthly Produduct Sale" activeId={activeId} setActiveId={setActiveId} />
                    <Item id={3} img={Пакет} title="45.5k" text="Customer active in our site" activeId={activeId} setActiveId={setActiveId} />
                    <Item id={4} img={Мешок} title="25k" text="Anual gross sale in our site" activeId={activeId} setActiveId={setActiveId} />
                    
                    
                </ul>
            </div>
        </section>
    )

    
}

export default Achievement






    
    
                    
                   
   
    

   

