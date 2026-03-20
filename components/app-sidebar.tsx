"use client"

import * as React from "react"
import {
    Activity,
    Building2,
    ClipboardList,
    LayoutDashboard,
    Pill,
    Receipt,
    Stethoscope,
    TestTube,
    UserCog,
    Users,
    LineChart,
    HeartPulse,
} from "lucide-react"
import Link from "next/link"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"

const appItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "OPD",
        url: "/dashboard/opd",
        icon: ClipboardList,
    },
    {
        title: "Receipts",
        url: "/dashboard/receipts",
        icon: Receipt,
    },
    {
        title: "Patients",
        url: "/dashboard/patients",
        icon: Users,
    },
    {
        title: "Reports",
        url: "/dashboard/reports",
        icon: LineChart,
    },
]

const masterItems = [
    {
        title: "Doctors",
        url: "/dashboard/doctors",
        icon: Stethoscope,
    },
    {
        title: "Hospitals",
        url: "/dashboard/hospitals",
        icon: Building2,
    },
    {
        title: "Users",
        url: "/dashboard/users",
        icon: UserCog,
    },
    {
        title: "Diagnosis Types",
        url: "/dashboard/diagnosis-types",
        icon: Activity,
    },
    {
        title: "Treatment Types",
        url: "/dashboard/treatment-types",
        icon: Pill,
    },
    {
        title: "Sub Treatment Types",
        url: "/dashboard/sub-treatment-types",
        icon: TestTube,
    },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [userType, setUserType] = React.useState<string | null>(null)
    const [isMounted, setIsMounted] = React.useState(false)
    const { setOpenMobile } = useSidebar()

    React.useEffect(() => {
        setIsMounted(true)
        const userStr = localStorage.getItem('user')
        if (userStr) {
            try {
                const user = JSON.parse(userStr)
                if (user && user.user_type) {
                    setUserType(user.user_type)
                }
            } catch (error) {
                console.error("Failed to parse user from local storage", error)
            }
        }
    }, [])

    const filteredAppItems = React.useMemo(() => {
        if (!userType) return appItems // Default if not yet loaded or unknown

        if (userType === 'Administrator') return appItems

        return appItems.filter(item => {
            if (userType === 'Front Desk') {
                return ['Dashboard', 'OPD', 'Patients', 'Receipts'].includes(item.title)
            }
            if (userType === 'Doctor') {
                return ['Dashboard', 'OPD', 'Patients'].includes(item.title)
            }
            if (userType === 'Billing Operator') {
                return ['Dashboard', 'Receipts'].includes(item.title)
            }
            return false
        })
    }, [userType])

    // Only administrators can see the master items
    const showMasterItems = userType === 'Administrator'

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" onClick={() => setOpenMobile(false)}>
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                                    <HeartPulse className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none px-1">
                                    <span className="font-semibold text-primary text-base tracking-tight">OutCare</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {isMounted ? filteredAppItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} onClick={() => setOpenMobile(false)}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )) : appItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} onClick={() => setOpenMobile(false)}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                
                {(!isMounted || showMasterItems) && (
                    <SidebarGroup>
                        <SidebarGroupLabel>Master Data</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {masterItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url} onClick={() => setOpenMobile(false)}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}