import "dotenv/config"; // Обязательно импортируем dotenv для чтения файла .env
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Явно указываем Prisma брать строку подключения из .env
    url: env("DATABASE_URL"), 
  },
});
