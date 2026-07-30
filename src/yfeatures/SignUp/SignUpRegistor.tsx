"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import IFormInput from "./type/type"
import ErrorNotification from '@/zentities/SignUp/Error';
import PostUserNew from "./api/SignUpRegistorApi"
import Google from './images/Icon-Google.svg';
import "./SignUpRegistor.scss"


 

function SignUpRegistor()
{
    const router = useRouter();
    const { update } = useSession();

    const { data: session } = useSession();
    
    const [ errorMessage, setErrorMessage ] = useState("");

    const { register, handleSubmit, formState: { errors }, reset  } = useForm<IFormInput>();



    const onSubmit = async (data : IFormInput) => {
    
       setErrorMessage("");
    
        try {

           await PostUserNew(data);
           reset();
           alert("Вы зарегистрированы")
           await update(); 
           router.refresh();
    
        } catch (err) {
            
            if (err instanceof Error) {
               setErrorMessage(`${err.message}`);
            }
        }
   
    }


   return(
        <div className='User-form'>
            <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='form__title'>
                    <h1>Create an account</h1>
                    <p>Enter your details below</p>
                </div>
                <div className={`form__inputs ${errors ? 'form-error' : ''}`}> 
                    {errors.Name && <p className='error'>{errors.Name.message}</p>}
                    <input className={errors.Name ? 'input-error' : ''} type="text" placeholder='Name'  {...register("Name", {required: "Это обязательное поле", min: {value: 1, message: "Значение должно быть больше 0" }})}  />
                    {errors.contact && <p className='error'>{errors.contact.message}</p>}
                    <input className={errors.contact ? 'input-error' : ''} type="text" placeholder='Email or Phone Number'  {...register("contact", {required: "Это обязательное поле", pattern: {value: /^([^\s@]+@[^\s@]+\.[^\s@]+|\+?[0-9]{10,14})$/, message: "Неверный формат почты или телефона"} })}   />
                    {errors.Pasword && <p className='error'>{errors.Pasword.message}</p>}
                    <input className={errors.Pasword ? 'input-error' : ''} type="password" placeholder='Password'   {...register("Pasword", {required: "Это обязательное поле", min: {value: 1, message: "Значение должно быть больше 0" }})}  /> 
                      
                </div>
                <div className='form__buttons'>
                    <button className={`btn-submit ${ session ? 'btn-true' : ''}`} type='submit'  disabled={session !== null}>
                        Create Account
                        <span className="tooltip">Вы уже зарегистрировались</span>
                    </button>
                    <a className={`btn-google ${ session ? `btn-google-true` : ``}`} href="https://www.google.com/?hl=RU" target="_blank" >
                        <Google className="google-fixed-colors" alt="" />
                        <p>Sign up with Google</p>
                    </a>
                </div>
            </form>
            <div className='Вход'>
                <p>Already have account?</p>
                <Link href="/login" className="логин">
                  Log in
                </Link>
            </div>
            <ErrorNotification  message={errorMessage}/>
                
        </div>
   )
}

export default SignUpRegistor