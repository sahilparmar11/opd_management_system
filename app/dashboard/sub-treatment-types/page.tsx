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
import { deleteSubTreatmentType } from "@/lib/actions"

export default function SubTreatmentTypesPage() {
    const { data, loading, refreshData } = useData()
    const baseSubTreatmentTypes = data?.subTreatmentTypes || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: subTreatmentTypes, requestSort, sortConfig } = useSort(baseSubTreatmentTypes, { key: 'sub_treatment_type_id', direction: 'asc' })

    if (loading && subTreatmentTypes.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading sub treatment types...</div>
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Sub Treatment Types</h1>
                <Link href="/dashboard/sub-treatment-types/add">
                    <Button>Add Sub Treatment Type</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Sub Treatment Types</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <SortableHeader label="ID" sortKey="sub_treatment_type_id" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Name" sortKey="sub_treatment_type_name" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Treatment Type" sortKey="treatment_types.treatment_type_name" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Rate" sortKey="rate" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Status" sortKey="is_active" currentSort={sortConfig} onSort={requestSort} />
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {subTreatmentTypes.map((stt) => (
                                <TableRow key={stt.sub_treatment_type_id}>
                                    <TableCell>{stt.sub_treatment_type_id}</TableCell>
                                    <TableCell className="font-medium">{stt.sub_treatment_type_name}</TableCell>
                                    <TableCell>{stt.treatment_types.treatment_type_name}</TableCell>
                                    <TableCell>₹{stt.rate.toString()}</TableCell>
                                    <TableCell>
                                        {stt.is_active ? (
                                            <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                                                Active
                                            </Badge>
                                        ) : (
                                            <Badge variant="destructive">Inactive</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/dashboard/sub-treatment-types/${stt.sub_treatment_type_id}/edit`}>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={stt.sub_treatment_type_id} onDelete={deleteSubTreatmentType} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {subTreatmentTypes.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                        No sub treatment types found.
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
