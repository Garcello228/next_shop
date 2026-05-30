import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import "dotenv/config"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  try {
    console.log('⏳ Начало полной очистки таблиц товаров...')

    const deleteColors = await prisma.productColor.deleteMany()
    console.log(`🗑️ Удалено записей из ProductColor: ${deleteColors.count}`)

    // 2. Затем удаляем сами товары
    const deleteProducts = await prisma.product.deleteMany()
    console.log(`🗑️ Удалено записей из Product: ${deleteProducts.count}`)

    console.log('✅ База данных успешно очищена от старых товаров!')
  } catch (error) {
    console.error('❌ Ошибка при очистке базы данных:', error)
  }
}

main().finally(async () => {
  await prisma.$disconnect()
  await pool.end()
})