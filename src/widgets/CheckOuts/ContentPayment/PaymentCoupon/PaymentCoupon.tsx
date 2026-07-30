import { useState } from "react";
import FindCoupon from "@/widgets/Cart/PaymentCoupon/api/FindCoupon";
import { IProductInCart } from "../../../../../next-auth";
import "./PaymentCoupon.scss"

interface ICartItems {
  quantity: number;
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInCart;
}


export interface IOrders {
  CartItems: ICartItems[];
  Discount: number;
  Total: number;
  Subtotal: number;
}

interface IPaymentCoupon {
    order : IOrders | null,
    setDiscount: (number : number) => void
}

function PaymentCoupon({ order, setDiscount } : IPaymentCoupon)
{

    const [CouponTry, setCouponTry] = useState("");
    const [Couponbtn, setCouponbtn] = useState(false);
    const [Couponfalse, setCouponfalse] = useState(false);
    const [error, seterror] = useState("");
   
    async function CouponExamination()
    {
        setCouponfalse(false)
        seterror("")

        if(CouponTry.trim().length === 0)
        {
           setCouponfalse(true)
           seterror("Поле не должно быть пустым")
           return
        }
        
        try{
            const findCoupon = await FindCoupon(CouponTry)
            if (findCoupon)
            {
              setDiscount(0.9)
              setCouponbtn(true)
              setCouponfalse(false)
              setCouponTry("")
            } 
        } catch(err) {
            if (err instanceof Error) {
               setCouponfalse(true);
               seterror(err.message || "Произошла ошибка при проверке купона");
            }
        }
     
     
   
    }

    
    
    

    
    
    
    
    
    
    
    
    



    return(
        <div className='payment__coupon'>
            <p className={`${Couponfalse ? `errorCoupon` : ``} noterror`}>{error}</p>
            <input type="text" 
            className={`coupon__input ${Couponfalse ? `coupon__input-error` : ``}`} 
            placeholder='Coupon Code' 
            required 
            value={CouponTry} onChange={(e) => setCouponTry(e.target.value)}/>
            <button className={`coupon__btn btn-red ${order?.Discount === 1 ? `${Couponbtn ? `activeCoupon` : ``}` : `activeCoupon`}`} 
            type="button" onClick={CouponExamination} disabled={Couponbtn || ((order?.Discount ?? 1) < 1)}>
                <span className="tooltipCoupon">Купон активирован</span>
                Apply Coupon
            </button>
        </div>
   )
}

export default PaymentCoupon