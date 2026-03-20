'use client'

import { useParams } from 'next/navigation'
import { useData } from '@/context/DataContext'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { User, Phone, Mail, Building, Activity, Stethoscope, Pencil } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function DoctorProfilePage() {
    const params = useParams()
    const id = params.id as string
    
    const { data, loading } = useData()
    
    if (loading) {
        return <div className="p-12 text-center text-muted-foreground">Loading doctor profile...</div>
    }
    
    if (!data) return null
    
    const doctor = data.doctors.find(d => d.doctor_id.toString() === id)
    if (!doctor) return <div className="p-12 text-center text-destructive font-medium">Doctor not found.</div>
    
    // Build chronological timeline from OPDs handled by this doctor
    const history = data.opds
        .filter(o => o.doctor_id === doctor.doctor_id)
        .map(o => ({
           type: 'OPD' as const,
           date: new Date(o.opd_datetime),
           data: o,
           id: `opd-${o.opd_id}`
        }))
        .sort((a,b) => b.date.getTime() - a.date.getTime())
    
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                   <h1 className="text-3xl font-bold tracking-tight">Physician Profile</h1>
                   <p className="text-sm text-muted-foreground">Detailed doctor workload and facility assignment</p>
                </div>
                <Link href={`/dashboard/doctors/${id}/edit`}>
                   <Button variant="outline" className="gap-2 shadow-sm border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950/50">
                     <Pencil className="h-4 w-4"/> Edit Details
                   </Button>
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Profile Card */}
                <div className="col-span-1 border-blue-100 dark:border-blue-900 border-2 rounded-xl">
                    <Card className="border-t-4 border-t-blue-500 shadow-sm sticky top-6 border-0">
                        <CardHeader className="text-center pb-2">
                           <div className="mx-auto bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 w-24 h-24 rounded-full flex items-center justify-center mb-4 text-4xl font-bold shadow-sm">
                             {doctor.doctor_name.charAt(0)}
                           </div>
                           <CardTitle className="text-2xl">Dr. {doctor.doctor_name}</CardTitle>
                           <CardDescription className="flex items-center justify-center gap-2 mt-2">
                             <Badge variant="outline" className="text-xs font-mono">ID: {doctor.doctor_id}</Badge>
                             <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300">{doctor.specialization}</Badge>
                           </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-4">
                            <div className="flex items-center gap-3 text-sm">
                                <Building className="w-4 h-4 text-muted-foreground" />
                                <span className="font-medium">{doctor.hospitals.hospital_name}</span>
                            </div>
                            <Separator />
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span>{doctor.mobile_no}</span>
                            </div>
                            <Separator />
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="break-all">{doctor.email}</span>
                            </div>
                            <Separator />
                            <div className="flex items-center gap-3 text-sm">
                                <Stethoscope className="w-4 h-4 text-muted-foreground" />
                                <span>{history.length} Lifetime Consultations</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                
                {/* Workload Timeline */}
                <div className="col-span-1 md:col-span-2">
                    <Card className="shadow-sm border-blue-100/50 dark:border-blue-900/20">
                        <CardHeader className="border-b bg-blue-50/50 dark:bg-blue-950/20 py-4">
                           <CardTitle className="text-lg flex items-center gap-2 text-blue-800 dark:text-blue-400">
                             <Activity className="h-5 w-5" />
                             Consultation History
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-8">
                            {history.length === 0 ? (
                                <div className="text-center text-muted-foreground py-8">No medical encounters logged for this doctor.</div>
                            ) : (
                                <div className="relative border-l-2 border-blue-100 dark:border-blue-800/60 ml-4 space-y-10">
                                    {history.map((event) => (
                                        <div key={event.id} className="relative pl-8">
                                            {/* Timeline dot */}
                                            <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full border-[4px] border-background bg-blue-500 shadow-sm"></span>
                                            
                                            <div className="flex flex-col gap-1.5 group">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase">
                                                        {event.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </span>
                                                    <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
                                                        OPD
                                                    </Badge>
                                                </div>
                                                
                                                <div className="bg-white dark:bg-neutral-900 border border-blue-100 dark:border-blue-900/50 rounded-xl p-5 shadow-sm group-hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-semibold text-base text-foreground">Patient: {event.data.patients?.patient_name}</h4>
                                                        <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">OPD #{event.data.opd_no}</span>
                                                    </div>
                                                    <div className="text-sm text-muted-foreground flex gap-6 mt-3">
                                                        <div><span className="opacity-70">Type:</span> <span className="font-medium text-foreground">{event.data.is_follow_up_case ? 'Follow-Up' : 'Initial Visit'}</span></div>
                                                        <div><span className="opacity-70">Case Status:</span> <span className="font-medium text-foreground">Completed</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}
