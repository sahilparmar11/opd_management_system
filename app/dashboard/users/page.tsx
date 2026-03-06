
import { getUsers } from "@/lib/data"
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

export default async function UsersPage() {
    const users = await getUsers()

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
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Type</TableHead>
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
