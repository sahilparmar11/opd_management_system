'use client'

import { useActionState, useState, useEffect } from 'react'
import { createReceipt, State } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function CreateReceiptForm({ opdList }: { opdList: any[] }) {
    const initialState: State = { message: null, errors: {} }
    const [state, formAction] = useActionState(createReceipt, initialState)

    const [total, setTotal] = useState<string>('')
    const [discount, setDiscount] = useState<string>('')
    const [net, setNet] = useState<string>('')

    useEffect(() => {
        const t = parseFloat(total) || 0
        const d = parseFloat(discount) || 0
        setNet((t - d).toFixed(2))
    }, [total, discount])

    return (
        <form action={formAction}>
            <div className="rounded-md bg-secondary/50 p-4 md:p-6 space-y-4">

                {/* OPD Selection */}
                <div>
                    <Label htmlFor="opd" className="mb-2 block text-sm font-medium">Select OPD Entry</Label>
                    <div className="relative">
                        <select
                            id="opd"
                            name="opdId"
                            className="peer block w-full cursor-pointer rounded-md border border-input bg-background text-foreground focus:border-ring focus:ring-1 focus:ring-ring py-2 pl-2 text-sm outline-2 placeholder:text-muted-foreground"
                            defaultValue=""
                            aria-describedby="opd-error"
                            required
                        >
                            <option value="" disabled>Select an OPD entry</option>
                            {opdList.map((opd) => (
                                <option key={opd.opd_id} value={opd.opd_id}>
                                    {opd.patients.patient_name} - {new Date(opd.opd_datetime).toLocaleDateString()} (Doc: {opd.doctors.doctor_name})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="opd-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.opdId && state.errors.opdId.map((error: string) => (
                            <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Total Amount */}
                    <div>
                        <Label htmlFor="totalAmount" className="mb-2 block text-sm font-medium">Total Amount</Label>
                        <Input
                            id="totalAmount"
                            name="totalAmount"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            className="w-full"
                            aria-describedby="totalAmount-error"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                            required
                            min="0"
                        />
                        <div id="totalAmount-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.totalAmount && state.errors.totalAmount.map((error: string) => (
                                <p key={error} className="mt-2 text-sm text-amber-500">{error}</p>
                            ))}
                        </div>
                    </div>

                    {/* Discount */}
                    <div>
                        <Label htmlFor="discount" className="mb-2 block text-sm font-medium">Discount</Label>
                        <Input
                            id="discount"
                            name="discount"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            className="w-full"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            min="0"
                        />
                    </div>

                    {/* Net Amount */}
                    <div>
                        <Label htmlFor="netAmount" className="mb-2 block text-sm font-medium">Net Amount</Label>
                        <Input
                            id="netAmount"
                            name="netAmount"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            className="w-full bg-secondary/50"
                            readOnly
                            value={net}
                        />
                        <input type="hidden" name="netAmount" value={net} />
                    </div>
                </div>

                {/* Remarks */}
                <div>
                    <Label htmlFor="remarks" className="mb-2 block text-sm font-medium">Remarks</Label>
                    <Input id="remarks" name="remarks" placeholder="Enter remarks (optional)" className="w-full" />
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
                    href="/dashboard/receipts"
                    className="flex h-10 items-center rounded-lg bg-secondary/50 px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/50"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Receipt</Button>
            </div>
        </form>
    )
}
