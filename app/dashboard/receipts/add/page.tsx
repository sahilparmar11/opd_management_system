import { getOPDs } from '@/lib/data'
import CreateReceiptForm from './create-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page() {
    const opdListData = await getOPDs()
    const opdList = opdListData.map(opd => ({
        ...opd,
        registration_fee: opd.registration_fee.toNumber()
    }))

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Receipt</CardTitle>
                </CardHeader>
                <CardContent>
                    <CreateReceiptForm opdList={opdList} />
                </CardContent>
            </Card>
        </div>
    )
}
