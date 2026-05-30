import { useGetProductsQuery } from "@/state/services/api";
import ProductItem from "./CartItem/CartItemBest"
import "./CartListBest.scss"


interface ICartList{
    btnAll: boolean
}


function CartListBest({ btnAll} : ICartList)
{
   const { data: product} = useGetProductsQuery();
   const Best = product?.filter(item => item.grade > String(4));
   
    return(
       <div className="BestSellingProducts__cart">
           <div className={`cart__content `}>
               <ul className={`cart__list ${btnAll ? `AllProduct` : ``}`} >
                   { Best ? Best.map(item => (
                     <ProductItem key={item.id} item={item}/>
                   )) : (
                       <h1>Loding...</h1>
                   )}
               </ul>
           </div>
       </div>
   )
}

export default CartListBest


               
                               