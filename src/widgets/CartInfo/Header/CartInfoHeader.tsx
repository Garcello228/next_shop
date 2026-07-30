import { IProduct } from "@/state/services/api"


interface ICartInfoHeader {
    data: IProduct
}

function CartInfoHeader({data} : ICartInfoHeader)
{
   
   return(
    <header className='CartInfo__header'>
            <p> <span>Account / Gaming /</span> {data.name}</p>
    </header>
   )   
}

export default CartInfoHeader
    