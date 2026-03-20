import { getPatients, getDoctors } from '@/lib/data'
import EditOPDForm from './edit-form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const idInt = parseInt(id)
    if (isNaN(idInt)) {
        notFound()
    }

    const [patients, doctors, opd] = await Promise.all([
        getPatients(),
        getDoctors(),
        prisma.opd.findUnique({
            where: { opd_id: idInt }
        })
    ])

    if (!opd) {
        notFound()
    }

    const opdData = {
        ...opd,
        registration_fee: opd.registration_fee ? opd.registration_fee.toNumber() : 0
    }

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Edit OPD Entry</h1>
            </div>
            <Card className="border shadow-sm">
                <CardHeader className="border-b bg-muted/30 px-6 py-4">
                    <CardTitle className="text-base">OPD Details Form</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <EditOPDForm patients={patients} doctors={doctors} opd={opdData} />
                </CardContent>
            </Card>
        </div>
    )
}
