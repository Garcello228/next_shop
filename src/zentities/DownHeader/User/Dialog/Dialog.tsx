'use client';

import { FC , RefObject } from 'react';
import { signOut } from "next-auth/react";
import Link from "next/link"
import "./Dialog.scss"

interface DialogProps {
  ref: RefObject<HTMLDialogElement | null>;
}
  

const Dialog: FC<DialogProps> = ( {ref} ) =>
{

  const closeModal = () => {
      ref.current?.close();
  };

  async function ExitAccount() {

   ref.current?.close();

   try {
     await fetch('/api/deleteCookies', { 
       method: 'DELETE',
       credentials: 'include' 
     });
   } catch (e) {
     console.error("Ошибка при удалении куки регистрации:", e);
   }
   await signOut({ 
     callbackUrl: window.location.origin + '?logout=true' 
   });
 
   window.location.reload();

 
 }
  
  
  
 return(
       <dialog ref={ref} className="my-dialog">
           <h1>Are you sure you want to log out of your account?</h1>
           <div className='buttons'>
            <button  className='remove' onClick={ExitAccount}> <Link href="/">exit</Link></button>
            <button className='отмена' onClick={closeModal}>cancellation</button>
           </div>
       </dialog>
 )
}

export default Dialog
  

 
    
    
    
   