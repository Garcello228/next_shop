"use client"

import { useSelector } from 'react-redux';
import { RootState } from "@/state/store";
import CheckOutWingets from '@/widgets/CheckOuts';
import CheckOutOneWingets from '@/widgets/CheckOutOneWingets';

function CheckOutPage()
{

    const orders = useSelector((state : RootState) => state.Orders.currentOrder);
    const order = useSelector((state : RootState) => state.Order.currentOrder);


    if(orders)
    {
    
        return(
            <CheckOutWingets orders = {orders}/>
        )   
    }


    if(order)
    {
    
       return(
         <CheckOutOneWingets order = {order}/>
       )   
    }


    if(!order && !orders)
    {
       
       return(
            <section className='container pading'>
             <h1>Чтоб пользоваться нужно что нибудь покупать</h1>
            </section>
       )   
    
    }
    

}

export default CheckOutPage
 
 
 
