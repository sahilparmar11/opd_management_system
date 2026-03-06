import CreateHospitalForm from './create-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Add Hospital</CardTitle>
                </CardHeader>
                <CardContent>
                    <CreateHospitalForm />
                </CardContent>
            </Card>
        </div>
    )
}
