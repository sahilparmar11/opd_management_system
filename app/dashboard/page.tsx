'use client'

import React, { useMemo } from 'react'
import {
  Users,
  Activity,
  Stethoscope,
  CreditCard,
  TrendingUp,
} from 'lucide-react'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useData } from '@/context/DataContext'
import { Skeleton } from '@/components/ui/skeleton'

export default function Dashboard() {
  const { data, loading } = useData()
  
  const stats = useMemo(() => {
    if (!data) return null
    
    // Total Patients
    const totalPatients = data.patients.length
    
    // Today's OPD Filter
    const todayStr = new Date().toDateString()
    const todaysOpds = data.opds.filter(opd => new Date(opd.opd_datetime).toDateString() === todayStr)
    const todayOpdCount = todaysOpds.length
    
    // Total Doctors
    const totalDoctorsCount = data.doctors.length
    
    // Today's Revenue
    const todaysReceipts = data.receipts.filter(r => new Date(r.receipt_date).toDateString() === todayStr && !r.cancellation_datetime)
    const totalRevenue = todaysReceipts.reduce((acc, r) => acc + Number(r.amount_paid), 0)
    
    // Recent Activity (last 5 OPDs)
    const recentActivity = [...data.opds]
      .sort((a, b) => new Date(b.opd_datetime).getTime() - new Date(a.opd_datetime).getTime())
      .slice(0, 5)
      
    // 7 Days Chart Data
    const chartData = []
    for(let i=6; i>=0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      d.setHours(0,0,0,0)
      
      const visits = data.patients.filter(p => new Date(p.registration_datetime).toDateString() === d.toDateString()).length
      chartData.push({
        date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        visits
      })
    }

    // Top 5 Doctors Bar Chart
    const doctorCounts: Record<string, number> = {}
    data.opds.forEach(opd => {
        const name = opd.doctors?.doctor_name || 'Unknown'
        doctorCounts[name] = (doctorCounts[name] || 0) + 1
    })
    
    const doctorChartData = Object.entries(doctorCounts)
      .map(([name, count]) => ({ name, patients: count }))
      .sort((a,b) => b.patients - a.patients)
      .slice(0, 5)
      
    return {
      totalPatients,
      todayOpdCount,
      totalDoctorsCount,
      totalRevenue,
      recentActivity,
      chartData,
      doctorChartData
    }
  }, [data])

  if (loading) return <DashboardSkeleton />
  if (!stats) return <div className="p-8 text-center text-muted-foreground">Failed to calculate realtime statistics.</div>

  return (
      <div className="flex flex-col gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Real-time overview of hospital operations computed instantly.
          </p>
        </div>

        {/* top row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Patients" value={stats.totalPatients} icon={Users} description="Lifetime registered" />
            <StatsCard title="Today's OPD" value={stats.todayOpdCount} icon={Activity} description="Cases registered today" />
            <StatsCard title="Total Doctors" value={stats.totalDoctorsCount} icon={Stethoscope} description="Registered on staff" />
            <StatsCard title="Today's Revenue" value={`₹${stats.totalRevenue}`} icon={CreditCard} description="Collected today" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 border-t pt-6">
            <Card className="col-span-4 shadow-sm border-0 bg-blue-50/50 dark:bg-blue-950/20">
              <CardHeader>
                <CardTitle className="text-blue-800 dark:text-blue-400">Patient Registrations (7 Days)</CardTitle>
                <CardDescription>New patient intake over the last week.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stats.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                      <XAxis dataKey="date" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Area type="monotone" dataKey="visits" stroke="#3b82f6" fillOpacity={1} fill="url(#colorVisits)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3 shadow-sm border-0">
                <CardHeader>
                  <CardTitle>Top Doctors</CardTitle>
                  <CardDescription>Most active doctors by OPD counts.</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="h-[280px] w-full mt-4">
                     <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={stats.doctorChartData} layout="vertical" margin={{ top: 0, right: 0, left: 40, bottom: 0 }}>
                         <CartesianGrid strokeDasharray="3 3" horizontal={false} className="stroke-muted" />
                         <XAxis type="number" stroke="#888" fontSize={12} allowDecimals={false} />
                         <YAxis dataKey="name" type="category" stroke="#888" fontSize={12} width={100} />
                         <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px' }} />
                         <Bar dataKey="patients" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                       </BarChart>
                     </ResponsiveContainer>
                   </div>
                </CardContent>
            </Card>
        </div>
      </div>
  )
}

function StatsCard({ title, value, icon: Icon, description }: any) {
  return (
    <Card className="relative overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{title}</CardTitle>
        <div className="rounded-lg bg-blue-100/50 dark:bg-blue-900/30 p-2">
          <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="text-3xl font-bold tracking-tight">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="h-10 w-[200px]" />
      <div className="grid gap-4 md:grid-cols-4">
        {[1,2,3,4].map(i => <Skeleton key={i} className="h-[120px] rounded-xl" />)}
      </div>
      <div className="grid gap-4 md:grid-cols-7">
        <Skeleton className="col-span-4 h-[350px] rounded-xl" />
        <Skeleton className="col-span-3 h-[350px] rounded-xl" />
      </div>
    </div>
  )
}
