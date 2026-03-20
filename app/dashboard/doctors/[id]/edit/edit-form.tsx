'use client'

import { useActionState } from 'react'
import { updateDoctor, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function EditDoctorForm({ doctor, hospitals }: { doctor: any, hospitals: any[] }) {
    const initialState: State = { message: null, errors: {} }
    const updateDoctorWithId = updateDoctor.bind(null, doctor.doctor_id)
    const [state, formAction] = useActionState(updateDoctorWithId, initialState)

    return (
        <form action={formAction}>
            <div className="rounded-md bg-secondary/50 p-4 md:p-6 space-y-4">

                {/* Hospital */}
                <div>
                    <Label htmlFor="hospital" className="mb-2 block text-sm font-medium">Select Hospital</Label>
                    <div className="relative">
                        <select
                            id="hospital"
                            name="hospitalId"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue={doctor.hospital_id}
                            aria-describedby="hospital-error"
                            required
                        >
                            <option value="" disabled>Select a hospital</option>
                            {hospitals.map((hospital) => (
                                <option key={hospital.hospital_id} value={hospital.hospital_id}>
                                    {hospital.hospital_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="hospital-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.hospitalId && state.errors.hospitalId.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Doctor Name */}
                <div>
                    <Label htmlFor="name" className="mb-2 block text-sm font-medium">Doctor Name</Label>
                    <Input
                        id="name"
                        name="name"
                        defaultValue={doctor.doctor_name}
                        placeholder="Enter doctor name"
                        className="w-full"
                        aria-describedby="name-error"
                        required
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name && state.errors.name.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Staff ID */}
                    <div>
                        <Label htmlFor="staffId" className="mb-2 block text-sm font-medium">Staff ID</Label>
                        <Input
                            id="staffId"
                            name="staffId"
                            type="number"
                            min="0"
                            defaultValue={doctor.staff_id || ''}
                            placeholder="Optional"
                            className="w-full"
                        />
                    </div>

                    {/* Student ID */}
                    <div>
                        <Label htmlFor="studentId" className="mb-2 block text-sm font-medium">Student ID</Label>
                        <Input
                            id="studentId"
                            name="studentId"
                            type="number"
                            min="0"
                            defaultValue={doctor.student_id || ''}
                            placeholder="Optional"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Mobile No */}
                    <div>
                        <Label htmlFor="mobileNo" className="mb-2 block text-sm font-medium">Mobile No</Label>
                        <Input id="mobileNo" name="mobileNo" type="tel" pattern="\d{10}" title="Must be exactly 10 digits" minLength={10} maxLength={10} defaultValue={doctor.mobile_no || ''} placeholder="10-digit mobile no" className="w-full" />
                    </div>

                    {/* Email */}
                    <div>
                        <Label htmlFor="email" className="mb-2 block text-sm font-medium">Email Address</Label>
                        <Input id="email" name="email" type="email" defaultValue={doctor.email || ''} placeholder="example@doctor.com" className="w-full" />
                    </div>

                    {/* Specialization */}
                    <div>
                        <Label htmlFor="specialization" className="mb-2 block text-sm font-medium">Specialization</Label>
                        <Input id="specialization" name="specialization" defaultValue={doctor.specialization || ''} placeholder="e.g. Cardiologist" className="w-full" />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="description" className="mb-2 block text-sm font-medium">Description</Label>
                    <Input
                        id="description"
                        name="description"
                        defaultValue={doctor.description || ''}
                        placeholder="Enter description (optional)"
                        className="w-full"
                    />
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
                    href="/dashboard/doctors"
                    className="flex h-10 items-center rounded-lg bg-secondary/50 px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/50"
                >
                    Cancel
                </Link>
                <Button type="submit">Update Doctor</Button>
            </div>
        </form>
    )
}
