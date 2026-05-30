import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import "dotenv/config"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  try {
    console.log('⏳ Начало добавление купона')
    const AddCoupon = await prisma.user.deleteMany()
    console.log(`🗑️ Удалено: ${AddCoupon}`)
  } catch (error) {
    console.error('❌ Ошибка при очистке базы данных:', error)
  }
}

main().finally(async () => {
  await prisma.$disconnect()
  await pool.end()
})