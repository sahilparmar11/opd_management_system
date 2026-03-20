import { getTreatmentTypes } from '@/lib/data'
import EditSubTreatmentTypeForm from './edit-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const idInt = parseInt(id)
    if (isNaN(idInt)) {
        notFound()
    }

    const [treatmentTypes, subTreatmentType] = await Promise.all([
        getTreatmentTypes(),
        prisma.sub_treatment_types.findUnique({
            where: { sub_treatment_type_id: idInt }
        })
    ])

    if (!subTreatmentType) {
        notFound()
    }

    const subTreatmentTypeData = {
        ...subTreatmentType,
        rate: subTreatmentType.rate ? subTreatmentType.rate.toNumber() : 0
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Sub Treatment Type</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditSubTreatmentTypeForm treatmentTypes={treatmentTypes} subTreatmentType={subTreatmentTypeData} />
                </CardContent>
            </Card>
        </div>
    )
}
