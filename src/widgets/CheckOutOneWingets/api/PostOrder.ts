
interface finalOrders {
  color: string;
  size: string;
  quantity: number;
  productId: number;
  img: string;
  title: string;
  discountPrice: number | undefined;
  Price: number | undefined;
}

interface finalOrder {
    Name: string;
    Company?: string | undefined;
    Address: string;
    Optional?: string | undefined;
    City: string;
    Phone: string;
    Email: string;
    order: finalOrders | null;
    Total: number;
}


interface IPostOrder {
    orderToSend: finalOrder
}

async function PostOrder(orderToSend : IPostOrder)  {
     
   
    const responce = await fetch("/api/postOrderOne", {
            method: "POST",
            body: JSON.stringify(orderToSend),
            headers : {
             "Content-type": "application/json"
            }
    })

    if(!responce.ok)
    {
        const errorData = await responce.json().catch(() => null);
        const errorMessage = JSON.stringify(errorData)  || `Ошибка сервера: ${responce.status}`;
            
        throw new Error(errorMessage);
    }

    return true
}

export default PostOrder