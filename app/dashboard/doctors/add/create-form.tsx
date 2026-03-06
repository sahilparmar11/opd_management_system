'use client'

import { useActionState } from 'react'
import { createDoctor, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function CreateDoctorForm({ hospitals }: { hospitals: any[] }) {
    const initialState: State = { message: null, errors: {} }
    const [state, formAction] = useActionState(createDoctor, initialState)

    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6 space-y-4">

                {/* Hospital */}
                <div>
                    <Label htmlFor="hospital" className="mb-2 block text-sm font-medium">Select Hospital</Label>
                    <div className="relative">
                        <select
                            id="hospital"
                            name="hospitalId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby="hospital-error"
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
                            <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Doctor Name */}
                <div>
                    <Label htmlFor="name" className="mb-2 block text-sm font-medium">Doctor Name</Label>
                    <Input id="name" name="name" placeholder="Enter doctor name" className="w-full" aria-describedby="name-error" />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name && state.errors.name.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Staff ID */}
                    <div>
                        <Label htmlFor="staffId" className="mb-2 block text-sm font-medium">Staff ID</Label>
                        <Input id="staffId" name="staffId" type="number" placeholder="Optional" className="w-full" />
                    </div>

                    {/* Student ID */}
                    <div>
                        <Label htmlFor="studentId" className="mb-2 block text-sm font-medium">Student ID</Label>
                        <Input id="studentId" name="studentId" type="number" placeholder="Optional" className="w-full" />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="description" className="mb-2 block text-sm font-medium">Description</Label>
                    <Input id="description" name="description" placeholder="Enter description (optional)" className="w-full" />
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
                    href="/dashboard/doctors"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Add Doctor</Button>
            </div>
        </form>
    )
}
