import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

interface IParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: IParams) {

    try{

        const { id } = await params;
        console.log("Пришёл в api", id)
        const product = await prisma.product.findUnique({ 
            where: { id: Number(id) },
            include: {
              color: true,
            },
        });

        return NextResponse.json(product);
        
    } catch(error){

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}
        


