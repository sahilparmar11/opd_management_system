'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Ban } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface CancelButtonProps {
    id: number
    onCancel: (id: number) => Promise<{ message?: string | null; success?: boolean }>
}

export function CancelButton({ id, onCancel }: CancelButtonProps) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleCancel = async () => {
        setLoading(true)
        setError(null)
        try {
            const result = await onCancel(id)
            
            if (result.success === false) {
                setError(result.message || 'Failed to cancel')
                return
            }
            
            setOpen(false)
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to cancel'
            setError(errorMessage)
            console.error('Cancel error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-orange-500" title="Cancel Receipt">
                    <Ban className="h-4 w-4" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Cancel Receipt?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to cancel this receipt? This action will mark it as cancelled but will not delete it from records.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {error && (
                    <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md text-sm">
                        {error}
                    </div>
                )}
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={loading}>Close</AlertDialogCancel>
                    <AlertDialogAction onClick={handleCancel} disabled={loading} className="bg-orange-500 hover:bg-orange-600">
                        {loading ? 'Cancelling...' : 'Confirm Cancel'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
