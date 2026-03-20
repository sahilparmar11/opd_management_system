import { getHospitals } from '@/lib/data'
import EditPatientForm from './edit-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const idInt = parseInt(id)
    if (isNaN(idInt)) {
        notFound()
    }

    const [hospitals, patient] = await Promise.all([
        getHospitals(),
        prisma.patients.findUnique({
            where: { patient_id: idInt }
        })
    ])

    if (!patient) {
        notFound()
    }

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Edit Patient</h1>
            </div>
            <Card className="border shadow-sm">
                <CardHeader className="border-b bg-muted/30 px-6 py-4">
                    <CardTitle className="text-base">Patient Details Form</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <EditPatientForm hospitals={hospitals} patient={patient} />
                </CardContent>
            </Card>
        </div>
    )
}
