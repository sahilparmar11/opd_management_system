"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { LogoutButton } from "@/components/logout-button"

export function TopNav() {
    const pathname = usePathname()
    const router = useRouter()
    
    // Determine depth for back button: /dashboard/patients/add -> back button active. /dashboard/patients -> breadcrumb.
    const segments = pathname.split('/').filter(Boolean)
    const isDeep = segments.length > 2
    
    return (
        <div className="flex items-center justify-between w-full h-full">
            <div className="flex items-center">
                {isDeep ? (
                    <Button variant="ghost" size="sm" onClick={() => router.back()} className="gap-2 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Button>
                ) : (
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/dashboard" className="text-xs">
                                    OPD Management
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-xs capitalize">{segments[1] || 'Dashboard'}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                )}
            </div>
            
            <div className="flex items-center gap-2">
                <ModeToggle />
                <LogoutButton />
            </div>
        </div>
    )
}
