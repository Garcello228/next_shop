import { useRouter } from "next/navigation";
import PostOrder from "../CheckOutOneWingets/api/PostOrder";

interface finalOrders {
  color: string;
  size: string;
  quantity: number;
  productId: number;
  img: string;
  title: string;
  discountPrice: number | undefined;
  Price: number | undefined;
}

interface finalOrder {
    Name: string;
    Company?: string | undefined;
    Address: string;
    Optional?: string | undefined;
    City: string;
    Phone: string;
    Email: string;
    order: finalOrders | null;
    Total: number;
}

interface ICheckOutWingets {
  order : finalOrder | null
}


function PaymentWingets({order} : ICheckOutWingets)
{
    const router = useRouter();
    if (!order) {
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
                  ...order,
                  order: order?.order ?? null,
                  Total: order?.Total ?? 0,
                  Name: order?.Name ?? "",
                  Address: order?.Address ?? "",
                  City: order?.City ?? "",
                  Phone: order?.Phone ?? "",
                  Email: order?.Email ?? ""
                 }
                });
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