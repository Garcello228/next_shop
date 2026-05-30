import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import  prisma  from '@/lib/prisma';

export async function GET() {

    const session = await auth();

    try {
        const products = await prisma.user.findFirst({
            where : { id: Number(session?.user.id)},
            include: {
              Wishlist: {
                include: {
                    product: true
                }
              },
            },
        });

        if(!products)
        {
           return NextResponse.json({ error: "Не удалось загрузить вишлист" }, { status: 400 });
        }

        return NextResponse.json(products?.Wishlist);
    } catch (error) {
        console.error("Ошибка добавления в вишлист:", error);
        return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 }); 
    }
}