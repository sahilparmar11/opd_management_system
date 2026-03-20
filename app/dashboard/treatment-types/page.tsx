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
import { Pencil, Plus } from "lucide-react"
import { DeleteButton } from "@/components/delete-button"
import { deleteTreatmentType } from "@/lib/actions"

export default function TreatmentTypesPage() {
    const { data, loading, refreshData } = useData()
    const baseTreatmentTypes = data?.treatmentTypes || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: treatmentTypes, requestSort, sortConfig } = useSort(baseTreatmentTypes, { key: 'treatment_type_id', direction: 'asc' })

    if (loading && treatmentTypes.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading treatment types...</div>
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Treatment Types</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage treatment type categories and pricing
                    </p>
                </div>
                <Link href="/dashboard/treatment-types/add">
                    <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add Treatment Type
                    </Button>
                </Link>
            </div>
            <Card className="border shadow-sm">
                <CardHeader className="border-b bg-muted/30 px-6 py-4">
                    <CardTitle className="text-base">Treatment Types Directory</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                                <SortableHeader label="ID" sortKey="treatment_type_id" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground w-12" />
                                <SortableHeader label="Name" sortKey="treatment_type_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Short Code" sortKey="treatment_type_short_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <TableHead className="font-semibold text-xs uppercase text-muted-foreground text-right w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {treatmentTypes.map((tt) => (
                                <TableRow key={tt.treatment_type_id} className="hover:bg-muted/40 border-b">
                                    <TableCell className="text-sm font-medium text-muted-foreground w-12">{tt.treatment_type_id}</TableCell>
                                    <TableCell className="font-semibold text-sm">{tt.treatment_type_name}</TableCell>
                                    <TableCell className="text-sm text-muted-foreground font-mono">{tt.treatment_type_short_name || "—"}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/dashboard/treatment-types/${tt.treatment_type_id}/edit`}>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={tt.treatment_type_id} onDelete={deleteTreatmentType} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {treatmentTypes.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                        No treatment types found
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
