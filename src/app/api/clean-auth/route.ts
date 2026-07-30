import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();


  cookieStore.delete('next-auth.session-token');
  cookieStore.delete('__Secure-next-auth.session-token');
  cookieStore.delete('next-auth.callback-url');


  return NextResponse.json({ 
    success: true, 
    message: "Куки Auth.js успешно удалены с сервера!" 
  });
}