"use client"

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ContactUserApi from "./api/ContactUserApi"
import "./ContactUser.scss"

interface IFormInput {
  UserName: string;
  UserEmail: string;
  UserPhone: number;
  UserMessage: string;
 
}

function ContactUser()
{
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
    const [statusMessage, setStatusMessage] = useState('');

    async function onSubmit(data : IFormInput)
    {
        try{
            setStatusMessage("")
            
            await ContactUserApi(data)
            
            reset();
            alert("Сообещение отправлено")
             
             
        } catch(error: unknown) {
            if (error instanceof Error) {
               setStatusMessage(`Ошибка: ${error.message}`);
            }
        }
 
    }
         
 
 

    return(
     <form className="Contact__user" onSubmit={handleSubmit(onSubmit)} noValidate>
         <div className="ввод">
             <div className="inputs">
                 <div className="input-group">
                          
                     {errors.UserName && <p className='error'>{errors.UserName.message}</p>}
                     <input type="text" placeholder="Your Name" className={`m1 ${errors.UserName && 'input-error'}`} 
                     {...register("UserName", {required: "Это обязательное поле"})}/>
                     <span className="required-star"> *</span>
                 </div>
                 <div className="input-group">
                     {errors.UserEmail && <p className='error'>{errors.UserEmail.message}</p>}
                     <input type="email" placeholder="Your Email" className={`m2 ${errors.UserEmail && 'input-error'}`} 
                     {...register("UserEmail", {required: "Это обязательное поле", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Введите корректный email" }})}/>
                     <span className="required-star"> *</span>
                 </div>
                 <div className="input-group">
                     {errors.UserPhone && <p className='error'>{errors.UserPhone.message}</p>}
                     <input type="tel" placeholder="Your Phone" className={`m3 ${errors.UserPhone && 'input-error'}`} 
                     {...register("UserPhone", {required: "Это обязательное поле" , onChange: (e) => {e.target.value = e.target.value.replace(/\D/g, "")},  pattern: { value: /^\+?[1-9]\d{1,14}$/, message: "Введите корректный номер телефона" }, minLength: {value: 11, message: "Напишите полностью телефон"}})}/>
                     <span className="required-star"> *</span>
                 </div>
                     {errors.UserMessage && <p className='error-big'>{errors.UserMessage.message}</p>}
                     <textarea placeholder="Your Massage" className={`большой ${errors.UserMessage && 'input-error'}`}
                     {...register("UserMessage", {required: "Это обязательное поле",  minLength: {value: 5, message: "Напишите нормальное сообщение"}})}/>
             </div>
             {statusMessage && (
                 <p className='error-userInput'>{statusMessage}</p>
             )}
             <button className="btn btn-red" type="submit">Send Massage</button>
         </div>
     </form>
    )
 }
 
 export default ContactUser

            

