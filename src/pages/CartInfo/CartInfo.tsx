"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { IProduct } from "@/state/services/api"
import GetProductId from "./api/GetProductId"
import NotFound from '@/widgets/NotFound';
import CartInfoHeader from '@/widgets/CartInfo/Header/CartInfoHeader';
import CartInfoMain from '@/widgets/CartInfo/CartInfoMain/CartInfoMain';
import "./CartInfo.scss"


function CartInfo()
{
  const params = useParams();
  const id = params?.id


  const [data, setdata] = useState<IProduct>();
  const [error, setError] = useState(false);
   
  useEffect(() => {

    if (!id) return; 

    const loadData = async () => {
      try {
        setError(false);
        const  data = await GetProductId(id as string);

        if (Object.keys(data).length === 0) {
            setError(true);
        } else {
          setdata(data);
        }
      } catch (error) {
        console.error("Ой, ошибка при загрузке:", error);
        setError(true);
      }
    };
                 
    loadData()
  },[id]);
    
  if (error) 
  {
    return(
      <NotFound />
    )
  }

    if (!data) {
       return <h1>Загрузка данных товара...</h1>;
    }
    return(
       <section className='CartInfo container pading '>
         <CartInfoHeader data={data.name}/>
         <CartInfoMain data={data}/>
       </section>
    )
   
}
 
export default CartInfo





                

