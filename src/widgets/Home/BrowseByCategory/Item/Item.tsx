import {  ComponentType, SVGProps } from 'react';

interface IItem{
    id: number,
    Img: ComponentType<SVGProps<SVGSVGElement>>,
    ImgActive: ComponentType<SVGProps<SVGSVGElement>>,
    title: string,
    activeId: number,
    setActiveId: (id : number) => void
}

const Item = ({ id, Img, ImgActive, title, activeId, setActiveId } : IItem) => {
    
    const isActive = activeId === id;
    const CurentSvg = isActive ? ImgActive : Img

    function Onclik(id : number)
    {
       

        if(activeId === id)
        {
            setActiveId(0)
        }
        else{
            setActiveId(id)
        }
    }

    return (
       <li className={`list-item ${isActive ? 'Category__active' : ""}`}  onClick={() => {Onclik(id); localStorage.setItem('Category', String(id))} } >
            <CurentSvg />
            <h3 className="title">{title}</h3>
       </li>
    );
};

export default Item