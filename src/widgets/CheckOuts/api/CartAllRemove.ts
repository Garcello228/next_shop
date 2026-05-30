


async function CartAllRemove()  {
     
    try{

        const response = await fetch("/api/cartAllRemove", {
            method: "PATCH",
        });

       if(!response)
       {
         throw Error(response)
       }

       return true
    }
    catch(error) {
       console.log(error)
    }
}

export default CartAllRemove