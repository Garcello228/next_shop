import { NextResponse } from "next/server";
import  prisma  from '@/lib/prisma';

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            include: {
              color: true,
            },
        });

        return NextResponse.json(products);
    } catch (error) {
        if (error instanceof Error) {
          return NextResponse.json(
          { error: "Не удалось загрузить продукты" }, 
          { status: 500 });
        }
  }
}