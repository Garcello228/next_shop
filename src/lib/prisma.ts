import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const prismaClientSingleton = () => {
  // 1. Создаем стандартный пул соединений через пакет 'pg'
  const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL 
  });
  
  // 2. Оборачиваем его в официальный адаптер Prisma 7
  const adapter = new PrismaPg(pool);
  
  // 3. Передаем адаптер напрямую в конструктор (это решит проблему с типами и ошибкой P1017)
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
