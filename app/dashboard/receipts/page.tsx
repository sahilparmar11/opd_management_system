
import { getReceipts } from "@/lib/data"
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

export default async function ReceiptsPage() {
    const receipts = await getReceipts()

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
                                <TableHead>Receipt No</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Patient</TableHead>
                                <TableHead>Amount Paid</TableHead>
                                <TableHead>Status</TableHead>
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
                                </TableRow>
                            ))}
                            {receipts.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">
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
