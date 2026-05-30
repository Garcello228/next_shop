
interface IFormInput {
  UserName: string;
  UserEmail: string;
  UserPhone: number;
  UserMessage: string;
 
}

export default async function ContactUserApi(data : IFormInput)
{
    try{
            

        const response = await fetch("/api/usermessage", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                 "Content-type": "application/json"
            }
        });

        if (!response.ok) {
    
            const errorData = await response.json().catch(() => ({})); 
            throw new Error(errorData.error || "Произошла ошибка при отправке");
        }
            


    } catch(error: unknown) {
        throw error
    }
}