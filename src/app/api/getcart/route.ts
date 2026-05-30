import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import  prisma  from '@/lib/prisma';

export async function GET() {

    const session = await auth();

    try {
        const products = await prisma.user.findFirst({
            where : { id: Number(session?.user.id)},
            include: {
              Cart: {
                include: {
                    product: true
                }
              },
            },
        });

        if(!products)
        {
           return NextResponse.json({ error: "Не удалось загрузить cart" }, { status: 400 });
        }

        return NextResponse.json(products?.Cart);
    } catch (error) {
        console.error("Ошибка добавления в cart:", error);
        return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 }); 
    }
}