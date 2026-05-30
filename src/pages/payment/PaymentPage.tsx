"use client"

import { useSelector } from 'react-redux';
import { RootState } from "@/state/store";
import PaymentWingets from '@/widgets/Payment/PaymentWingets';
import PaymentOneWingets from '@/widgets/Payment/PaymentOneWingets';



function PaymentPage()
{

    const orders = useSelector((state : RootState) => state.OrderToSend.currentOrder);
    const order = useSelector((state : RootState) => state.OrderTotal.currentOrder);


    if(orders)
    {
    
        return(
            <PaymentWingets orders = {orders}/>
        )   
    }

    if(order)
    {
    
       return(
         <PaymentOneWingets order = {order}/>
       )   
   }



    if( !orders && !order)
    {
       
       return(
            <section className='container pading'>
             <h1>Чтоб пользоваться нужно что нибудь покупать</h1>
            </section>
       )   
    
    }
    

}

export default PaymentPage
 
 
 
