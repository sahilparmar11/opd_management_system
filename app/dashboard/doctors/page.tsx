import { getDoctors } from "@/lib/data"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DeleteButton } from "@/components/delete-button"
import { deleteDoctor } from "@/lib/actions"
import { Edit } from "lucide-react"

export default async function DoctorsPage() {
    const doctors = await getDoctors()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Doctors</h1>
                <Link href="/dashboard/doctors/add">
                    <Button>Add Doctor</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Hospital</TableHead>
                                <TableHead>Staff ID</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {doctors.map((doctor) => (
                                <TableRow key={doctor.doctor_id}>
                                    <TableCell>{doctor.doctor_id}</TableCell>
                                    <TableCell className="flex items-center gap-2 font-medium">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>
                                                {doctor.doctor_name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        {doctor.doctor_name}
                                    </TableCell>
                                    <TableCell>{doctor.hospitals.hospital_name}</TableCell>
                                    <TableCell>{doctor.staff_id || "N/A"}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Link href={`/dashboard/doctors/${doctor.doctor_id}/edit`}>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <DeleteButton id={doctor.doctor_id} onDelete={deleteDoctor} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {doctors.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">
                                        No doctors found.
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
