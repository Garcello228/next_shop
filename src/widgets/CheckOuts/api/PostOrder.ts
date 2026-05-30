import { IProductInCart } from "../../../../next-auth";

interface ICartItems {
  quantity: number;
  id: number;
  createdAt: Date;
  userId: number;
  productId: number;
  product: IProductInCart;
}


interface IorderToSend {
    Name: string;
    Company?: string | null;
    Address: string;
    Optional?: string | null;
    City: string;
    Phone: string;
    Email: string;
    CartItems: ICartItems[];
    Total: number;
}


interface IPostOrder {
    orderToSend: IorderToSend
}

async function PostOrder(orderToSend : IPostOrder)  {
     
   
    console.log("Пришли на запрос на сервер")
    const responce = await fetch("/api/postOrder", {
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