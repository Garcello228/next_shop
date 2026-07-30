


async function GetProductId(id : string)
{
    try{
        console.log("Пришёл", id)
        const responce = await fetch(`/api/getProductId/${id}`)

        if (!responce.ok) {
    
            console.log("responce false", id)
            const errorData = await responce.json().catch(() => ({})); 
            throw new Error(errorData.error || "Произошла ошибка при отправке");
        }

        return responce.json()
    } catch(error)
    {
       throw error
    }
}

export default GetProductId