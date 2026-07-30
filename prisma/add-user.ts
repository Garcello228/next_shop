import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import "dotenv/config"

// 1. Инициализация подключения по стандартам Prisma 7
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const rawProducts = [
  {
    "id": "1",
    "category": "Gaming",
    "productName": "HAVIT HV-G92 Gamepad",
    "discountPrice": "120",
    "Price": "160",
    "grade": "5",
    "reviews": "88",
    "discount": "40",
    "img": "/images/cart/приставка.png",
    "description": "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "2",
    "category": "Gaming",
    "productName": "AK-900 Wired Keyboard",
    "discountPrice": "960",
    "Price": "1160",
    "grade": "4",
    "reviews": "75",
    "discount": "35",
    "img": "/images/cart/клава.png",
    "description": "AK-900 Wired Keyboard Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "3",
    "category": "Gaming",
    "productName": "IPS LCD Gaming Monitor",
    "discountPrice": "370",
    "Price": "400",
    "grade": "4",
    "reviews": "89",
    "discount": "30",
    "img": "/images/cart/моник.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "4",
    "category": "Gaming",
    "productName": "RGB liquid CPU Cooler",
    "discountPrice": "160",
    "Price": "170",
    "grade": "4.5",
    "reviews": "65",
    "discount": "25",
    "img": "/images/cart/кулер.png",
    "description": "RGB liquid CPU Cooler High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "5",
    "category": "Gaming",
    "productName": "HAVIT HV-G92 Gamepad",
    "discountPrice": "120",
    "Price": "160",
    "grade": "5",
    "reviews": "88",
    "discount": "40",
    "img": "/images/cart/приставка.png",
    "description": "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "6",
    "category": "Gaming",
    "productName": "AK-900 Wired Keyboard",
    "discountPrice": "960",
    "Price": "1160",
    "grade": "3",
    "reviews": "75",
    "discount": "35",
    "img": "/images/cart/клава.png",
    "description": "AK-900 Wired Keyboard Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "7",
    "category": "Gaming",
    "productName": "IPS LCD Gaming Monitor",
    "discountPrice": "370",
    "Price": "400",
    "grade": "5",
    "reviews": "89",
    "discount": "30",
    "img": "/images/cart/моник.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "8",
    "category": "Gaming",
    "productName": "RGB liquid CPU Cooler",
    "discountPrice": "160",
    "Price": "170",
    "grade": "4.5",
    "reviews": "65",
    "discount": "25",
    "img": "/images/cart/кулер.png",
    "description": "RGB liquid CPU Cooler High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "9",
    "category": "Gaming",
    "productName": "HAVIT HV-G92 Gamepad",
    "discountPrice": "120",
    "Price": "160",
    "grade": "5",
    "reviews": "88",
    "discount": "40",
    "img": "/images/cart/приставка.png",
    "description": "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "10",
    "category": "Gaming",
    "productName": "AK-900 Wired Keyboard",
    "discountPrice": "960",
    "Price": "1160",
    "grade": "3",
    "reviews": "75",
    "discount": "35",
    "img": "/images/cart/клава.png",
    "description": "AK-900 Wired Keyboard Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "11",
    "category": "Gaming",
    "productName": "IPS LCD Gaming Monitor",
    "discountPrice": "370",
    "Price": "400",
    "grade": "5",
    "reviews": "89",
    "discount": "30",
    "img": "/images/cart/моник.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "12",
    "category": "furniture",
    "productName": "S-Series Comfort Chair",
    "discountPrice": "375",
    "Price": "400",
    "grade": "4.5",
    "reviews": "99",
    "discount": "25",
    "img": "/images/cart/стул.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "13",
    "category": "cloth",
    "productName": "The north coat",
    "discountPrice": "260",
    "Price": "360",
    "grade": "5",
    "reviews": "65",
    "img": "/images/cart/курткар.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "14",
    "category": "bags",
    "productName": "Gucci duffle bag",
    "discountPrice": "960",
    "Price": "1160",
    "grade": "4.5",
    "reviews": "65",
    "img": "/images/cart/сумкаg.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "15",
    "category": "furniture",
    "productName": "Small BookSelf",
    "discountPrice": "360",
    "grade": "5",
    "reviews": "65",
    "img": "/images/cart/полка.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "16",
    "category": "food",
    "productName": "Breed Dry Dog Food",
    "discountPrice": "100",
    "grade": "3",
    "reviews": "35",
    "img": "/images/cart/собака.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "17",
    "category": "technique",
    "productName": "CANON EOS DSLR Camera",
    "discountPrice": "360",
    "grade": "4",
    "reviews": "95",
    "img": "/images/cart/камера.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "18",
    "category": "technique",
    "productName": "ASUS FHD Gaming Laptop",
    "discountPrice": "700",
    "grade": "5",
    "reviews": "325",
    "img": "/images/cart/ноут.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "19",
    "category": "care",
    "productName": "Curology Product Set",
    "discountPrice": "500",
    "grade": "4",
    "reviews": "145",
    "img": "/images/cart/крема.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "20",
    "category": "Gaming",
    "productName": "Kids Electric Car",
    "discountPrice": "960",
    "grade": "5",
    "reviews": "65",
    "new": "NEW",
    "color": {
      "one": "#FB1314",
      "two": "#DB4444"
    },
    "img": "/images/cart/машина.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "21",
    "category": "cloth",
    "productName": "Jr. Zoom Soccer Cleats",
    "discountPrice": "1160",
    "grade": "5",
    "reviews": "35",
    "color": {
      "one": "#EEFF61",
      "two": "#DB4444"
    },
    "img": "/images/cart/бутсы.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "22",
    "category": "Gaming",
    "productName": "KGP11 Shooter USB Gamepad",
    "discountPrice": "660",
    "grade": "4.5",
    "reviews": "55",
    "new": "NEW",
    "color": {
      "one": "#000000",
      "two": "#DB4444"
    },
    "img": "/images/cart/джостик.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  },
  {
    "id": "23",
    "category": "cloth",
    "productName": "Quilted Satin Jacket",
    "discountPrice": "660",
    "grade": "4.5",
    "reviews": "55",
    "color": {
      "one": "#000000",
      "two": "#DB4444"
    },
    "img": "/images/cart/бомбер.png",
    "description": "IPS LCD Gaming Monitor High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
  }
]

async function main() {
  try {
    
    console.log('⏳ Начинаем циклическое добавление всех товаров...')

    for (const item of rawProducts) {
      const discountPrice = item.discountPrice ? parseInt(item.discountPrice, 10) : null
      const price = item.Price ? parseInt(item.Price, 10) : null
      const discount = item.discount ? parseInt(item.discount, 10) : null
      const reviews = item.reviews ? parseInt(item.reviews, 10) : 0

      const colorOne = item.color?.one || ""
      const colorTwo = item.color?.two || ""

      const createdProduct = await prisma.product.create({
        data: {
          name: item.productName, 
          category: item.category,
          discountPrice,
          Price: price, 
          grade: item.grade,
          reviews,
          discount,
          new: item.new,
          img: item.img,
          description: item.description,
          color: {
            create: {
              one: colorOne,
              two: colorTwo
            }
          }
        },
        include: {
          color: true
        }
      })
    
      console.log(`📦 Добавлен товар: ${createdProduct.name} с цветами [${createdProduct.color?.one}, ${createdProduct.color?.two}]`)
    }
  } catch (error) {
    console.error('❌ Ошибка при добавлении товара:', error)
  }
}

main().finally(async () => {
  await prisma.$disconnect()
  await pool.end()
})