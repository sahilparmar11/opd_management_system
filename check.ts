import prisma from './lib/prisma'

async function main() {
  const doctors = await prisma.doctors.findMany({ orderBy: { doctor_id: 'desc' }, take: 2 })
  console.log(JSON.stringify(doctors, null, 2))
}

main().finally(() => prisma.$disconnect())
