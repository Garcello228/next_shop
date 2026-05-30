
import { NextResponse, NextRequest } from 'next/server';
import  prisma  from '@/lib/prisma';


export async function POST(request: NextRequest) {

    try{
        const body = await request.json();
        const { UserName, UserEmail, UserPhone, UserMessage } = body;

        const shortInfo = await prisma.usermessage.findMany({
            where: { email: UserEmail },
            select: {
                message: true,
            },
        })

        console.log('shortInfo', shortInfo);

        const result = shortInfo.find(user => user.message === UserMessage);
        if(result)
        {
            throw new Error("Вы такое уже сообщения отпровляли");
        }
    
        const newMessage = await prisma.usermessage.create({
         data: {
          name: UserName,
          email: UserEmail,
          phone: UserPhone,
          message: UserMessage,
         },
        });
        console.log('Сообщение:', newMessage);

        return NextResponse.json(newMessage);
    } catch(error){

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}
