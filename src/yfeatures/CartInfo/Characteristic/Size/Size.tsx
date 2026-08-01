import {  memo, useState } from "react";
import "./Size.scss"

interface ISize {
    onSelect: (feature : string, val : string) => void,
}

interface ISizeBtn {
    id : number,
    isActive : boolean,
    setisOpen: (id : number) => void,
    onSelect: (feature : string, val : string) => void,
    size : string,
}

const sizes = [
  { id: 1, size: "XS" },
  { id: 2, size: "S" },
  { id: 3, size: "M" },
  { id: 4, size: "L" },
  { id: 5, size: "XL" }
];



const SizeBtn = memo(({id, isActive, setisOpen, onSelect, size} : ISizeBtn) => {

    const handleClick = () => {
        setisOpen(id);    
        onSelect("size", size);  
    };
    
    return(
        <li className={`letter__list-item ${isActive && `letter-active`}`} onClick={handleClick}>{size}</li>
    )
})

SizeBtn.displayName = "Item"

function Size({ onSelect } : ISize)
{
    const [isOpen, setisOpen] = useState(3)
  
    return(
        <div className='characteristic__size'>
            <h3 className='size__title'>Size:</h3>
            <div className='size__letter'>
                <ul className='letter__list'>
                    {sizes.map((item) => (
                        <SizeBtn key={item.id} id={item.id} isActive={isOpen === item.id} setisOpen={setisOpen} onSelect={onSelect}  size={item.size}/>
                    ))}
                </ul>
            </div>
        </div>
    )
} 

export default Size