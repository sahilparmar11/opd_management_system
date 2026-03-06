
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    console.log('Checking Users...')
    const users = await prisma.users.findMany()
    console.log('Users found:', users)

    console.log('Checking OPD...')
    const opd = await prisma.opd.findMany({ take: 5 })
    console.log('OPD entries found:', opd.length)

    console.log('Checking Payment Mode ID 1...')
    try {
        // payment_modes is not in schema, so we can't query it directly with prisma model
        // But we can try to insert a receipt and catch the specific error
        console.log('Skipping direct payment_mode check as it is not in Prisma schema.')
    } catch (e) {
        console.error(e)
    }

    // Check if we can find any existing receipts to see what payment_mode_id they use
    const receipts = await prisma.receipts.findFirst()
    if (receipts) {
        console.log('Existing receipt found with payment_mode_id:', receipts.payment_mode_id)
    } else {
        console.log('No existing receipts to check payment_mode_id.')
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
