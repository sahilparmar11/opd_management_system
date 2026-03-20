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
import { DeleteButton } from "@/components/delete-button"
import { deleteDoctor } from "@/lib/actions"
import { Pencil, Plus, Eye } from "lucide-react"

export default function DoctorsPage() {
    const { data, loading, refreshData } = useData()
    const baseDoctors = data?.doctors || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: doctors, requestSort, sortConfig } = useSort(baseDoctors, { key: 'doctor_id', direction: 'asc' })

    if (loading && doctors.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading doctors...</div>
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Doctors</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage doctor profiles and assignments
                    </p>
                </div>
                <Link href="/dashboard/doctors/add">
                    <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add Doctor
                    </Button>
                </Link>
            </div>
            <Card className="border shadow-sm">
                <CardHeader className="border-b bg-muted/30 px-6 py-4">
                    <CardTitle className="text-base">Doctor Directory</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                                <SortableHeader label="ID" sortKey="doctor_id" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Name" sortKey="doctor_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Hospital" sortKey="hospitals.hospital_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Staff ID" sortKey="staff_id" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <TableHead className="font-semibold text-xs uppercase text-muted-foreground text-right w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {doctors.map((doctor) => (
                                <TableRow key={doctor.doctor_id} className="hover:bg-muted/40 border-b">
                                    <TableCell className="text-sm font-medium text-muted-foreground w-12">{doctor.doctor_id}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarFallback className="text-xs">
                                                    {doctor.doctor_name[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold">{doctor.doctor_name}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground">{doctor.hospitals?.hospital_name || "—"}</TableCell>
                                    <TableCell className="text-sm font-medium">{doctor.staff_id || "—"}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/dashboard/doctors/${doctor.doctor_id}`}>
                                                <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-blue-600 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/50">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={doctor.doctor_id} onDelete={deleteDoctor} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {doctors.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                        No doctors found
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
