
import { getTreatmentTypes } from "@/lib/data"
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
import { Pencil } from "lucide-react"
import { DeleteButton } from "@/components/delete-button"
import { deleteTreatmentType } from "@/lib/actions"

export default async function TreatmentTypesPage() {
    const treatmentTypes = await getTreatmentTypes()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Treatment Types</h1>
                <Link href="/dashboard/treatment-types/add">
                    <Button>Add Treatment Type</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Treatment Types</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Short Name</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {treatmentTypes.map((tt) => (
                                <TableRow key={tt.treatment_type_id}>
                                    <TableCell>{tt.treatment_type_id}</TableCell>
                                    <TableCell className="font-medium">{tt.treatment_type_name}</TableCell>
                                    <TableCell>{tt.treatment_type_short_name || "N/A"}</TableCell>
                                    <TableCell className="text-right flex items-center justify-end gap-2">
                                        <Link href={`/dashboard/treatment-types/${tt.treatment_type_id}/edit`}>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <DeleteButton id={tt.treatment_type_id} onDelete={deleteTreatmentType} />
                                    </TableCell>
                                </TableRow>
                            ))}
                            {treatmentTypes.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={3} className="text-center">
                                        No treatment types found.
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
