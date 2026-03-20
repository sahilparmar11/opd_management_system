'use client'

import { useActionState } from 'react'
import { createTreatmentType, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function CreateTreatmentTypeForm({ hospitals }: { hospitals: any[] }) {
    const initialState: State = { message: null, errors: {} }
    const [state, formAction] = useActionState(createTreatmentType, initialState)

    return (
        <form action={formAction}>
            <div className="rounded-md bg-secondary/50 p-4 md:p-6">
                {/* Hospital */}
                <div className="mb-4">
                    <Label htmlFor="hospital" className="mb-2 block text-sm font-medium">
                        Select Hospital
                    </Label>
                    <div className="relative">
                        <select
                            id="hospital"
                            name="hospitalId"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue=""
                            aria-describedby="hospital-error"
                            required
                        >
                            <option value="" disabled>
                                Select a hospital
                            </option>
                            {hospitals.map((hospital) => (
                                <option key={hospital.hospital_id} value={hospital.hospital_id}>
                                    {hospital.hospital_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="hospital-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.hospitalId &&
                            state.errors.hospitalId.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-amber-500">
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Name */}
                <div className="mb-4">
                    <Label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Treatment Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter treatment name"
                        className="w-full"
                        aria-describedby="name-error"
                        required
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-amber-500">
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Short Name */}
                <div className="mb-4">
                    <Label htmlFor="shortName" className="mb-2 block text-sm font-medium">
                        Short Name
                    </Label>
                    <Input
                        id="shortName"
                        name="shortName"
                        placeholder="Enter short name (optional)"
                        className="w-full"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <Label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Description
                    </Label>
                    <Input
                        id="description"
                        name="description"
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
                    href="/dashboard/treatment-types"
                    className="flex h-10 items-center rounded-lg bg-secondary/50 px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/50"
                >
                    Cancel
                </Link>
                <Button type="submit">Add Treatment Type</Button>
            </div>
        </form>
    )
}
