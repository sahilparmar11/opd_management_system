
import { getPatients } from "@/lib/data"
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

export default async function PatientsPage() {
    const patients = await getPatients()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Patients</h1>
                <Link href="/dashboard/patients/add">
                    <Button>Add Patient</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Patients</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Mobile</TableHead>
                                <TableHead>Age/Gender</TableHead>
                                <TableHead>Registered On</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {patients.map((patient) => (
                                <TableRow key={patient.patient_id}>
                                    <TableCell>{patient.patient_id}</TableCell>
                                    <TableCell className="flex items-center gap-2 font-medium">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>
                                                {patient.patient_name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        {patient.patient_name}
                                    </TableCell>
                                    <TableCell>{patient.mobile_no}</TableCell>
                                    <TableCell>{patient.age} / {patient.gender}</TableCell>
                                    <TableCell>{new Date(patient.registration_datetime).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}
                            {patients.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">
                                        No patients found.
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
