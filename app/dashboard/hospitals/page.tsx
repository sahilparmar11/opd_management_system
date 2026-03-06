import { getHospitals } from "@/lib/data"
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
import { DeleteButton } from "@/components/delete-button"
import { deleteHospital } from "@/lib/actions"
import { Edit } from "lucide-react"

export default async function HospitalsPage() {
    const hospitals = await getHospitals()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Hospitals</h1>
                <Link href="/dashboard/hospitals/add">
                    <Button>Add Hospital</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Hospitals</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Reg. Charge</TableHead>
                                <TableHead>Established</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {hospitals.map((hospital) => (
                                <TableRow key={hospital.hospital_id}>
                                    <TableCell>{hospital.hospital_id}</TableCell>
                                    <TableCell className="font-medium">{hospital.hospital_name}</TableCell>
                                    <TableCell>{hospital.address || "N/A"}</TableCell>
                                    <TableCell>{hospital.registration_charge ? `₹${hospital.registration_charge}` : "N/A"}</TableCell>
                                    <TableCell>{new Date(hospital.opening_date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Link href={`/dashboard/hospitals/${hospital.hospital_id}/edit`}>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={hospital.hospital_id} onDelete={deleteHospital} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {hospitals.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center">
                                        No hospitals found.
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
