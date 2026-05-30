


async function DeleteWishlist(id : number)
{
    const responce = await fetch("/api/deleteWishlist", {
        method : "PATCH",
        body: JSON.stringify({
         WishlistId: id 
        }),
        headers: {
         "Content-type": "application/json"
        }
    })

    return responce.json()
}

export default DeleteWishlist
