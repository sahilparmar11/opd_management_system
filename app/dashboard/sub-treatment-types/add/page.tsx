import { getTreatmentTypes } from '@/lib/data'
import CreateSubTreatmentTypeForm from './create-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page() {
    const treatmentTypes = await getTreatmentTypes()

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Add Sub Treatment Type</CardTitle>
                </CardHeader>
                <CardContent>
                    <CreateSubTreatmentTypeForm treatmentTypes={treatmentTypes} />
                </CardContent>
            </Card>
        </div>
    )
}
