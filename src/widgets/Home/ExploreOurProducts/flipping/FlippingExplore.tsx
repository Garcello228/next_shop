import { IProduct } from "@/state/services/api"
import Leftimg from "./icone/left.svg"
import Rightimg from "./icone/right.svg"
import "./flippingExplore.scss"

interface IFlippingFlash{
    offset: number,
    setOffset: React.Dispatch<React.SetStateAction<number>>,
    btnName: boolean,
    product: IProduct[] | undefined
}


function FlippingExplore( { offset, setOffset, btnName, product} : IFlippingFlash)
{

    const step = 300;
    const count = Object.keys(product ?? []).length;
    const finalcount = Math.ceil(count / 2)
    const flip = finalcount * step - 1200


    function left()
    {
            
        if (offset < 0) { 
            setOffset(prev => prev + step);
        }
           
    }
    
    function right()
    {
        if (offset > -flip) { 
            setOffset(prev => prev - step);
        }
           
    }
   
    return(
        <div className="flipping">
            <button className={`flipping__btn ${offset === 0 && `btn_d` || btnName && `btn_d`}`} onClick={left} disabled={offset === 0 || btnName === true}>
                <Leftimg alt="" />
            </button>
            <button className={`flipping__btn ${offset === -flip && `btn_d` || btnName && `btn_d`}`} onClick={right} disabled={offset === -flip || btnName === true}>
                <Rightimg alt="" />
            </button>
        </div>
    )
}

export default FlippingExplore