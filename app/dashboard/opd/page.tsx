
import { getOPDs } from "@/lib/data"
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

export default async function OPDPage() {
    const opdEntries = await getOPDs()

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
                                <TableHead>OPD No</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Patient</TableHead>
                                <TableHead>Doctor</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Fee</TableHead>
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
                                </TableRow>
                            ))}
                            {opdEntries.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center">
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
