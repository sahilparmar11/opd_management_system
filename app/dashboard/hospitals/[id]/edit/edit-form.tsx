'use client'

import { useActionState } from 'react'
import { updateHospital, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function EditHospitalForm({ hospital }: { hospital: any }) {
    const initialState: State = { message: null, errors: {} }
    const updateHospitalWithId = updateHospital.bind(null, hospital.hospital_id)
    const [state, formAction] = useActionState(updateHospitalWithId, initialState)

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6 space-y-4">

                {/* Hospital Name */}
                <div>
                    <Label htmlFor="name" className="mb-2 block text-sm font-medium">Hospital Name</Label>
                    <Input
                        id="name"
                        name="name"
                        defaultValue={hospital.hospital_name}
                        placeholder="Enter hospital name"
                        className="w-full"
                        aria-describedby="name-error"
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name && state.errors.name.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Address */}
                <div>
                    <Label htmlFor="address" className="mb-2 block text-sm font-medium">Address</Label>
                    <Input
                        id="address"
                        name="address"
                        defaultValue={hospital.address || ''}
                        placeholder="Enter address"
                        className="w-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Registration Charge */}
                    <div>
                        <Label htmlFor="regCharge" className="mb-2 block text-sm font-medium">Registration Charge</Label>
                        <Input
                            id="regCharge"
                            name="regCharge"
                            type="number"
                            step="0.01"
                            defaultValue={hospital.registration_charge ? Number(hospital.registration_charge) : ''}
                            placeholder="0.00"
                            className="w-full"
                        />
                    </div>

                    {/* Validity Months */}
                    <div>
                        <Label htmlFor="validityMonths" className="mb-2 block text-sm font-medium">Validity (Months)</Label>
                        <Input
                            id="validityMonths"
                            name="validityMonths"
                            type="number"
                            defaultValue={hospital.registration_validity_months || ''}
                            placeholder="12"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Opening Date */}
                    <div>
                        <Label htmlFor="openingDate" className="mb-2 block text-sm font-medium">Opening Date</Label>
                        <Input
                            id="openingDate"
                            name="openingDate"
                            type="date"
                            defaultValue={hospital.opening_date ? new Date(hospital.opening_date).toISOString().split('T')[0] : ''}
                            className="w-full"
                            aria-describedby="openingDate-error"
                        />
                        <div id="openingDate-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.openingDate && state.errors.openingDate.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                            ))}
                        </div>
                    </div>

                    {/* Opening Patient No */}
                    <div>
                        <Label htmlFor="openingPatientNo" className="mb-2 block text-sm font-medium">Opening Patient No</Label>
                        <Input
                            id="openingPatientNo"
                            name="openingPatientNo"
                            type="number"
                            defaultValue={hospital.opening_patient_no}
                            placeholder="1"
                            className="w-full"
                            aria-describedby="openingPatientNo-error"
                        />
                        <div id="openingPatientNo-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.openingPatientNo && state.errors.openingPatientNo.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Opening OPD No */}
                    <div>
                        <Label htmlFor="openingOpdNo" className="mb-2 block text-sm font-medium">Opening OPD No</Label>
                        <Input
                            id="openingOpdNo"
                            name="openingOpdNo"
                            type="number"
                            defaultValue={hospital.opening_opd_no}
                            placeholder="1"
                            className="w-full"
                            aria-describedby="openingOpdNo-error"
                        />
                        <div id="openingOpdNo-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.openingOpdNo && state.errors.openingOpdNo.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                            ))}
                        </div>
                    </div>

                    {/* Opening Receipt No */}
                    <div>
                        <Label htmlFor="openingReceiptNo" className="mb-2 block text-sm font-medium">Opening Receipt No</Label>
                        <Input
                            id="openingReceiptNo"
                            name="openingReceiptNo"
                            type="number"
                            defaultValue={hospital.opening_receipt_no}
                            placeholder="1"
                            className="w-full"
                            aria-describedby="openingReceiptNo-error"
                        />
                        <div id="openingReceiptNo-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.openingReceiptNo && state.errors.openingReceiptNo.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="description" className="mb-2 block text-sm font-medium">Description</Label>
                    <Input
                        id="description"
                        name="description"
                        defaultValue={hospital.description || ''}
                        placeholder="Enter description (optional)"
                        className="w-full"
                    />
                </div>

                <div id="form-error" aria-live="polite" aria-atomic="true">
                    {state.message && (
                        <p className="mt-2 text-sm text-red-500">
                            {state.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/hospitals"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Update Hospital</Button>
            </div>
        </form>
    )
}
