import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const users = await prisma.users.findMany({
            orderBy: { user_id: 'asc' }
        });

        const formattedUsers = users.map((user) => ({
            id: user.user_id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            type: user.user_type,
        }));

        return NextResponse.json(formattedUsers);
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}
