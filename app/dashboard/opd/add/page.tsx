import { getPatients, getDoctors } from '@/lib/data'
import CreateOPDForm from './create-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page() {
    const patients = await getPatients()
    const doctors = await getDoctors()

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>New OPD Entry</CardTitle>
                </CardHeader>
                <CardContent>
                    <CreateOPDForm patients={patients} doctors={doctors} />
                </CardContent>
            </Card>
        </div>
    )
}
