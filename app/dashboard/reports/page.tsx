"use client"

import { useData } from "@/context/DataContext"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Activity, Users, Stethoscope, Banknote } from "lucide-react"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

export default function ReportsPage() {
    const { data, loading } = useData()

    if (loading || !data) {
        return <div className="p-8 text-center text-muted-foreground animate-pulse flex flex-col items-center justify-center min-h-[50vh]">
            <Activity className="h-10 w-10 text-primary animate-bounce mb-4" />
            <p>Loading reports...</p>
        </div>
    }

    const { patients = [], doctors = [], opds = [], receipts = [] } = data

    // Calculate basic stats
    const totalPatients = patients.length
    const totalDoctors = doctors.length
    const totalOPD = opds.length
    
    // Calculate total revenue, only from receipts that are NOT cancelled
    const validReceipts = receipts.filter((r) => !r.cancellation_datetime)
    const totalRevenue = validReceipts.reduce((sum, r) => sum + Number(r.amount_paid || 0), 0)

    // Group receipts by date for the chart
    const revenueByDateMap: Record<string, number> = {}
    validReceipts.forEach(r => {
        const dateStr = new Date(r.receipt_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
        if (!revenueByDateMap[dateStr]) {
            revenueByDateMap[dateStr] = 0
        }
        revenueByDateMap[dateStr] += Number(r.amount_paid || 0)
    })

    const chartData = Object.entries(revenueByDateMap)
        .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
        .map(([date, revenue]) => ({
            name: date,
            Revenue: revenue
        })).slice(-14) // Last 14 active days

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
                <p className="text-muted-foreground mt-1">
                    An overview of hospital performance and clinical metrics.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-card to-muted border-t-4 border-t-primary">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <Banknote className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            From {validReceipts.length} successful receipts
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-muted border-t-4 border-t-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                        <Users className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalPatients}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Registered in the system
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-muted border-t-4 border-t-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total OPD Entries</CardTitle>
                        <Activity className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalOPD}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Lifetime OPD visits
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-muted border-t-4 border-t-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Doctors</CardTitle>
                        <Stethoscope className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalDoctors}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Staff members
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                        <CardDescription>
                            Daily revenue from receipts for recent active days.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-2">
                        {chartData.length > 0 ? (
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                                        <XAxis 
                                            dataKey="name" 
                                            stroke="#888888" 
                                            fontSize={12} 
                                            tickLine={false} 
                                            axisLine={false} 
                                        />
                                        <YAxis
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) => `₹${value}`}
                                        />
                                        <Tooltip 
                                            cursor={{fill: 'var(--muted)'}}
                                            contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--background)' }}
                                        />
                                        <Bar 
                                            dataKey="Revenue" 
                                            fill="currentColor" 
                                            radius={[4, 4, 0, 0]} 
                                            className="fill-primary"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <div className="h-[350px] w-full flex items-center justify-center border border-dashed rounded-md">
                                <p className="text-muted-foreground">No recent revenue data available.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="col-span-4 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent OPD Flow</CardTitle>
                        <CardDescription>
                            Summary of the latest OPD registries.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {opds.slice(-5).reverse().map((opd: any) => (
                                <div className="flex items-center" key={opd.opd_id}>
                                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                                        <Activity className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {opd.patients?.patient_name || 'Unknown Patient'}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Doctor: {opd.doctors?.doctor_name || 'N/A'}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-sm">
                                        OPD #{opd.opd_no}
                                    </div>
                                </div>
                            ))}
                            {opds.length === 0 && (
                                <div className="text-center text-muted-foreground py-8 border border-dashed rounded-md">
                                    No records to show.
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
