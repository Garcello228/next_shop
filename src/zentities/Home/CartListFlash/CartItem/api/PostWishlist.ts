



async function PostWishlist( userId : string, productId : number)
{
    try
    {
        const objectId = {
            userId,
            productId
        }

        const responce = await fetch("/api/postWishlist", {
            method: "POST",
            body: JSON.stringify(objectId),
            headers : {
              "Content-type": "application/json"
            }
        })

        const data = await responce.json();
        if (!responce.ok) {
            throw new Error(data.error || "Что-то пошло не так");
        }

        return data
    }
    catch(error)
    {
       throw error
    }
}

export default PostWishlist