import { IProduct } from "@/state/services/api"
import Imags from "./Imgs/Imgs"
import Product from "./product/Product"
import Related from "@/zentities/CartInfo/Related"
import "./CartInfoMain.scss"

interface ICartInfoMain {
    data: IProduct
}

function CartInfoMain({data} : ICartInfoMain)
{
   
    return (
        <main className='CartInfo__main'>
            <div className='main__detalis'>
                <Imags data={data} />
                <Product data={data}/>
            </div>
            <Related dataId={data}/>   
        </main>
    )
}

export default CartInfoMain