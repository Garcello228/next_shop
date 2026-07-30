import { IProduct } from "@/state/services/api"
import Characteristic from "@/yfeatures/CartInfo/Characteristic"
import Grade from "@/zentities/Home/Grade"
import Line from "./icone/Line.svg"
import Лин from "./icone/лин.svg"
import Маш from "./icone/маш.svg"
import Рев from "./icone/рев.svg"
import "./Product.scss"


interface IiProduct {
    data: IProduct
}

function Product({data} : IiProduct)
{
   
    return(
        <div className='detalis__product'>
            <div className='product__info'>
                <h1 className='info__title'>{data.name}</h1>
                <div className='info__grade'>
                    <div className='grade__stars'>
                        <Grade grade={data.grade}/>
                        <p>({data.reviews} Reviews)</p>
                    </div>
                    <div className='grade__InStock'>
                        <Line/>
                        <p>In Stock</p>
                    </div>
                </div>
                <h2 className='info__price'>${data.discountPrice ? data.discountPrice : data.Price}.00</h2>
                <p className='info__description'>{data.description}</p>
            </div>
            <Лин />
            <div className='product__delivery'>
                <Characteristic data={data} />
                <div className='delivery__description'>
                    <div className='description__free'>
                        <Маш alt="" />
                        <div className='free__description'>
                            <h4 className='description__title'>Free Delivery</h4>
                            <a href="#">Enter your postal code for Delivery Availability</a>
                        </div>
                    </div>
                    <hr />
                    <div className='description__return'>
                        <Рев alt="" />
                        <div className='return__description'>
                            <h4 className='description__title'>Return Delivery</h4>
                            <div className='description__сыл'>
                                <p>Free 30 Days Delivery Returns.</p>
                                <a href="#">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product