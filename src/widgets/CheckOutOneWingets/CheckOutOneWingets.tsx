import ContentPayment from './ContentPayment';
import ContentData from './ContentData';
import { useState } from 'react';
import "./CheckOutOneWingets.scss"


interface finalOrder {
  color: string;
  size: string;
  quantity: number;
  productId: number;
  img: string;
  title: string;
  discountPrice: number | undefined;
  Price: number | undefined;
}


interface finalOrderTotal {
  order: finalOrder | null; 
  Total: number;
}


interface ICheckOutWingets {
  order : finalOrder | null
}

function CheckOutWingets({order} : ICheckOutWingets)
{
  const [Payment, setPayment] = useState<finalOrderTotal>({
    order: order,
    Total: order?.discountPrice || order?.Price || 0
  });
  const [isOpen, setisOpen] = useState(1);
  
  return(
      <section className='CheckOut container pading'>
        <header className='CheckOut__header'>
          <p> <span>Account / My Account / Product / View Cart /</span> CheckOut</p>
        </header>
        <main className='CheckOut__main'>
          <h1 className='main__title'>Billing Details</h1>
          <div className='main__content'>
            <ContentData setPayment={setPayment} Payment={Payment} isOpen={isOpen}/>
            <ContentPayment setPayment={setPayment} isOpen={isOpen} setisOpen={setisOpen} orders={order}/>
          </div>
        </main>
      </section>
  )
}

export default CheckOutWingets
  
  
  
