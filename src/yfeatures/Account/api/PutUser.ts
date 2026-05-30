

interface IEditAccount {
    name: string,
    LastName: string,
    contact?: string,
    email?: string,
    Address: string,
    Pasword?: string,
    newPasword?: string
}

async function PutUser(data : IEditAccount)
{  
    
    try{
      

        const responce = await fetch("/api/updateUser", {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
             "Content-type": "application/json"
            }
        })

        if (!responce.ok) {
            const errorData = await responce.json();
            throw new Error(errorData.error || "Что-то пошло не так");
        }
        
        return await responce.json()
        
    } catch(err) {
        throw err
    }
}

export default PutUser