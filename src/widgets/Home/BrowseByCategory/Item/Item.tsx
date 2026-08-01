import {  ComponentType, memo, SVGProps } from 'react';

interface IItem{
    id: number,
    Img: ComponentType<SVGProps<SVGSVGElement>>,
    ImgActive: ComponentType<SVGProps<SVGSVGElement>>,
    title: string,
    isActive: boolean,
    setActiveId: (id : number) => void
}

const Item = memo(({ id, Img, ImgActive, title, isActive, setActiveId } : IItem) => {
    
    const CurentSvg = isActive ? ImgActive : Img

    function Onclik(id : number)
    {
       

        if(isActive)
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
});

Item.displayName = "Item"

export default Item