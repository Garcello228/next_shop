import  { useState } from 'react';
import { IProduct } from "@/state/services/api"
import { useSearchParams } from 'next/navigation';
import "./Color.scss"


interface IColor {
    onSelect: (feature : string, val : string) => void,
    data: IProduct
}

interface IColorBtn {
    id : number,
    isOpen : number,
    setisOpen: (id : number) => void,
    color : string,
    onSelect: (feature : string, val : string) => void,
}

const ColorBtn =({id, isOpen, setisOpen, color, onSelect} : IColorBtn) => {
    
    const isActive = id === isOpen;

    const handleClick = () => {
        setisOpen(id);    
        onSelect("color", color);  
    };
    
    return(
        <button className={`btn ${isActive ? `btn-active` : ``}`} onClick={handleClick} style={ {background: color}}>
             <div className={`color ${isActive ? `color-active` : ``}`} style={ {background: color}}></div>
        </button>
    )
}


function Color({ onSelect, data } : IColor)
{
    const searchParams = useSearchParams();
    const colorId = searchParams?.get('color');
    
    const [isOpen, setisOpen] =  useState<number>(() => {
       return colorId ? Number(colorId) : 1;
    });


    if(data.color?.one)
    {
        return(
            
            <div className='characteristic__color'>
                <h3 className='color__title'>Colours:</h3>
                <div className='color__imgs'>
                    <ColorBtn id={1} isOpen={isOpen || 1} setisOpen={setisOpen} color={data.color.one} onSelect={onSelect} />
                    <ColorBtn id={2} isOpen={isOpen || 1} setisOpen={setisOpen} color={data.color.two} onSelect={onSelect}  />
                </div>
            </div>
            
        )
    }
}

    


export default Color