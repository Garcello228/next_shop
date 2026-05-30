import { NextResponse, NextRequest } from 'next/server';
import  prisma  from '@/lib/prisma';
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { compare, hash  } from "bcryptjs";



interface IEditAccount {
    name: string,
    LastName: string,
    contact?: string,
    email?: string,
    Address: string,
    Pasword?: string,
    newPasword?: string
}


export async function PATCH(request: NextRequest) {

    try{
        
        const session = await auth();
        
        const body : IEditAccount = await request.json();

        let hashedPassword;
        
        if(body.Pasword)
        {
            const findUser = await prisma.user.findFirst({
                where: {
                 id: Number(session?.user.id)
                },
            });

            if(findUser)
            { 
                const isPasswordValid = await compare(body.Pasword , findUser.Pasword);

                if(!isPasswordValid)
                {
                    return NextResponse.json({ error: "Неверный текущий пароль" }, { status: 400 })
                }

                hashedPassword = await hash(body.newPasword as string, 10);
            }

        }

        const updateUser = await prisma.user.update({
         where: { id: Number(session?.user.id) },
         data: {
            name: body.name,
            LastName: body.LastName,
            contact: (body.contact && body.contact.trim() !== "") ? body.contact : undefined,
            email: (body.email && body.email.trim() !== "") ? body.email : undefined,
            Address: body.Address,
            Pasword: (body.newPasword && body.newPasword.trim() !== "") ? hashedPassword : undefined,
         }
        });
        
        console.log("обновление",updateUser)
        return NextResponse.json(updateUser);
        
    } catch(error){

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}