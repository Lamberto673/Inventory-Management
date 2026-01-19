import "dotenv/config"
import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter });

async function main() {
    const demoUserId = "50a8bd9d-5a23-4edd-a133-936b9770812c"

    await prisma.product.createMany({
        data: Array.from({length: 25}).map((_, i) => ({
            userId: demoUserId,
            name: `Product ${i+1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random() * 20),
            lowStock: 5,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i*5)),
        }))
    })
    console.log("seed data created successfully")
    console.log(`Created 25 products for user ID:${demoUserId}`);
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})