import { NextResponse } from 'next/server';
import { auth } from '../auth/[...nextauth]/route';
import  prisma  from '@/lib/prisma';


export async function PATCH() {
    try {
       
        const session = await auth();

        const clearCart = await prisma.cartItem.deleteMany({
            where: {
              userId: Number(session?.user.id),
            },
        });
        
        if (clearCart)
        {
            return NextResponse.json({ success: true, message: 'корзина очистина' });
        } else {
            return NextResponse.json({ error: 'Произошла огибка при удаление' }, { status: 500 });
        }
        
        
    } catch (error) {

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}



























