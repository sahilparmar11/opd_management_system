import EditHospitalForm from './edit-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const idInt = parseInt(id)
    if (isNaN(idInt)) {
        notFound()
    }

    const hospital = await prisma.hospitals.findUnique({
        where: { hospital_id: idInt }
    })

    if (!hospital) {
        notFound()
    }

    const serializedHospital = {
        ...hospital,
        registration_charge: hospital.registration_charge ? hospital.registration_charge.toNumber() : null
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Hospital</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditHospitalForm hospital={serializedHospital} />
                </CardContent>
            </Card>
        </div>
    )
}
