import Plus from "./icone/plus.svg"
import Minus from "./icone/minus.svg"
import { useState } from "react"
import "./Quantity.scss"


interface IQuantity {
    onSelect: (val : number) => void,
}

function Quantity({ onSelect } : IQuantity)
{

   console.log("Quantity")
   const [count, setcount] = useState(1);

   function countmin()
   {
      setcount((prev) => prev -= 1)
      onSelect(count - 1)
   }

   function countplus()
   {
      setcount((prev) => prev += 1)
      onSelect(count + 1)
   }

    return(
        <div className='buy__quantity'>
            <button className={`quantity__min ${count === 1 && `quantity-dis`}`} onClick={countmin} disabled={count === 1}>
                <Minus alt="" />
            </button>
            <div className='quantity__number'>{count}</div>
            <button className='quantity__plus' onClick={countplus}>
                <Plus alt="" />
            </button>
        </div>
    )
}

export default Quantity