
import { getDiagnosisTypes } from "@/lib/data"
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
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DiagnosisTypesPage() {
    const diagnosisTypes = await getDiagnosisTypes()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Diagnosis Types</h1>
                <Link href="/dashboard/diagnosis-types/add">
                    <Button>Add Diagnosis Type</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Diagnosis Types</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Short Name</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {diagnosisTypes.map((dt) => (
                                <TableRow key={dt.diagnosis_type_id}>
                                    <TableCell>{dt.diagnosis_type_id}</TableCell>
                                    <TableCell className="font-medium">{dt.diagnosis_type_name}</TableCell>
                                    <TableCell>{dt.diagnosis_type_short_name || "N/A"}</TableCell>
                                    <TableCell>
                                        {dt.is_active ? (
                                            <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                                                Active
                                            </Badge>
                                        ) : (
                                            <Badge variant="destructive">Inactive</Badge>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {diagnosisTypes.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">
                                        No diagnosis types found.
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
