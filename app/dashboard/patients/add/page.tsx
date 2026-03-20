import { getHospitals } from '@/lib/data'
import CreatePatientForm from './create-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page() {
    const hospitals = await getHospitals()

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Patient</CardTitle>
                </CardHeader>
                <CardContent>
                    <CreatePatientForm hospitals={hospitals} />
                </CardContent>
            </Card>
        </div>
    )
}
