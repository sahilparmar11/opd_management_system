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
import { Check, X, Plus, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DeleteButton } from "@/components/delete-button"
import { deleteDiagnosisType } from "@/lib/actions"

export default function DiagnosisTypesPage() {
    const { data, loading, refreshData } = useData()
    const baseDiagnosisTypes = data?.diagnosisTypes || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: diagnosisTypes, requestSort, sortConfig } = useSort(baseDiagnosisTypes, { key: 'diagnosis_type_id', direction: 'asc' })

    if (loading && diagnosisTypes.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading diagnosis types...</div>
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Diagnosis Types</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage diagnosis type classifications
                    </p>
                </div>
                <Link href="/dashboard/diagnosis-types/add">
                    <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add Diagnosis Type
                    </Button>
                </Link>
            </div>
            <Card className="border shadow-sm">
                <CardHeader className="border-b bg-muted/30 px-6 py-4">
                    <CardTitle className="text-base">Diagnosis Types Directory</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                                <SortableHeader label="ID" sortKey="diagnosis_type_id" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground w-12" />
                                <SortableHeader label="Name" sortKey="diagnosis_type_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Short Code" sortKey="diagnosis_type_short_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Status" sortKey="is_active" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <TableHead className="font-semibold text-xs uppercase text-muted-foreground text-right w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {diagnosisTypes.map((dt) => (
                                <TableRow key={dt.diagnosis_type_id} className="hover:bg-muted/40 border-b">
                                    <TableCell className="text-sm font-medium text-muted-foreground w-12">{dt.diagnosis_type_id}</TableCell>
                                    <TableCell className="font-semibold text-sm">{dt.diagnosis_type_name}</TableCell>
                                    <TableCell className="text-sm text-muted-foreground font-mono">{dt.diagnosis_type_short_name || "—"}</TableCell>
                                    <TableCell>
                                        {dt.is_active ? (
                                            <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-xs">
                                                <Check className="h-3 w-3 mr-1" />
                                                Active
                                            </Badge>
                                        ) : (
                                            <Badge variant="secondary" className="text-xs">
                                                <X className="h-3 w-3 mr-1" />
                                                Inactive
                                            </Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/dashboard/diagnosis-types/${dt.diagnosis_type_id}/edit`}>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={dt.diagnosis_type_id} onDelete={deleteDiagnosisType} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {diagnosisTypes.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                        No diagnosis types found
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
