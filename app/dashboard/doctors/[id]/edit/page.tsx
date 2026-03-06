import EditDoctorForm from './edit-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import { getHospitals } from '@/lib/data'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const idInt = parseInt(id)
    if (isNaN(idInt)) {
        notFound()
    }

    const [doctor, hospitals] = await Promise.all([
        prisma.doctors.findUnique({
            where: { doctor_id: idInt }
        }),
        getHospitals()
    ])

    const serializedHospitals = hospitals.map(hospital => ({
        ...hospital,
        registration_charge: hospital.registration_charge ? hospital.registration_charge.toNumber() : null
    }))

    if (!doctor) {
        notFound()
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Doctor</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditDoctorForm doctor={doctor} hospitals={serializedHospitals} />
                </CardContent>
            </Card>
        </div>
    )
}
