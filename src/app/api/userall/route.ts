import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';


export async function GET() {

    try{

        const userall = await prisma.user.findMany({
            select: {
                contact: true,
            },
        });

        return NextResponse.json(userall);
         
        
    } catch(error){

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}