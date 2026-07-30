import { NextResponse, NextRequest } from 'next/server';
import  prisma  from '@/lib/prisma';

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



export async function POST(request: NextRequest) {

    try{
        const body : IPostOrder = await request.json();


        const newOrders = await prisma.order.create({
         data: {
          name: body.orderToSend.Name,
          company: body?.orderToSend?.Company,
          address: body.orderToSend.Address,
          optional: body?.orderToSend?.Optional,
          city: body.orderToSend.City,
          phone: body.orderToSend.Phone,
          email: body.orderToSend.Email,
          total : Math.round(Number(body.orderToSend.Total || 0)),
          title: body.orderToSend.order?.title ?? "",
          img: body.orderToSend.order?.img ?? "",
          color: body.orderToSend.order?.color ?? "",
          size: body.orderToSend.order?.size ?? "",
          quantity: body.orderToSend.order?.quantity ?? 0,
          price: body.orderToSend.order?.Price ?? 0,
          discountPrice: body.orderToSend.order?.discountPrice ?? 0,
         },
        }); 

        return NextResponse.json(newOrders);
    
    
        
    } catch(error){

        console.error(error);

        return NextResponse.json({ message: error || 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}