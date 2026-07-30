


async function RemoveWis(id :number)  {
     
    try{
        const responce = await fetch("/api/removeWis", {
            method: "PATCH",
            body: JSON.stringify({id}),
            headers : {
             "Content-type": "application/json"
            }
        })

       if (!responce.ok) {
            throw new Error(`Ошибка удаления: ${responce}`);
        }

       return true
    }
    catch(error) {
        console.error("Ошибка в функции RemoveWis:", error);
        throw error; 
    }
}

export default RemoveWis