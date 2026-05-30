import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../auth/[...nextauth]/route';
import  prisma  from '@/lib/prisma';


export async function PATCH(request: NextRequest) {
    try {
       
        const session = await auth();
        const body = await request.json();
        const { CartId } = body;

        await prisma.cartItem.delete({
            where: {
                userId_productId: {
                  userId: Number(session?.user.id),  
                  productId: CartId,
                },
            },
        });

        return NextResponse.json({ success: true, message: 'Кука успешно удалена бэкендом' });
    } catch (error) {

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}