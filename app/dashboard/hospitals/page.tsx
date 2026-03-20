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
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DeleteButton } from "@/components/delete-button"
import { deleteHospital } from "@/lib/actions"
import { Edit, Plus } from "lucide-react"

export default function HospitalsPage() {
    const { data, loading, refreshData } = useData()
    const baseHospitals = data?.hospitals || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: hospitals, requestSort, sortConfig } = useSort(baseHospitals, { key: 'hospital_id', direction: 'asc' })

    if (loading && hospitals.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading hospitals...</div>
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Hospitals</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage hospital information and settings
                    </p>
                </div>
                <Link href="/dashboard/hospitals/add">
                    <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add Hospital
                    </Button>
                </Link>
            </div>
            <Card className="border shadow-sm">
                <CardHeader className="border-b bg-muted/30 px-6 py-4">
                    <CardTitle className="text-base">Hospital Directory</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                                <SortableHeader label="ID" sortKey="hospital_id" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground w-12" />
                                <SortableHeader label="Name" sortKey="hospital_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Address" sortKey="address" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Registration Fee" sortKey="registration_charge" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Established" sortKey="opening_date" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <TableHead className="font-semibold text-xs uppercase text-muted-foreground text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {hospitals.map((hospital) => (
                                <TableRow key={hospital.hospital_id} className="hover:bg-muted/40 border-b">
                                    <TableCell className="text-sm font-medium text-muted-foreground w-12">{hospital.hospital_id}</TableCell>
                                    <TableCell className="font-semibold text-sm">{hospital.hospital_name}</TableCell>
                                    <TableCell className="text-sm text-muted-foreground">{hospital.address || "N/A"}</TableCell>
                                    <TableCell className="text-sm font-medium">{hospital.registration_charge ? `₹${hospital.registration_charge}` : "N/A"}</TableCell>
                                    <TableCell className="text-sm text-muted-foreground">{new Date(hospital.opening_date).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/dashboard/hospitals/${hospital.hospital_id}/edit`}>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={hospital.hospital_id} onDelete={deleteHospital} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {hospitals.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                        No hospitals found
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
