import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFinalOrder } from '@/state/Slice/orderOneTotalSlice';
import PostOrder from '../api/PostOrder';
import "./ContentData.scss"


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


export interface ICheckoutFormInputs {
  Name: string;
  Company?: string;       
  Address: string;
  Optional?: string;
  City: string;
  Phone: string;
  Email: string;
}


interface IContentData {
  setPayment: Dispatch<SetStateAction<finalOrderTotal>>;
  Payment: finalOrderTotal,
  isOpen : number
}

function ContentData({ Payment, isOpen } : IContentData)
{
  const router = useRouter();
  const dispatch = useDispatch();

  const [infoUser, setinfoUser] = useState(() => {
    const saved = localStorage.getItem("infoUser");
  
    try {
      return saved ? JSON.parse(saved) : null;
    } catch  {
      return null; 
    }
  });

  const { register, handleSubmit, formState: { errors } , reset } = useForm< ICheckoutFormInputs>({
    defaultValues: infoUser || {}
  });


  async function onSubmit(data :  ICheckoutFormInputs)
  {

    if (!Payment) {
      console.error("Данные платежа отсутствуют");
      return;
    }
        
    if(checkbox === true)
    {
      setinfoUser(data)
      localStorage.setItem("infoUser",  JSON.stringify(data))

    } else {
      localStorage.removeItem("infoUser")
    }

      
        
    if(isOpen === 1)
    {
      const orderToSend = { 
        ...Payment, 
        ...data      
      };
      dispatch(setFinalOrder(orderToSend));

      router.push('/payment'); 
    } else {

      const orderToSend = { 
        ...Payment, 
        ...data      
      };

      try {
        
        await PostOrder({
          orderToSend: {
           ...orderToSend
          }
        });

        
        reset();
        router.push('/'); 
        alert("Заказ успешно принят!");

      } catch (error) {
        console.error("Произошла ошибка при отправке заказа:", error);
  
        alert(`Что-то пошло не так`);
      }
    
    
    
    }
    
  }
  
  

  
  

        


  const [checkbox, setcheckbox] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("checkbox") === "true";
    }
    return false;
  });

  function CheckboxClik()
  {
    const newValue = !checkbox;
    setcheckbox(newValue)
    localStorage.setItem("checkbox", String(newValue))
  }

  return(
        <form className='content__data' id="my-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='data__inputs'>
               <ul className='inputs__list'>
                <li className='inputs__list-item'>
                  <label htmlFor="FirstName">First Name<span>*</span></label>
                  {errors.Name && <p className='error-input'>{errors.Name.message}</p>}
                  <input type="text"  id='FirstName' className={`${errors.Name && `error-input-border`}`} 
                  {...register("Name", {required: "Это обязательное поле", min: {value: 1, message: "Значение должно быть больше 0" }})}  />
                </li>
                <li className='inputs__list-item'>
                  <label htmlFor="Company">Company Name</label>
                  {errors.Company && <p className='error-input'>{errors.Company.message}</p>}
                  <input type="text" id='Company' className={`${errors.Company && `error-input-border`}`}
                  {...register("Company", {required: false, minLength: {value: 4, message: "Значение должно быть больше 0" }})}  />
                </li>
                <li className='inputs__list-item'>
                  <label htmlFor="Address">Street Address<span>*</span></label>
                  {errors.Address && <p className='error-input'>{errors.Address.message}</p>}
                  <input type="text" id='Address' className={`${errors.Address && `error-input-border`}`}
                  {...register("Address", {required: "Это обязательное поле", minLength: {value: 10, message: "Введите адрес более подробно (минимум 10 символов)" }})}  />
                </li>
                <li className='inputs__list-item'>
                  <label htmlFor="optional">Apartment, floor, etc. (optional)</label>
                  {errors.Optional && <p className='error-input'>{errors.Optional.message}</p>}
                  <input type="text" id='optional' className={`${errors.Optional && `error-input-border`}`}
                  {...register("Optional", { minLength: {value: 4, message: "Значение должно быть больше 0" }})}  />
                </li>
                <li className='inputs__list-item'>
                  <label htmlFor="City">Town/City<span>*</span></label>
                  {errors.City && <p className='error-input'>{errors.City.message}</p>}
                  <input type="text"  id='City' className={`${errors.City && `error-input-border`}`}
                  {...register("City", {required: "Это обязательное поле", min: {value: 1, message: "Значение должно быть больше 0" }})}  />
                </li>
                <li className='inputs__list-item'>
                  <label htmlFor="Phone">Phone Number<span>*</span></label>
                  {errors.Phone && <p className='error-input'>{errors.Phone.message}</p>}
                  <input type="tel"  id='Phone' className={`${errors.Phone && `error-input-border`}`}
                  {...register("Phone", { 
                    required: "Это обязательное поле", 
                    pattern: { value: /^(?:\+7|8|(?:\+380))?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/, message: "Неверный формат номера" },
                    minLength: {  value: 10, message: "Слишком короткий номер" },
                    onChange: (e) => { e.target.value = e.target.value.replace(/[^\d+]/g, ""); }
                   })} />
                </li>
                <li className='inputs__list-item'>
                  <label htmlFor="Email">Email Address<span>*</span></label>
                  {errors.Email && <p className='error-input'>{errors.Email.message}</p>}
                  <input type="email"  id='Email' className={`${errors.Email && `error-input-border`}`}
                  {...register("Email", { 
                  required: "Электронная почта обязательна", 
                  pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Введите корректный адрес почты (например, example@mail.com)" }
                  })} />
                </li>
               </ul>
              </div>
              <div className='data__checkbox'>
                <label className="customCheckbox">
                 <input type="checkbox"  checked={checkbox}  onChange={CheckboxClik} />
                 <span className="checkmark"></span>
                </label>
                <p className='checkbox__info'>Save this information for faster check-out next time</p>
              </div>
        </form>
  )
}



export default ContentData