'use client'

import { useEffect } from "react"
import { useData } from "@/context/DataContext"
import { useSort } from "@/hooks/use-sort"
import { SortableHeader } from "@/components/sortable-header"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pencil, Plus, Eye } from "lucide-react"
import { DeleteButton } from "@/components/delete-button"
import { deletePatient } from "@/lib/actions"

export default function PatientsPage() {
    const { data, loading, refreshData } = useData()
    const basePatients = data?.patients || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: patients, requestSort, sortConfig } = useSort(basePatients, { key: 'patient_id', direction: 'desc' })

    if (loading && patients.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading patients...</div>
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
                    <p className="text-sm text-muted-foreground">
                        View and manage patient records
                    </p>
                </div>
                <Link href="/dashboard/patients/add">
                    <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add Patient
                    </Button>
                </Link>
            </div>
            <Card className="border shadow-sm">
                <CardHeader className="border-b bg-muted/30 px-6 py-4">
                    <CardTitle className="text-base">Patient Registry</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                                <SortableHeader label="ID" sortKey="patient_id" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground w-12" />
                                <SortableHeader label="Name" sortKey="patient_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Mobile" sortKey="mobile_no" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Age / Gender" sortKey="age" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Registered" sortKey="registration_datetime" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <TableHead className="font-semibold text-xs uppercase text-muted-foreground text-right w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {patients.map((patient) => (
                                <TableRow key={patient.patient_id} className="hover:bg-muted/40 border-b">
                                    <TableCell className="text-sm font-medium text-muted-foreground w-12">{patient.patient_id}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarFallback className="text-xs">
                                                    {patient.patient_name[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="font-semibold text-sm">{patient.patient_name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm font-mono text-muted-foreground">{patient.mobile_no}</TableCell>
                                    <TableCell className="text-sm text-muted-foreground">{patient.age} / {patient.gender}</TableCell>
                                    <TableCell className="text-sm text-muted-foreground">{new Date(patient.registration_datetime).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/dashboard/patients/${patient.patient_id}`}>
                                                <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-blue-600 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/50">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={patient.patient_id} onDelete={deletePatient} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {patients.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                        No patients found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
