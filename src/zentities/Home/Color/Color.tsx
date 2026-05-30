import { IProductColor } from "@/state/services/api"
//import  { memo} from 'react';
import "./Color.scss"

interface IColorBtn {
    id: number,
    color: string | undefined,
    isOpen: number,
    setisOpen: React.Dispatch<React.SetStateAction<number>>,
}

interface IColorProps {
    color: IProductColor,
    isOpen: number,
    setisOpen: React.Dispatch<React.SetStateAction<number>>,
}


const ColorBtn = ({id, color , isOpen, setisOpen } : IColorBtn) => {


    const isActive = id === isOpen;
    
    const handleClick = () => {
        setisOpen(id)
    };
    
    return(
        <button className={`btn ${isActive ? `btn-active` : ``}`} onClick={handleClick} style={ {background: color} }>
            <div className={`color ${isActive ? `color-active` : ``}`} style={ {background: color}}></div>
        </button>
    )
}



function Color({color , isOpen, setisOpen} : IColorProps)
{

    return(
        <div className='info__color'>
            <ColorBtn id={1} color={color?.one} isOpen={isOpen} setisOpen={setisOpen}/>
            <ColorBtn id={2} color={color?.two} isOpen={isOpen} setisOpen={setisOpen}/>
        </div>
    )
}

export default Color
           
        