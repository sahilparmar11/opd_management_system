'use client'

import { useActionState } from 'react'
import { createSubTreatmentType, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function CreateSubTreatmentTypeForm({ treatmentTypes }: { treatmentTypes: any[] }) {
    const initialState: State = { message: null, errors: {} }
    const [state, formAction] = useActionState(createSubTreatmentType, initialState)

    return (
        <form action={formAction}>
            <div className="rounded-md bg-secondary/50 p-4 md:p-6 space-y-4">

                {/* Treatment Type */}
                <div>
                    <Label htmlFor="treatmentType" className="mb-2 block text-sm font-medium">Select Treatment Type</Label>
                    <div className="relative">
                        <select
                            id="treatmentType"
                            name="treatmentTypeId"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue=""
                            aria-describedby="treatmentType-error"
                            required
                        >
                            <option value="" disabled>Select a treatment type</option>
                            {treatmentTypes.map((tt) => (
                                <option key={tt.treatment_type_id} value={tt.treatment_type_id}>
                                    {tt.treatment_type_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="treatmentType-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.treatmentTypeId && state.errors.treatmentTypeId.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Sub Treatment Name */}
                <div>
                    <Label htmlFor="name" className="mb-2 block text-sm font-medium">Sub Treatment Name</Label>
                    <Input id="name" name="name" placeholder="Enter sub treatment name" className="w-full" aria-describedby="name-error" required />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name && state.errors.name.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Rate */}
                <div>
                    <Label htmlFor="rate" className="mb-2 block text-sm font-medium">Rate</Label>
                    <Input id="rate" name="rate" type="number" step="0.01" min="0" placeholder="0.00" className="w-full" aria-describedby="rate-error" required />
                    <div id="rate-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.rate && state.errors.rate.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                {/* Is Active */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="isActive" name="isActive" className="h-4 w-4 rounded border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring text-primary focus:ring-indigo-500" defaultChecked />
                    <Label htmlFor="isActive" className="text-sm font-medium">Is Active</Label>
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="description" className="mb-2 block text-sm font-medium">Description</Label>
                    <Input id="description" name="description" placeholder="Enter description (optional)" className="w-full" />
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
                    href="/dashboard/sub-treatment-types"
                    className="flex h-10 items-center rounded-lg bg-secondary/50 px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/50"
                >
                    Cancel
                </Link>
                <Button type="submit">Add Sub Treatment Type</Button>
            </div>
        </form>
    )
}
