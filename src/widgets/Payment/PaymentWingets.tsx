import { useRouter } from "next/navigation";
import { useGetCartQuery } from "@/state/services/api"
import { useGetWishlistQuery } from "@/state/services/api"
import { IProductInCart } from "../../../next-auth";
import CartAllRemove from "../CheckOuts/api/CartAllRemove";
import PostOrder from "../CheckOuts/api/PostOrder";
import RemoveWis from "../CheckOuts/api/RemoveWis";


interface ICartItems {
  quantity: number;
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInCart;
}



interface ICheckOutWingets {
  orders : cleanOrderToSend | null
}

interface cleanOrderToSend {
    Name: string;
    Company?: string | undefined;
    Address: string;
    Optional?: string | undefined;
    City: string;
    Phone: string;
    Email: string;
    CartItems: ICartItems[];
    Total: number;
}

function PaymentWingets({orders} : ICheckOutWingets)
{
    const router = useRouter();
    const { refetch: refetchCart } = useGetCartQuery();
    const { refetch: refetchWishlist } = useGetWishlistQuery();
    
    if (!orders) {
       console.error("Данные платежа отсутствуют");
       return;
    }
   

   async function Finalpayment()
   {
       const Типаок = true

       if(Типаок)
       {  
            try {
                await PostOrder({
                  orderToSend: {
                  ...orders,
                  CartItems: orders?.CartItems ?? [],
                  Total: orders?.Total ?? 0,
                  Name: orders?.Name ?? "",
                  Address: orders?.Address ?? "",
                  City: orders?.City ?? "",
                  Phone: orders?.Phone ?? "",
                  Email: orders?.Email ?? ""
                 }
                });

                await CartAllRemove();
                refetchCart()

                const RemoveWisl = orders?.CartItems ?? [];
                for (const item of RemoveWisl) {
                   await RemoveWis(item.productId);
                   refetchWishlist()
                }
                router.push('/'); 
                alert("Заказ успешно принят!");
            } catch (error) {
                console.error("Произошла ошибка при отправке заказа:", error);
               alert(`Что-то пошло не так`);
            }

          
        } else {
           alert("Оплата не прошла")
        }
   }
 
    return(
        <button className='btn-red' onClick={Finalpayment}>Оплатить</button>
    )
 }
 
 export default PaymentWingets