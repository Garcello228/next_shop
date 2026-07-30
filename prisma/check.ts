import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import "dotenv/config" // Позволяет читать процессы из .env

// 1. Создаем пул соединений с помощью стандартного JS-драйвера 'pg'
const pool = new pg.Pool({ 
  connectionString: process.env.DATABASE_URL 
})

// 2. Оборачиваем его в адаптер Prisma 7
const adapter = new PrismaPg(pool)

// 3. Передаем адаптер в клиент (теперь TypeScript не будет ругаться)
const prisma = new PrismaClient({ adapter })

async function check() {
  try {

    const userWithWishlist = await prisma.product.findMany({
      include: {
        color: true
      }
    });
    
  
    console.log('--- ДАННЫЕ usermessage ---')
    console.dir(userWithWishlist, { depth: null })
  } catch (error) {
    console.error('Ошибка при запросе к базе:', error)
  }
}

check().finally(async () => {
  await prisma.$disconnect()
  await pool.end()
})
