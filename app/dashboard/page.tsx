'use client'

import React, { useEffect, useState } from 'react'
import {
  Users,
  Activity,
  Stethoscope,
  CreditCard,
  TrendingUp,
  Calendar,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

// --- Types ---
interface DashboardStats {
  totalPatients: number
  todayOpd: number
  activeDoctors: number
  totalRevenue: number
  recentActivity: {
    opd_id: number
    opd_datetime: string
    doctors: { doctor_name: string }
    patients: {
      patient_name: string
      patient_no: number
      gender: string
    }
  }[]
  chartData: { date: string; visits: number }[]
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/dashboard/stats')
        if (res.ok) {
          const data = await res.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Failed to fetch stats', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return <DashboardSkeleton />
  }

  if (!stats) {
    return <div className="p-8 text-center text-red-500">Failed to load dashboard data.</div>
  }

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 min-h-[calc(100vh-4rem)] bg-muted/10">

      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of hospital operations and performance.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Calendar className="mr-2 h-4 w-4" /> Today
          </Button>
          <Button variant="outline">Download Report</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Patients"
          value={stats.totalPatients}
          icon={Users}
          description="+20.1% from last month"
          trend="up"
        />
        <StatsCard
          title="Today's OPD"
          value={stats.todayOpd}
          icon={Activity}
          description="Daily patient visits"
          trend="neutral"
        />
        <StatsCard
          title="Active Doctors"
          value={stats.activeDoctors}
          icon={Stethoscope}
          description="Currently on duty"
          trend="neutral"
        />
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue}`}
          icon={CreditCard}
          description="+15% from last month"
          trend="up"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

        {/* Chart Section */}
        <Card className="col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>Patient Overview</CardTitle>
            <CardDescription>
              Patient visits over the last 7 days.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                  <XAxis
                    dataKey="date"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return `${date.getDate()}/${date.getMonth() + 1}`
                    }}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar
                    dataKey="visits"
                    fill="#0f172a"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest OPD check-ins and appointments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {stats.recentActivity.map((opd) => (
                <div key={opd.opd_id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {opd.patients.patient_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Dr. {opd.doctors.doctor_name}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">#{opd.opd_id}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(opd.opd_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {stats.recentActivity.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">No recent activity.</p>
              )}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

// --- Sub-Components ---

function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend
}: {
  title: string
  value: string | number
  icon: any
  description: string
  trend: 'up' | 'down' | 'neutral'
}) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1 flex items-center">
          {trend === 'up' && <TrendingUp className="mr-1 h-3 w-3 text-green-500" />}
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

function DashboardSkeleton() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[120px] rounded-xl" />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-7">
        <Skeleton className="col-span-4 h-[350px] rounded-xl" />
        <Skeleton className="col-span-3 h-[350px] rounded-xl" />
      </div>
    </div>
  )
}

export default Dashboard
