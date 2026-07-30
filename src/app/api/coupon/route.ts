import { NextRequest, NextResponse } from "next/server";
import  prisma  from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {

      const { searchParams } = new URL(request.url);
      const couponName = searchParams.get("name");
        
      const coupon = await prisma.coupon.findFirst({
        where: {
          name: couponName as string
        }
      });

      if(!coupon)
      {
        return NextResponse.json(
        { success: false, error: "Такой купон не существует или истек" },
        { status: 404 }
        );
      }

      return NextResponse.json({ success: true });
    } catch (error) {

      console.error("Ошибка при проверке купона:", error);
      return NextResponse.json(
        {  success: false, error: "Внутренняя ошибка сервера" },
        { status: 500 }
      );
      
    }
}
      
      