import { useGetProductsQuery } from '@/state/services/api';
import Link from "next/link"
import Grade from '@/zentities/Home/Grade'; 
import Info from "./cart/info.svg"
import Красный from "./cart/красный.svg"
import Помойка from "./cart/корзинаc.svg"
import Image from 'next/image';
import "./ForYou.scss"


function ForYou()
{
    const { data: product} = useGetProductsQuery();
    const limit = 4; 
   
    return(
        <div className='main__related'>
            <div className="related__header">
              <div className="related__title">
                <Красный alt="" />
                <h5 className="supertitles__title">Just For You</h5>
              </div>
              <button className="header__btn">See All</button>
            </div>
            <div className="related__cart">
            <div className="cart__content">
                <ul className={`cart__list`}>
                    {product?.slice(0, limit).map(item => (
                     <li key={item.id} className="cart__list-item">
                        <div className="image">
                            <Image src={item.img} alt=""  className={`image__img ${item.name.includes("AK-900 Wired Keyboard") ? "клава" : ""}`} width={180} height={190} />
                            <div className={item.discount ? `image__info` : `image__infonot`}>
                             <div className={item.discount ? `скидка` : `notскидка`}>-{item.discount}%</div>
                             <div className={item.new ? `NEW` : `notNEW`}>{item.new}</div>
                             <div className="btns">
                                <Link href={`/product/${item.id}`} className="btn">
                                    <Info alt="" className="btn__img"/>
                                </Link>
                             </div>
                            </div>
                            <button className="image__карзинаFor">
                                <div className="карзина__content">
                                 <Помойка alt="" />
                                 <p>Add To Cart</p>
                                </div>
                            </button>
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

export default ForYou