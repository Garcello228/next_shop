import { NextResponse } from 'next/server';
import { cookies } from "next/headers"; 

export const dynamic = 'force-dynamic';

export async function DELETE() {
    try {
        const cookieStore = await cookies();
        
        if (!cookieStore.has('user_session')) {
            return NextResponse.json({ message: 'Куки уже были удалены' }, { status: 400 });
        }

        cookieStore.delete('user_session');

        return NextResponse.json({ success: true, message: 'Кука успешно удалена бэкендом' });
    } catch (error) {

        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}