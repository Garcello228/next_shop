


async function DeleteCart(id : number)
{
    const responce = await fetch("/api/deleteCart", {
        method : "PATCH",
        body: JSON.stringify({
         CartId: id 
        }),
        headers: {
         "Content-type": "application/json"
        }
    })

    return responce.json()
}

export default DeleteCart



