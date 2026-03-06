import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const doctors = await prisma.doctors.findMany({
            orderBy: { doctor_name: 'asc' }
        });

        const formattedDoctors = doctors.map((doctor) => ({
            id: doctor.doctor_id,
            name: doctor.doctor_name,
            description: doctor.description || '', // Handle null description
        }));

        return NextResponse.json(formattedDoctors);
    } catch (error) {
        console.error('Failed to fetch doctors:', error);
        return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
    }
}
