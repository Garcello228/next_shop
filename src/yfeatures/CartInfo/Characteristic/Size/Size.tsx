import {  useState } from "react";
import "./Size.scss"

interface ISize {
    onSelect: (val : string) => void,
}

interface ISizeBtn {
    id : number,
    isOpen : number,
    setisOpen: (id : number) => void,
    onSelect: (val : string) => void,
    size : string,
}



const SizeBtn = ({id, isOpen, setisOpen, onSelect, size} : ISizeBtn) => {

    console.log("SizeBtn")
    
    const isActive = id === isOpen;

    const handleClick = () => {
        setisOpen(id);    
        onSelect(size);  
    };
    
    return(
        <li className={`letter__list-item ${isActive && `letter-active`}`} onClick={handleClick}>{size}</li>
    )
}

function Size({ onSelect } : ISize)
{

    console.log("Size")
    const [isOpen, setisOpen] = useState(3)
  
    return(
        <div className='characteristic__size'>
            <h3 className='size__title'>Size:</h3>
            <div className='size__letter'>
                <ul className='letter__list'>
                    <SizeBtn id={1} isOpen={isOpen} setisOpen={setisOpen} onSelect={onSelect}  size={"XS"}/>
                    <SizeBtn id={2} isOpen={isOpen} setisOpen={setisOpen} onSelect={onSelect}  size={"S"}/>
                    <SizeBtn id={3} isOpen={isOpen} setisOpen={setisOpen} onSelect={onSelect}  size={"M"}/>
                    <SizeBtn id={4} isOpen={isOpen} setisOpen={setisOpen} onSelect={onSelect}  size={"L"}/>
                    <SizeBtn id={5} isOpen={isOpen} setisOpen={setisOpen} onSelect={onSelect}  size={"XL"}/>
                </ul>
            </div>
        </div>
    )
} 

export default Size