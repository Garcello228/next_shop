import IFormInput from "../type/type"

interface User{
    contact: string;
}


export default async function PostUserNew(data : IFormInput)
{
    try{

        const isEmail = data.contact.includes('@');
        const cleanInput = isEmail 
        ? data.contact.toLowerCase().trim() 
        : data.contact.replace(/\D/g, ''); 

        const responseAll = await fetch("/api/userall");
        const allUsers = await responseAll.json();
        const usersArray = Array.isArray(allUsers) ? allUsers : [];

       const duplicate = usersArray.find((user: User) => {
         const dbContact = user.contact.toLowerCase().trim();
         const dbClean = dbContact.includes('@') ? dbContact : dbContact.replace(/\D/g, '');
         return dbClean === cleanInput;
       });

       if (duplicate) {
         throw new Error(isEmail ? "Эта почта уже занята!" : "Этот телефон уже занят!");
       }

       const dataWithUnique = {  ...data, contact: cleanInput};


        const response = await fetch("/api/postusernew", {
            method: "POST",
            body: JSON.stringify(dataWithUnique),
            headers : {
              "Content-type": "application/json"
            }
        });

        if (!response.ok) {
    
          const errorData = await response.json().catch(() => ({})); 
          throw new Error(errorData.error || "Произошла ошибка при отправке");
        }
      
    }
    catch(error){
      throw error; 
    }
}


