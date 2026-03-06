import prisma from './prisma'

export async function getDashboardStats() {
    const start = new Date()
    start.setHours(0, 0, 0, 0)
    const end = new Date()
    end.setHours(23, 59, 59, 999)

    const [totalPatients, todaysOpd, totalDoctors, totalEarnings] = await Promise.all([
        prisma.patients.count(),
        prisma.opd.count({
            where: {
                opd_datetime: {
                    gte: start,
                    lte: end
                }
            }
        }),
        prisma.doctors.count(),
        prisma.receipts.aggregate({
            _sum: {
                amount_paid: true
            }
        })
    ])

    return {
        totalPatients,
        todaysOpd,
        totalDoctors,
        totalEarnings: totalEarnings._sum.amount_paid?.toNumber() || 0
    }
}

export async function getRecentTransactions() {
    const transactions = await prisma.receipts.findMany({
        take: 10,
        orderBy: {
            receipt_date: 'desc'
        },
        include: {
            opd: {
                include: {
                    patients: true
                }
            }
        }
    })

    interface Transaction {
        receipt_id: number
        amount_paid: { toNumber: () => number }
        opd: {
            patients: {
                patient_name: string
                mobile_no: string | null
            }
        }
    }

    return transactions.map((t: any) => {
        const trans = t as Transaction
        return {
            id: trans.receipt_id.toString(),
            name: trans.opd.patients.patient_name,
            amount: trans.amount_paid.toNumber(),
            status: 'paid',
            email: trans.opd.patients.mobile_no || 'No Email',
            paidBy: 'Cash',
            avatar: '',
            avatarFallback: trans.opd.patients.patient_name.substring(0, 2).toUpperCase()
        }
    })
}

export async function getHospitals() {
    return await prisma.hospitals.findMany({
        orderBy: { hospital_id: 'asc' }
    })
}

export async function getDiagnosisTypes() {
    return await prisma.diagnosis_types.findMany({
        orderBy: { diagnosis_type_id: 'asc' }
    })
}

export async function getTreatmentTypes() {
    return await prisma.treatment_types.findMany({
        orderBy: { treatment_type_id: 'asc' }
    })
}

export async function getSubTreatmentTypes() {
    return await prisma.sub_treatment_types.findMany({
        include: {
            treatment_types: true // to show parent treatment type name
        },
        orderBy: { sub_treatment_type_id: 'asc' }
    })
}

export async function getUsers() {
    return await prisma.users.findMany({
        orderBy: { user_id: 'asc' }
    })
}

export async function getDoctors() {
    return await prisma.doctors.findMany({
        include: {
            hospitals: true // to show hospital name
        },
        orderBy: { doctor_id: 'asc' }
    })
}

export async function getPatients() {
    return await prisma.patients.findMany({
        orderBy: { patient_id: 'desc' }
    })
}

export async function getReceipts() {
    return await prisma.receipts.findMany({
        include: {
            opd: {
                include: {
                    patients: true
                }
            }
        },
        orderBy: { receipt_id: 'desc' }
    })
}

export async function getOPDs() {
    return await prisma.opd.findMany({
        include: {
            patients: true,
            doctors: true
        },
        orderBy: { opd_id: 'desc' }
    })
}
