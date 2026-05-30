import { signIn } from 'next-auth/react';
import IFormInput from "../tupe/IFormInput"


export default async function PostLoginUser(data : IFormInput)
{ 
   try{
        console.log("Данные из формы перед отправкой в NextAuth:", data);
        const resp = await signIn('credentials', {
          contact: data.contact,
          Pasword: data.Pasword, 
          redirect: false,
        });

        if (resp?.error) {
            
          const customCode = resp.code; 

          if (customCode) {
               
            throw new Error(customCode); 
          }
            
           
          throw new Error(resp.error); 
        }

      return resp;

    } catch(error) {
      throw error; 
    }
}