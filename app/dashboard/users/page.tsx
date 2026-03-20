'use client'

import { useEffect } from "react"
import { useData } from "@/context/DataContext"
import { useSort } from "@/hooks/use-sort"
import { SortableHeader } from "@/components/sortable-header"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function UsersPage() {
    const { data, loading, refreshData } = useData()
    const baseUsers = data?.users || []

    useEffect(() => {
        refreshData(true)
    }, [refreshData])

    const { items: users, requestSort, sortConfig } = useSort(baseUsers, { key: 'user_id', direction: 'asc' })

    if (loading && users.length === 0) {
        return <div className="p-8 text-center text-muted-foreground">Loading users...</div>
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Users</h1>
            <Card>
                <CardHeader>
                    <CardTitle>All Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                                <SortableHeader label="ID" sortKey="user_id" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Name" sortKey="first_name" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Email" sortKey="email" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                                <SortableHeader label="Type" sortKey="user_type" currentSort={sortConfig} onSort={requestSort} className="font-semibold text-xs uppercase text-muted-foreground" />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.user_id}>
                                    <TableCell>{user.user_id}</TableCell>
                                    <TableCell className="flex items-center gap-2 font-medium">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>
                                                {user.first_name[0]}{user.last_name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        {user.first_name} {user.last_name}
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell className="capitalize">{user.user_type}</TableCell>
                                </TableRow>
                            ))}
                            {users.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">
                                        No users found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
