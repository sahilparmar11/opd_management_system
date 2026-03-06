import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const totalPatients = await prisma.patients.count()

        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        const todayOpd = await prisma.opd.count({
            where: {
                opd_datetime: {
                    gte: today,
                    lt: tomorrow,
                },
            },
        })

        // 3. Active Doctors (Assuming all listed are active, or filter by logic if needed)
        // The schema doesn't have an 'is_active' boolean for doctors, but diagnosis_types has.
        // We'll just count all for now.
        const activeDoctors = await prisma.doctors.count()

        // 4. Total Revenue from Receipts
        // Need to sum amount_paid from receipts
        const revenueAgg = await prisma.receipts.aggregate({
            _sum: {
                amount_paid: true,
            },
        })
        const totalRevenue = revenueAgg._sum.amount_paid || 0

        // 5. Recent Activity (Latest 5 OPD visits)
        const recentActivity = await prisma.opd.findMany({
            take: 5,
            orderBy: {
                opd_datetime: 'desc',
            },
            include: {
                patients: {
                    select: {
                        patient_name: true,
                        patient_no: true,
                        gender: true
                    }
                },
                doctors: {
                    select: {
                        doctor_name: true
                    }
                }
            }
        })

        // 6. Chart Data: Last 7 days OPD counts
        // This is a bit complex with Prisma raw query or loop. 
        // Simplify: fetch last 7 days OPD and aggregate in JS.
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

        const last7DaysOpd = await prisma.opd.findMany({
            where: {
                opd_datetime: {
                    gte: sevenDaysAgo
                }
            },
            select: {
                opd_datetime: true
            }
        })

        // Process for chart
        const chartDataMap: Record<string, number> = {}
        // Initialize last 7 days with 0
        for (let i = 6; i >= 0; i--) {
            const d = new Date()
            d.setDate(d.getDate() - i)
            const dateStr = d.toISOString().split('T')[0] // YYYY-MM-DD
            chartDataMap[dateStr] = 0
        }

        last7DaysOpd.forEach((opd: { opd_datetime: Date }) => {
            const dateStr = opd.opd_datetime.toISOString().split('T')[0]
            if (chartDataMap[dateStr] !== undefined) {
                chartDataMap[dateStr]++
            }
        })

        const chartData = Object.keys(chartDataMap).map(date => ({
            date,
            visits: chartDataMap[date]
        }))


        return NextResponse.json({
            totalPatients,
            todayOpd,
            activeDoctors,
            totalRevenue,
            recentActivity,
            chartData
        })
    } catch (error) {
        console.error('Dashboard Stats Error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch dashboard stats' },
            { status: 500 }
        )
    }
}
