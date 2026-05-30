import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, productId } = body;

        if (!userId || !productId) {
            return NextResponse.json({ error: "Не указан пользователь или товар" }, { status: 400 });
        }

        const exists = await prisma.cartItem.findUnique({
            where: {
                userId_productId: {
                    userId: Number(userId),
                    productId: productId,
                },
            },
        });

        if (exists) {
            return NextResponse.json({ error: "Этот товар вы уже добавляли" }, { status: 400 });
        }

        const newItem = await prisma.cartItem.create({
            data: {
                userId: Number(userId),
                productId: productId,
            },
            include: {
                product: true, 
            }
        });

        return NextResponse.json({ success: true, item: newItem }, { status: 200 });

    } catch (error) {
        console.error("Ошибка добавления в вишлист:", error);
        return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
    }
}
