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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pencil } from "lucide-react"
import { DeleteButton } from "@/components/delete-button"
import { deleteOPD } from "@/lib/actions"

export default function OPDPage() {
    const { data, loading, refreshData } = useData()
    const baseOpdEntries = data?.opds || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: opdEntries, requestSort, sortConfig } = useSort(baseOpdEntries, { key: 'opd_no', direction: 'desc' })

    if (loading && opdEntries.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading OPD entries...</div>
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">OPD Entries</h1>
                <Link href="/dashboard/opd/add">
                    <Button>New OPD Entry</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All OPD Entries</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <SortableHeader label="OPD No" sortKey="opd_no" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Date" sortKey="opd_datetime" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Patient" sortKey="patients.patient_name" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Doctor" sortKey="doctors.doctor_name" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Type" sortKey="is_follow_up_case" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Fee" sortKey="registration_fee" currentSort={sortConfig} onSort={requestSort} />
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {opdEntries.map((entry) => (
                                <TableRow key={entry.opd_id}>
                                    <TableCell className="font-medium">{entry.opd_no || "N/A"}</TableCell>
                                    <TableCell>{new Date(entry.opd_datetime).toLocaleDateString()}</TableCell>
                                    <TableCell>{entry.patients.patient_name}</TableCell>
                                    <TableCell>{entry.doctors.doctor_name}</TableCell>
                                    <TableCell>
                                        {entry.is_follow_up_case ? (
                                            <Badge variant="secondary">Follow Up</Badge>
                                        ) : (
                                            <Badge variant="default">New Case</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>₹{entry.registration_fee.toString()}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/dashboard/opd/${entry.opd_id}/edit`}>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={entry.opd_id} onDelete={deleteOPD} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {opdEntries.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center">
                                        No OPD entries found.
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
