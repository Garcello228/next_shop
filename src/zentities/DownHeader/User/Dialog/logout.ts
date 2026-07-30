'use server'

import { cookies } from "next/headers";

export async function deleteRegisterCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("user_session"); // Серверное удаление работает со всеми типами кук
}