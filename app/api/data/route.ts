import { NextResponse } from 'next/server';
import { getPatients, getDoctors, getHospitals, getTreatmentTypes, getSubTreatmentTypes, getDiagnosisTypes, getOPDs, getReceipts, getUsers } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const [patients, doctors, hospitals, treatmentTypes, subTreatmentTypes, diagnosisTypes, opds, receipts, users] = await Promise.all([
            getPatients(),
            getDoctors(),
            getHospitals(),
            getTreatmentTypes(),
            getSubTreatmentTypes(),
            getDiagnosisTypes(),
            getOPDs(),
            getReceipts(),
            getUsers()
        ]);
        
        return NextResponse.json({
            patients, doctors, hospitals, treatmentTypes, subTreatmentTypes, diagnosisTypes, opds, receipts, users
        });
    } catch(err) {
        console.error('API Data Fetch Error:', err);
        return NextResponse.json({error: "Failed to fetch master data"}, {status: 500});
    }
}
