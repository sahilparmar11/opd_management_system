
import { getSubTreatmentTypes } from "@/lib/data"
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

export default async function SubTreatmentTypesPage() {
    const subTreatmentTypes = await getSubTreatmentTypes()

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
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Treatment Type</TableHead>
                                <TableHead>Rate</TableHead>
                                <TableHead>Status</TableHead>
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
                                </TableRow>
                            ))}
                            {subTreatmentTypes.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">
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
