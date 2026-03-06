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
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <ClipboardList className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">OPD Manager</span>
                                    <span className="">v1.0.0</span>
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
                            {appItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Master Data</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {masterItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}