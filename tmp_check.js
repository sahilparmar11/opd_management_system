const { PrismaClient } = require('./lib/generated/prisma');
const prisma = new PrismaClient();
prisma.doctors.findMany({ orderBy: { doctor_id: 'desc' }, take: 2 }).then(d => {
    console.log(JSON.stringify(d, null, 2));
}).finally(() => prisma.$disconnect());
