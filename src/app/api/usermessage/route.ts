
import { NextResponse, NextRequest } from 'next/server';
import  prisma  from '@/lib/prisma';


export async function POST(request: NextRequest) {

    try{
        const body = await request.json();
        const { UserName, UserEmail, UserPhone, UserMessage } = body;

        const shortInfo = await prisma.usermessage.findFirst({
            where: { email: UserEmail, message: UserMessage, },
        })

        if(shortInfo)
        {
            return NextResponse.json(
              { error: "Вы уже отправляли такое сообщение" }, 
              { status: 400 }
            );
        }
    
        const newMessage = await prisma.usermessage.create({
         data: {
          name: UserName,
          email: UserEmail,
          phone: UserPhone,
          message: UserMessage,
         },
        });

        return NextResponse.json(newMessage);
    } catch(error){

        if (error instanceof Error) {
            return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
        }

        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}
