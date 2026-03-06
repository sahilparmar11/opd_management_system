import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const patients = await prisma.patients.findMany({
            orderBy: { patient_id: 'desc' },
            take: 100 // Limit to recent 100 for performance if needed, or remove for all
        });

        const formattedPatients = patients.map((patient) => ({
            id: patient.patient_id,
            name: patient.patient_name,
            patientNo: patient.patient_no,
            mobile: patient.mobile_no,
            gender: patient.gender,
            age: patient.age ?? 0, // Handle optional age
        }));

        return NextResponse.json(formattedPatients);
    } catch (error) {
        console.error('Failed to fetch patients:', error);
        return NextResponse.json({ error: 'Failed to fetch patients' }, { status: 500 });
    }
}
