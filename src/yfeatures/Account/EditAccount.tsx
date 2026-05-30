"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from "next-auth/react";
import PutUser from "./api/PutUser"
import "./EditAccount.scss"


interface IEditAccount {
    name: string,
    LastName: string,
    contact?: string,
    email?: string,
    Address: string,
    Pasword?: string,
    newPasword?: string
}

function EditAccount()
{ 
    const { data: session, update } = useSession();
   
    const userEmail = session?.user.contact?.includes('@') 
    ? session.user.contact 
    : session?.user.email; 


    const { register, handleSubmit, formState: { errors } } = useForm<IEditAccount>();

    const [ errorMessage, setErrorMessage ] = useState("");
    const [passError, setPassError] = useState("");  

    
    
    const [password, setpassword] = useState("");
    const length = password.length > 0

    const [newpassword, setnewpassword] = useState("");
    const newlength = newpassword.length > 0
    const Повторение = newpassword === password

    const [confirpassword, setconfirpassword] = useState("");
    const confir = confirpassword === newpassword
    const confirlength = confirpassword.length > 0


    const onSubmit = async (data : IEditAccount) => {
       

       setErrorMessage("")
       setPassError("")
       
        try{


            if(length || newlength || confirlength)
            {
                
                if(!newlength)
                {
                  setPassError("Текущий пароль написан неправильно");
                  return
                }

                if(Повторение)
                {
                  setPassError("Новый пароль не должен быть пустым");
                  return
                }

                if(!confir)
                {
                    setPassError("Новый пароль не должен быть таким же как текущий");
                   return
                }
            }

            const Put = await PutUser(data);

            if (Put) {
     
                await update({
                    user: {
                      ...session?.user,
                      ...Put, 
                    },
                });

                alert("Изменения произошли!")
                window.location.reload();
            }
           
        } catch(err) {
  
            if (err instanceof Error)
            {
                
               setErrorMessage(err.message);
               console.log("Ошибка")
            }
  
        }
        
    }
            

   
    return(
        <form className="content__right" onSubmit={handleSubmit(onSubmit)}  noValidate>
            <h3 className="title">Edit Your Profile</h3>
            <div className="inputs">
                <div className="inputs__user">
                    <ul className="list">
                        <li className="list-item">
                            <div className='label'>
                                <label htmlFor="FirstName">First Name</label>
                                {errors.name && <p className='error'>{errors.name.message}</p>}
                            </div>
                            <input type="text" placeholder={session?.user.name} id="FirstName"
                            {...register("name", {required: "Это обязательное поле" })}/>
                        </li>
                        <li className="list-item">
                            <div className='label'>
                                <label htmlFor="LastName">Last Name</label>
                                {errors.LastName && <p className='error'>{errors.LastName.message}</p>}
                            </div>
                                    
                            <input type="text" placeholder={session?.user.LastName ? session.user.LastName : "Можете добавить фамилию"} id="LastName"
                            {...register("LastName", {required: "Это обязательное поле", min: {value: 2, message: "Значение должно быть больше 2 букв" } })}
                            className={errors.LastName ? 'input-error' : ''}
                            />
                        </li>
                        <li className="list-item">
                            <div className='label'>
                                <label htmlFor="email">Email</label>
                                {errors.contact && <p className='error'>{errors.contact.message}</p>}
                                {errors.email && <p className='error'>{errors.email.message}</p>}
                            </div>
                            <input type="email" placeholder={userEmail ? userEmail : "Можете добавить почту"}  id="email"
                            {...register(userEmail === session?.user.contact ? "contact" : "email", {required: "Это обязательное поле" , pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Неверный формат почты"}})}
                            className={errorMessage ? 'input-error' : ''}/>
                        </li>
                        <li className="list-item">
                            <div className='label'>
                                <label htmlFor="address">Address</label>
                                {errors.Address && <p className='error'>{errors.Address.message}</p>}
                            </div>
                            <input type="text" placeholder={session?.user.Address ? session.user.Address : "Можете добавить адрес"} id="address"
                            {...register("Address", {required: "Это обязательное поле", min: {value: 5, message: "напишите коректную почту" } })}/>
                        </li>
                    </ul>
                </div>
                <div className="inputs__Passwords">
                    <h4 className="Pass__title">Password Changes</h4>
                    <div className="Pass__inputs">
                        <input type="text" placeholder="Current Passwod" value={password} {...register("Pasword" , {onChange: (e) => setpassword(e.target.value)})}/>
                        { errorMessage ? <p className='error'>Текущий пароль написан неправильно</p> : ""}
                        <input type="text" placeholder="New Passwod" value={newpassword} onChange={(e) => setnewpassword(e.target.value)} />
                        {!newlength && passError ? <p className='error'>Новый пароль не должен быть пустым</p> : ""}
                        {Повторение && passError ? <p className='error'>Новый пароль не должен быть таким же как текущий</p> : ""}
                        <input type="text" placeholder="Confirm New Passwod" value={confirpassword}  {...register("newPasword", {onChange: (e) => setconfirpassword(e.target.value)})}/>
                        {!confir && passError ? <p className='error'>Неправильно повтороли новый пароль</p> : ""}
                    </div>
                </div>
            </div>
                        
            <div className="btn">
                <button className="btn__cancel" type="reset">Cancel</button>
                <button className="btn__submit" type="submit">Save Changes</button>
            </div>
        </form>
    )
}

export default EditAccount
