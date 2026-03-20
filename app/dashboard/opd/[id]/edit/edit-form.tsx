'use client'

import { useActionState } from 'react'
import { updateOPD, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function EditOPDForm({ patients, doctors, opd }: { patients: any[], doctors: any[], opd: any }) {
    const initialState: State = { message: null, errors: {} }
    const updateOPDWithId = updateOPD.bind(null, opd.opd_id)
    const [state, formAction] = useActionState(updateOPDWithId, initialState)

    return (
        <form action={formAction} className="p-6">
            <div className="space-y-4">

                {/* Patient */}
                <div>
                    <Label htmlFor="patient" className="mb-2 block text-sm font-medium">Select Patient</Label>
                    <div className="relative">
                        <select
                            id="patient"
                            name="patientId"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue={opd.patient_id}
                            aria-describedby="patient-error"
                            required
                        >
                            <option value="" disabled>Select a patient</option>
                            {patients.map((patient) => (
                                <option key={patient.patient_id} value={patient.patient_id}>
                                    {patient.patient_name} (ID: {patient.patient_id})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.patientId && state.errors.patientId.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Doctor */}
                <div>
                    <Label htmlFor="doctor" className="mb-2 block text-sm font-medium">Select Doctor</Label>
                    <div className="relative">
                        <select
                            id="doctor"
                            name="doctorId"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue={opd.treated_by_doctor_id}
                            aria-describedby="doctor-error"
                            required
                        >
                            <option value="" disabled>Select a doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.doctor_id} value={doctor.doctor_id}>
                                    {doctor.doctor_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="doctor-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.doctorId && state.errors.doctorId.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Registration Fee */}
                <div>
                    <Label htmlFor="registrationFee" className="mb-2 block text-sm font-medium">Registration Fee</Label>
                    <Input id="registrationFee" name="registrationFee" type="number" step="0.01" min="0" defaultValue={opd.registration_fee ? opd.registration_fee.toString() : ''} placeholder="0.00" className="w-full" aria-describedby="registrationFee-error" required />
                    <div id="registrationFee-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.registrationFee && state.errors.registrationFee.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="description" className="mb-2 block text-sm font-medium">Description (Reason)</Label>
                    <Input id="description" name="description" defaultValue={opd.description || ''} placeholder="Enter reason or description" className="w-full" />
                </div>

                <div id="form-error" aria-live="polite" aria-atomic="true">
                    {state.message && (
                        <p className="mt-2 text-sm text-amber-500">
                            {state.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/opd"
                    className="flex h-10 items-center rounded-lg bg-secondary/50 px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/50"
                >
                    Cancel
                </Link>
                <Button type="submit">Update OPD Entry</Button>
            </div>
        </form>
    )
}
