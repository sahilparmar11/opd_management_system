
import { getHospitals } from '@/lib/data'
import EditTreatmentTypeForm from './edit-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const idInt = parseInt(id)
    if (isNaN(idInt)) {
        notFound()
    }

    const [hospitals, treatmentType] = await Promise.all([
        getHospitals(),
        prisma.treatment_types.findUnique({
            where: { treatment_type_id: idInt }
        })
    ])

    if (!treatmentType) {
        notFound()
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Treatment Type</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditTreatmentTypeForm hospitals={hospitals} treatmentType={treatmentType} />
                </CardContent>
            </Card>
        </div>
    )
}
