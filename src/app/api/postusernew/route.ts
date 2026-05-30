import { NextResponse, NextRequest } from 'next/server';
import  prisma  from '@/lib/prisma';
//import { cookies } from "next/headers";
import { signIn } from "@/app/api/auth/[...nextauth]/route";
import { hash } from "bcryptjs";


export async function POST(request: NextRequest) {

    try{

        const body = await request.json();
        const { Name, contact, Pasword } = body;

        const hashedPassword = await hash(Pasword, 10);

        const newUser = await prisma.user.create({
         data: {
          name: Name,
          contact: contact,
          Pasword: hashedPassword,
         },
        });

        if(newUser)
        {
            await signIn("credentials", {
             name: Name,
             contact: contact,
             Pasword: Pasword,
             redirect: false, 
            });
        }

        console.log('Пользователь:', newUser);

        return NextResponse.json(newUser);
        
    } catch(error){

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}