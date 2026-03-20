import { getHospitals } from '@/lib/data'
import EditDiagnosisTypeForm from './edit-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const idInt = parseInt(id)
    if (isNaN(idInt)) {
        notFound()
    }

    const [hospitals, diagnosisType] = await Promise.all([
        getHospitals(),
        prisma.diagnosis_types.findUnique({
            where: { diagnosis_type_id: idInt }
        })
    ])

    if (!diagnosisType) {
        notFound()
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Diagnosis Type</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditDiagnosisTypeForm hospitals={hospitals} diagnosisType={diagnosisType} />
                </CardContent>
            </Card>
        </div>
    )
}
