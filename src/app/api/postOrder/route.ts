import { NextResponse, NextRequest } from 'next/server';
import { IProductInCart } from "../../../../next-auth";
import  prisma  from '@/lib/prisma';

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
    CartItems: ICartItems[] 
    Total: number;
}

interface IPostOrder {
    orderToSend: IorderToSend
}



export async function POST(request: NextRequest) {

    try{
        console.log("Пришли на бэк")
        const body : IPostOrder = await request.json();

        const itemsToCreate = Array.isArray(body.orderToSend.CartItems) 
        ? body.orderToSend.CartItems.map((item) => ({
          quantity: Number(item.quantity),
          productId: Number(item.productId),
        }))
        : [];


        const newOrders = await prisma.orders.create({
         data: {
          name: body.orderToSend.Name,
          company: body?.orderToSend?.Company,
          address: body.orderToSend.Address,
          optional: body?.orderToSend?.Optional,
          city: body.orderToSend.City,
          phone: body.orderToSend.Phone,
          email: body.orderToSend.Email,
          total : Math.round(Number(body.orderToSend.Total || 0)),
          orderItems: {
            create: itemsToCreate
          }
         },
         include: {
            orderItems: {
                include: {
                  product: true
                }
           }
        }
        }); 

        
        console.log('Заказ:', newOrders);
        return NextResponse.json(newOrders);
    
    
        
    } catch(error){

        console.log("!!! Ошибка выполнения запроса на бэкенде !!!");
        console.error(error);

        return NextResponse.json({ message: error || 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}