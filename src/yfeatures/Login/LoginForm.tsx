"use client"

import { useSession } from "next-auth/react";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ErrorNotification from '@/zentities/SignUp/Error';
import PostLoginUser from "./api/LoginFormApi"
import IFormInput from "./tupe/IFormInput"
import "./LoginForm.scss"



function LoginForm()
{
    const router = useRouter();
    const { data: session } = useSession();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
    const [ errorMessage, setErrorMessage ] = useState("");

    const searchParams = useSearchParams();
    const error = searchParams?.get("error");

    useEffect(() => {
      if (error === "auth_required") {
        alert("Чтобы пользоваться этой страницей, нужно войти в аккаунт");
      }
    }, [error]);


    const onSubmit = async (data : IFormInput) => {
      
       setErrorMessage("");

        try
        {
          await PostLoginUser(data);
          reset();
          alert("Вы вошли")
          router.refresh();
        }
        catch(err){

            if (err instanceof Error) {
               
                switch (err.message) {
                  case "MissingFields":
                   setErrorMessage("Пожалуйста, заполните все обязательные поля.");
                  break;
                  case "UserNotFound":
                   setErrorMessage("Пользователь с таким контактом не зарегистрирован.");
                  break;
                  case "InvalidPassword":
                   setErrorMessage("Неверный пароль. Попробуйте еще раз.");
                  break;
                  default:
                  setErrorMessage("Произошла ошибка при входе. Повторите позже.");
                }
            }
        }
    }
            

   
    return(
        <div className='User-form'>
            <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='form__title'>
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                </div>
                <div className={`form__inputs ${errors ? 'form-error' : ''}`}> 
                    {errors.contact && <p className='error'>{errors.contact.message}</p>}
                    <input className={errors.contact ? 'input-error' : ''} type="text" placeholder='Email or Phone Number'  {...register("contact", {required: "Это обязательное поле", pattern: {value: /^([^\s@]+@[^\s@]+\.[^\s@]+|\+?[0-9]{10,14})$/, message: "Неверный формат почты или телефона"} })}  />
                    {errors.Pasword && <p className='error'>{errors.Pasword.message}</p>}
                    <input className={errors.Pasword ? 'input-error' : ''} type="password" placeholder='Password'   {...register("Pasword", {required: "Это обязательное поле", min: {value: 1, message: "Значение должно быть больше 0" }})} /> 
                </div>
                <div className='form__buttonss'>
                    <button className={`btn-submit ${ session ? `btn-true` : ``}`} type='submit' disabled={session !==null}>
                        Log In
                        <span className="tooltip">Вы уже вошли в аккаунт</span>
                    </button>
                    <a className='btn-забыл' href='#'>
                        Forget Password?
                    </a>
                </div>
            </form>
            <ErrorNotification  message={errorMessage}/>
        </div>
    )
}

export default LoginForm
                      
                      
                      
                      