'use client'

import { useActionState } from 'react'
import { createPatient, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function CreatePatientForm({ hospitals }: { hospitals: any[] }) {
    const initialState: State = { message: null, errors: {} }
    const [state, formAction] = useActionState(createPatient, initialState)

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
                            defaultValue=""
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

                {/* Patient Name */}
                <div>
                    <Label htmlFor="patientName" className="mb-2 block text-sm font-medium">Patient Name</Label>
                    <Input id="patientName" name="patientName" placeholder="Enter patient name" className="w-full" aria-describedby="patientName-error" required />
                    <div id="patientName-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.patientName && state.errors.patientName.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Mobile No */}
                    <div>
                        <Label htmlFor="mobileNo" className="mb-2 block text-sm font-medium">Mobile No</Label>
                        <Input id="mobileNo" name="mobileNo" type="tel" pattern="\d{10}" title="Must be exactly 10 digits" minLength={10} maxLength={10} placeholder="Enter mobile no" className="w-full" aria-describedby="mobileNo-error" required />
                        <div id="mobileNo-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.mobileNo && state.errors.mobileNo.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                            ))}
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <div>
                        <Label htmlFor="emergencyContactNo" className="mb-2 block text-sm font-medium">Emergency Contact</Label>
                        <Input id="emergencyContactNo" name="emergencyContactNo" placeholder="Optional" className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {/* Age */}
                    <div>
                        <Label htmlFor="age" className="mb-2 block text-sm font-medium">Age</Label>
                        <Input id="age" name="age" type="number" min="0" max="150" placeholder="Age" className="w-full" />
                    </div>

                    {/* Gender */}
                    <div>
                        <Label htmlFor="gender" className="mb-2 block text-sm font-medium">Gender</Label>
                        <select
                            id="gender"
                            name="gender"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue=""
                            aria-describedby="gender-error"
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <div id="gender-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.gender && state.errors.gender.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                            ))}
                        </div>
                    </div>

                    {/* Blood Group */}
                    <div>
                        <Label htmlFor="bloodGroup" className="mb-2 block text-sm font-medium">Blood Group</Label>
                        <select
                            id="bloodGroup"
                            name="bloodGroup"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue=""
                        >
                            <option value="">Select (Optional)</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                </div>

                {/* Address */}
                <div>
                    <Label htmlFor="address" className="mb-2 block text-sm font-medium">Address</Label>
                    <Input id="address" name="address" placeholder="Enter address" className="w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Occupation */}
                    <div>
                        <Label htmlFor="occupation" className="mb-2 block text-sm font-medium">Occupation</Label>
                        <Input id="occupation" name="occupation" placeholder="Optional" className="w-full" />
                    </div>

                    {/* Referred By */}
                    <div>
                        <Label htmlFor="referredBy" className="mb-2 block text-sm font-medium">Referred By</Label>
                        <Input id="referredBy" name="referredBy" placeholder="Optional" className="w-full" />
                    </div>
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
                    href="/dashboard/patients"
                    className="flex h-10 items-center rounded-lg bg-secondary/50 px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/50"
                >
                    Cancel
                </Link>
                <Button type="submit">Add Patient</Button>
            </div>
        </form>
    )
}
