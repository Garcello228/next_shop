import { useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "@/state/services/api"
import {  AddWishlist } from "@/state/Slice/counterSlice";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { setFinalOrder } from '@/state/Slice/orderOneSlice';
import PostWishlist from "@/zentities/Home/CartListFlash/CartItem/api/PostWishlist";
import Color from './Color';
import Size from './Size/Size';
import Quantity from './Quantity';
import Wis from "./icone/Wis.svg"
import "./Characteristic.scss"


interface ICharacteristic {
    data: IProduct
}

function Characteristic({data} : ICharacteristic)
{
    const dispatch = useDispatch();
    const { data: session, update } = useSession();
    const router = useRouter();

    const [userSelection, setUserSelection] = useState({
     color: '', 
     size: 'M',
     quantity: 1
    });

    const handleFeatureChange = (feature : string, value : string | number) => {
      setUserSelection(prev => ({
          ...prev,
          [feature]: value
      }));
    };

    function Buy()
    {
        const finalOrder = {
         productId: data.id,
         img: data.img,   
         title: data.name,
         discountPrice: data.discountPrice,
         Price: data.Price,    
         ...userSelection        
        };

        dispatch(setFinalOrder(finalOrder));
        router.push('/CheckOut');
    }

    
    async function Wishlist()
    {
        try
        { 
            if(session)
            {
                const responce = await PostWishlist( session.user.id,  data.id )
                if (responce && responce.item) {
                  const currentWishlist = session?.user?.Wishlist || [];

                    await update({
                        updateType: "wishlist",
                        user: {
                         ...session?.user,
                         Wishlist: [...currentWishlist, responce.item], 
                       },
                    });
               }
               dispatch(AddWishlist())
               alert("Вы добавили товар в Wishlist")
           } 
           else
           {
              alert("Чтоб добвлять товары в Wishlist надо быть зарегистрированным ")
           }
        }
        catch(err) {

          if (err instanceof Error) {
              if (err.message === "Этот товар вы уже добавляли") {
                alert("Этот товар вы уже добавляли в Wishlist");
              } else {
                alert(err.message || "Произошла ошибка при добавлении");
              }
          }

       }
    }
   
    return(
        <div className='delivery__characteristic'>
            <Color onSelect={(val : string) => handleFeatureChange('color', val)} data={data}/>
            <Size onSelect={(val : string) => handleFeatureChange('size', val)}/>
            <div className='characteristic__buy'>
                <Quantity onSelect={(val : number) => handleFeatureChange('quantity', val)}/>
                <button className='buy__btn btn-red' onClick={Buy}>Buy Now</button>
                <button className='buy__wis' onClick={Wishlist}>
                    <Wis />
                </button>
            </div>
        </div>
    )
}

export default Characteristic