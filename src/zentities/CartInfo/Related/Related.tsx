import { IProduct, useGetProductsQuery } from '@/state/services/api';
import Link from 'next/link';
import Image from 'next/image';
import Grade from '@/zentities/Home/Grade';
import Info from "./cart/info.svg"
import Wis from "./cart/wis.svg"
import Красный from "./cart/красный.svg"
import "./Related.scss"

interface IRelated {
    dataId: IProduct
}



function Related({dataId} : IRelated)
{
    const { data: product} = useGetProductsQuery();
    const similar = product?.filter(item => item.category === dataId.category);
    const limit = 4; 
   
    return(
        <div className='main__related'>
            <div className="related__title">
                <Красный />
                <h5 className="supertitles__title">Related Item</h5>
             </div>
            <div className="related__cart">
            <div className="cart__content">
                <ul className={`cart__list`}>
                    {similar?.slice(0, limit).map(item => (
                     <li key={item.id} className="cart__list-item">
                        <div className="image">
                            <Image src={item.img} alt=""  className={`image__img ${item.name.includes("AK-900 Wired Keyboard") ? "клава" : ""}`} width={180} height={190}/>
                            <div className={item.discount ? `image__info` : `image__infonot`}>
                             <div className={item.discount ? `скидка` : `notскидка`}>-{item.discount}%</div>
                             <div className={item.new ? `NEW` : `notNEW`}>{item.new}</div>
                             <div className="btns">
                                <button className="btn">
                                    <Wis className="btn__img" />
                                </button>
                                <Link href={`/product/${item.id}`} className="btn">
                                    <Info className="btn__img"/>
                                </Link>
                             </div>
                            </div>
                            <button className="image__карзина">Add To Cart</button>
                        </div>
                        <div className="info">
                            <h3 className="info__title">{item.name}</h3>
                            <div className="info__pcice">
                                <p className="pcice__скидка">${item.discountPrice}</p>
                                <p className="pcice__пол">{item.Price && `$${item.Price}`}</p>
                            </div>
                            <div className="info__grade">
                               <Grade grade={item.grade}/>
                                <div className="reviews">
                                    <p>({item.reviews})</p>
                                </div>
                            </div>
                        </div>
                     </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Related
            
              
             
        