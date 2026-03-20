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
import { CancelButton } from "@/components/cancel-button"
import { cancelReceipt } from "@/lib/actions"

export default function ReceiptsPage() {
    const { data, loading, refreshData } = useData()
    const baseReceipts = data?.receipts || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: receipts, requestSort, sortConfig } = useSort(baseReceipts, { key: 'receipt_no', direction: 'desc' })

    const handleCancelReceipt = async (id: number) => {
        const result = await cancelReceipt(id)
        if (result?.success) {
            refreshData(true)
        }
        return result
    }

    if (loading && receipts.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading receipts...</div>
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Receipts</h1>
                <Link href="/dashboard/receipts/add">
                    <Button>Create Receipt</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Receipts</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <SortableHeader label="Receipt No" sortKey="receipt_no" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Date" sortKey="receipt_date" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Patient" sortKey="opd.patients.patient_name" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Amount Paid" sortKey="amount_paid" currentSort={sortConfig} onSort={requestSort} />
                                <SortableHeader label="Status" sortKey="cancellation_datetime" currentSort={sortConfig} onSort={requestSort} />
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {receipts.map((receipt) => (
                                <TableRow key={receipt.receipt_id}>
                                    <TableCell className="font-medium">{receipt.receipt_no}</TableCell>
                                    <TableCell>{new Date(receipt.receipt_date).toLocaleDateString()}</TableCell>
                                    <TableCell>{receipt.opd.patients.patient_name}</TableCell>
                                    <TableCell>₹{receipt.amount_paid.toString()}</TableCell>
                                    <TableCell>
                                        {!receipt.cancellation_datetime ? (
                                            <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                                                Paid
                                            </Badge>
                                        ) : (
                                            <Badge variant="destructive">Cancelled</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            {!receipt.cancellation_datetime && (
                                                <CancelButton id={receipt.receipt_id} onCancel={handleCancelReceipt} />
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {receipts.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center">
                                        No receipts found.
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
