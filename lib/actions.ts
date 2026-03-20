'use server'

import { z } from 'zod'
import prisma from './prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// --- Types ---

export type State = {
    errors?: {
        // Treatment Type
        name?: string[]
        shortName?: string[]
        hospitalId?: string[]
        description?: string[]
        // Hospital
        address?: string[]
        regCharge?: string[]
        validityMonths?: string[]
        openingDate?: string[]
        openingPatientNo?: string[]
        openingOpdNo?: string[]
        openingReceiptNo?: string[]
        // Diagnosis Type
        isActive?: string[]
        // Sub Treatment Type
        treatmentTypeId?: string[]
        rate?: string[]
        // Doctor
        staffId?: string[]
        studentId?: string[]
        // Patient
        patientName?: string[]
        mobileNo?: string[]
        age?: string[]
        gender?: string[]
        bloodGroup?: string[]
        occupation?: string[]
        stateId?: string[]
        cityId?: string[]
        pinCode?: string[]
        referredBy?: string[]
        emergencyContactNo?: string[]
        // OPD
        patientId?: string[]
        doctorId?: string[]
        registrationFee?: string[]
        // Receipt
        opdId?: string[]
        totalAmount?: string[]
        discount?: string[]
        netAmount?: string[]
        paymentModeId?: string[]
        remarks?: string[]
    }
    message?: string | null
}

// --- Schemas ---

const TreatmentTypeSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    shortName: z.string().optional(),
    hospitalId: z.coerce.number().min(1, 'Hospital is required'),
    description: z.string().optional(),
})

const HospitalSchema = z.object({
    name: z.string().min(1, 'Hospital Name is required'),
    address: z.string().optional(),
    regCharge: z.coerce.number().optional(),
    validityMonths: z.coerce.number().optional(),
    openingDate: z.string().min(1, 'Opening Date is required'),
    openingPatientNo: z.coerce.number().min(1, 'Opening Patient No is required'),
    openingOpdNo: z.coerce.number().min(1, 'Opening OPD No is required'),
    openingReceiptNo: z.coerce.number().min(1, 'Opening Receipt No is required'),
    description: z.string().optional(),
})

const DiagnosisTypeSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    shortName: z.string().optional(),
    hospitalId: z.coerce.number().min(1, 'Hospital is required'),
    isActive: z.coerce.boolean().optional(),
    description: z.string().optional(),
})

const SubTreatmentTypeSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    treatmentTypeId: z.coerce.number().min(1, 'Treatment Type is required'),
    rate: z.coerce.number().min(0, 'Rate must be positive'),
    isActive: z.coerce.boolean().optional(),
    description: z.string().optional(),
})

const DoctorSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    hospitalId: z.coerce.number().min(1, 'Hospital is required'),
    staffId: z.coerce.number().optional(),
    studentId: z.coerce.number().optional(),
    mobileNo: z.string().optional(),
    email: z.string().optional(),
    specialization: z.string().optional(),
    description: z.string().optional(),
})

const PatientSchema = z.object({
    patientName: z.string().min(1, 'Patient Name is required'),
    mobileNo: z.string().min(10, 'Mobile No must be at least 10 digits'),
    age: z.coerce.number().min(0, 'Age must be positive').optional(),
    gender: z.enum(['Male', 'Female', 'Other']),
    bloodGroup: z.string().optional(),
    occupation: z.string().optional(),
    address: z.string().optional(),
    hospitalId: z.coerce.number().min(1, 'Hospital is required'),
    stateId: z.coerce.number().optional(),
    cityId: z.coerce.number().optional(),
    pinCode: z.string().optional(),
    referredBy: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    description: z.string().optional(),
})

const OPDSchema = z.object({
    patientId: z.coerce.number().min(1, 'Patient is required'),
    doctorId: z.coerce.number().min(1, 'Doctor is required'),
    registrationFee: z.coerce.number().min(0, 'Registration Fee must be positive'),
    description: z.string().optional(),
})

const ReceiptSchema = z.object({
    opdId: z.coerce.number().min(1, 'OPD Entry is required'),
    totalAmount: z.coerce.number().min(0, 'Total Amount must be positive'),
    discount: z.coerce.number().min(0, 'Discount must be positive').optional(),
    netAmount: z.coerce.number().min(0, 'Net Amount must be positive'),
    paymentModeId: z.coerce.number().optional(),
    remarks: z.string().optional(),
})

// --- Helper Functions ---

async function generateOPDNumber(doctorId: number): Promise<string> {
    // Get the hospital for this doctor
    const doctor = await prisma.doctors.findUnique({
        where: { doctor_id: doctorId },
        include: { hospitals: true }
    })

    if (!doctor || !doctor.hospitals) {
        throw new Error('Doctor or hospital not found')
    }

    const hospital = doctor.hospitals
    const openingOPDNo = hospital.opening_opd_no

    // Get the highest OPD number for this hospital
    const lastOPD = await prisma.opd.findFirst({
        where: {
            doctors: {
                hospital_id: hospital.hospital_id
            }
        },
        orderBy: { opd_no: 'desc' }
    })

    let nextNumber: number
    if (lastOPD && lastOPD.opd_no) {
        const lastNumber = parseInt(lastOPD.opd_no)
        // Check if parseInt returned a valid number
        if (!isNaN(lastNumber)) {
            nextNumber = lastNumber + 1
        } else {
            // If parsing fails, fallback to opening number
            nextNumber = openingOPDNo
        }
    } else {
        nextNumber = openingOPDNo
    }

    // Ensure nextNumber is a valid number, not NaN
    if (isNaN(nextNumber)) {
        nextNumber = 1 // Default fallback
    }

    return nextNumber.toString()
}

async function generateReceiptNumber(opdId: number): Promise<string> {
    // Get the hospital for this OPD
    const opd = await prisma.opd.findUnique({
        where: { opd_id: opdId },
        include: {
            doctors: {
                include: { hospitals: true }
            }
        }
    })

    if (!opd || !opd.doctors.hospitals) {
        throw new Error('OPD or hospital not found')
    }

    const hospital = opd.doctors.hospitals
    const openingReceiptNo = hospital.opening_receipt_no

    // Get the highest receipt number for this hospital
    const lastReceipt = await prisma.receipts.findFirst({
        where: {
            opd: {
                doctors: {
                    hospital_id: hospital.hospital_id
                }
            }
        },
        orderBy: { receipt_no: 'desc' }
    })

    let nextNumber: number
    if (lastReceipt && lastReceipt.receipt_no) {
        const lastNumber = parseInt(lastReceipt.receipt_no)
        // Check if parseInt returned a valid number
        if (!isNaN(lastNumber)) {
            nextNumber = lastNumber + 1
        } else {
            // If parsing fails, fallback to opening number
            nextNumber = openingReceiptNo
        }
    } else {
        nextNumber = openingReceiptNo
    }

    // Ensure nextNumber is a valid number, not NaN
    if (isNaN(nextNumber)) {
        nextNumber = 1 // Default fallback
    }

    return nextNumber.toString()
}

export async function createTreatmentType(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = TreatmentTypeSchema.safeParse({
        name: formData.get('name'),
        shortName: formData.get('shortName'),
        hospitalId: formData.get('hospitalId'),
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Treatment Type.',
        }
    }

    const { name, shortName, hospitalId, description } = validatedFields.data

    try {
        const maxId = await prisma.treatment_types.aggregate({
            _max: { treatment_type_id: true }
        })
        const newId = (maxId._max.treatment_type_id || 0) + 1

        await prisma.treatment_types.create({
            data: {
                treatment_type_id: newId,
                treatment_type_name: name,
                treatment_type_short_name: shortName || null,
                hospital_id: hospitalId,
                description: description || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
            },
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Create Treatment Type.',
        }
    }

    revalidatePath('/dashboard/treatment-types')
    redirect('/dashboard/treatment-types')
}

export async function createHospital(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = HospitalSchema.safeParse({
        name: formData.get('name'),
        address: formData.get('address'),
        regCharge: formData.get('regCharge'),
        validityMonths: formData.get('validityMonths'),
        openingDate: formData.get('openingDate'),
        openingPatientNo: formData.get('openingPatientNo'),
        openingOpdNo: formData.get('openingOpdNo'),
        openingReceiptNo: formData.get('openingReceiptNo'),
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Hospital.',
        }
    }

    const {
        name, address, regCharge, validityMonths, openingDate,
        openingPatientNo, openingOpdNo, openingReceiptNo, description
    } = validatedFields.data

    try {
        const maxId = await prisma.hospitals.aggregate({
            _max: { hospital_id: true }
        })
        const newId = (maxId._max.hospital_id || 0) + 1

        await prisma.hospitals.create({
            data: {
                hospital_id: newId,
                hospital_name: name,
                address: address || null,
                registration_charge: regCharge ? regCharge : null,
                registration_validity_months: validityMonths ? validityMonths : null,
                opening_date: new Date(openingDate),
                opening_patient_no: openingPatientNo,
                opening_opd_no: openingOpdNo,
                opening_receipt_no: openingReceiptNo,
                description: description || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
                default_payment_mode_id: null,
                is_rate_enable_in_receipt: null,
                is_registration_fee_enable_in_opd: null,
            },
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Create Hospital.',
        }
    }

    revalidatePath('/dashboard/hospitals')
    redirect('/dashboard/hospitals')
}

export async function updateHospital(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = HospitalSchema.safeParse({
        name: formData.get('name'),
        address: formData.get('address'),
        regCharge: formData.get('regCharge'),
        validityMonths: formData.get('validityMonths'),
        openingDate: formData.get('openingDate'),
        openingPatientNo: formData.get('openingPatientNo'),
        openingOpdNo: formData.get('openingOpdNo'),
        openingReceiptNo: formData.get('openingReceiptNo'),
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Hospital.',
        }
    }

    const {
        name, address, regCharge, validityMonths, openingDate,
        openingPatientNo, openingOpdNo, openingReceiptNo, description
    } = validatedFields.data

    try {
        await prisma.hospitals.update({
            where: { hospital_id: id },
            data: {
                hospital_name: name,
                address: address || null,
                registration_charge: regCharge ? regCharge : null,
                registration_validity_months: validityMonths ? validityMonths : null,
                opening_date: new Date(openingDate),
                opening_patient_no: openingPatientNo,
                opening_opd_no: openingOpdNo,
                opening_receipt_no: openingReceiptNo,
                description: description || null,
                user_id: 1,
                modified: new Date(),
            },
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Update Hospital.',
        }
    }

    revalidatePath('/dashboard/hospitals')
    redirect('/dashboard/hospitals')
}

export async function deleteHospital(id: number): Promise<{ message: string; success: boolean }> {
    try {
        // Get all OPD entries from doctors in this hospital
        const doctors = await prisma.doctors.findMany({
            where: { hospital_id: id },
            select: { doctor_id: true }
        })
        
        const doctorIds = doctors.map(d => d.doctor_id)
        
        // Get all OPD entries from patients in this hospital
        const patients = await prisma.patients.findMany({
            where: { hospital_id: id },
            select: { patient_id: true }
        })
        
        const patientIds = patients.map(p => p.patient_id)
        
        // Get all OPD entries linked to these doctors or patients
        const opdEntries = await prisma.opd.findMany({
            where: {
                OR: [
                    { treated_by_doctor_id: { in: doctorIds } },
                    { patient_id: { in: patientIds } }
                ]
            },
            select: { opd_id: true }
        })
        
        const opdIds = opdEntries.map(o => o.opd_id)
        
        // Delete in cascade order
        if (opdIds.length > 0) {
            await prisma.receipts.deleteMany({
                where: { opd_id: { in: opdIds } }
            })
            
            await prisma.opd_diagnosis_types.deleteMany({
                where: { opd_id: { in: opdIds } }
            })
            
            await prisma.opd.deleteMany({
                where: { opd_id: { in: opdIds } }
            })
        }
        
        // Delete diagnosis types linked to this hospital
        await prisma.diagnosis_types.deleteMany({
            where: { hospital_id: id }
        })
        
        // Delete doctors
        if (doctorIds.length > 0) {
            await prisma.doctors.deleteMany({
                where: { hospital_id: id }
            })
        }
        
        // Delete patients
        if (patientIds.length > 0) {
            await prisma.patients.deleteMany({
                where: { hospital_id: id }
            })
        }
        
        // Finally delete the hospital
        await prisma.hospitals.delete({
            where: { hospital_id: id },
        })
        revalidatePath('/dashboard/hospitals')
        return { message: 'Deleted Hospital.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Hospital.',
            success: false
        }
    }
}

export async function createDiagnosisType(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = DiagnosisTypeSchema.safeParse({
        name: formData.get('name'),
        shortName: formData.get('shortName'),
        hospitalId: formData.get('hospitalId'),
        isActive: formData.get('isActive') === 'on',
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Diagnosis Type.',
        }
    }

    const { name, shortName, hospitalId, isActive, description } = validatedFields.data

    try {
        const maxId = await prisma.diagnosis_types.aggregate({
            _max: { diagnosis_type_id: true }
        })
        const newId = (maxId._max.diagnosis_type_id || 0) + 1

        await prisma.diagnosis_types.create({
            data: {
                diagnosis_type_id: newId,
                diagnosis_type_name: name,
                diagnosis_type_short_name: shortName || null,
                is_active: isActive !== undefined ? isActive : true,
                hospital_id: hospitalId,
                description: description || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Create Diagnosis Type.',
        }
    }

    revalidatePath('/dashboard/diagnosis-types')
    redirect('/dashboard/diagnosis-types')
}

export async function updateDiagnosisType(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = DiagnosisTypeSchema.safeParse({
        name: formData.get('name'),
        shortName: formData.get('shortName'),
        hospitalId: formData.get('hospitalId'),
        isActive: formData.get('isActive') === 'on',
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Diagnosis Type.',
        }
    }

    const { name, shortName, hospitalId, isActive, description } = validatedFields.data

    try {
        await prisma.diagnosis_types.update({
            where: { diagnosis_type_id: id },
            data: {
                diagnosis_type_name: name,
                diagnosis_type_short_name: shortName || null,
                is_active: isActive !== undefined ? isActive : true,
                hospital_id: hospitalId,
                description: description || null,
                user_id: 1,
                modified: new Date(),
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Update Diagnosis Type.',
        }
    }

    revalidatePath('/dashboard/diagnosis-types')
    redirect('/dashboard/diagnosis-types')
}

export async function deleteDiagnosisType(id: number): Promise<{ message: string; success: boolean }> {
    try {
        // Delete all opd_diagnosis_types linked to this diagnosis type
        await prisma.opd_diagnosis_types.deleteMany({
            where: { diagnosis_type_id: id }
        })

        // Delete the diagnosis type
        await prisma.diagnosis_types.delete({
            where: { diagnosis_type_id: id },
        })
        revalidatePath('/dashboard/diagnosis-types')
        return { message: 'Deleted Diagnosis Type.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Diagnosis Type.',
            success: false
        }
    }
}

export async function createSubTreatmentType(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = SubTreatmentTypeSchema.safeParse({
        name: formData.get('name'),
        treatmentTypeId: formData.get('treatmentTypeId'),
        rate: formData.get('rate'),
        isActive: formData.get('isActive') === 'on',
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Sub Treatment Type.',
        }
    }

    const { name, treatmentTypeId, rate, isActive, description } = validatedFields.data

    try {
        const maxId = await prisma.sub_treatment_types.aggregate({
            _max: { sub_treatment_type_id: true }
        })
        const newId = (maxId._max.sub_treatment_type_id || 0) + 1

        await prisma.sub_treatment_types.create({
            data: {
                sub_treatment_type_id: newId,
                sub_treatment_type_name: name,
                treatment_type_id: treatmentTypeId,
                rate: rate,
                is_active: isActive !== undefined ? isActive : true,
                description: description || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
                account_id: null,
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Create Sub Treatment Type.',
        }
    }

    revalidatePath('/dashboard/sub-treatment-types')
    redirect('/dashboard/sub-treatment-types')
}

export async function updateSubTreatmentType(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = SubTreatmentTypeSchema.safeParse({
        name: formData.get('name'),
        treatmentTypeId: formData.get('treatmentTypeId'),
        rate: formData.get('rate'),
        isActive: formData.get('isActive') === 'on',
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Sub Treatment Type.',
        }
    }

    const { name, treatmentTypeId, rate, isActive, description } = validatedFields.data

    try {
        await prisma.sub_treatment_types.update({
            where: { sub_treatment_type_id: id },
            data: {
                sub_treatment_type_name: name,
                treatment_type_id: treatmentTypeId,
                rate: rate,
                is_active: isActive !== undefined ? isActive : true,
                description: description || null,
                user_id: 1,
                modified: new Date(),
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Update Sub Treatment Type.',
        }
    }

    revalidatePath('/dashboard/sub-treatment-types')
    redirect('/dashboard/sub-treatment-types')
}

export async function deleteSubTreatmentType(id: number): Promise<{ message: string; success: boolean }> {
    try {
        // Delete all receipt_tran linked to this sub treatment type
        await prisma.receipt_tran.deleteMany({
            where: { sub_treatment_type_id: id }
        })

        // Delete the sub treatment type
        await prisma.sub_treatment_types.delete({
            where: { sub_treatment_type_id: id },
        })
        revalidatePath('/dashboard/sub-treatment-types')
        return { message: 'Deleted Sub Treatment Type.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Sub Treatment Type.',
            success: false
        }
    }
}

export async function createDoctor(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = DoctorSchema.safeParse({
        name: formData.get('name'),
        hospitalId: formData.get('hospitalId'),
        staffId: formData.get('staffId'),
        studentId: formData.get('studentId'),
        mobileNo: formData.get('mobileNo') || undefined,
        email: formData.get('email') || undefined,
        specialization: formData.get('specialization') || undefined,
        description: formData.get('description') || undefined,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Doctor.',
        }
    }

    const { name, hospitalId, staffId, studentId, mobileNo, email, specialization, description } = validatedFields.data

    try {
        const maxId = await prisma.doctors.aggregate({
            _max: { doctor_id: true }
        })
        const newId = (maxId._max.doctor_id || 0) + 1

        await prisma.doctors.create({
            data: {
                doctor_id: newId,
                doctor_name: name,
                hospital_id: hospitalId,
                staff_id: staffId || null,
                student_id: studentId || null,
                mobile_no: mobileNo || null,
                email: email || null,
                specialization: specialization || null,
                description: description || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Create Doctor.',
        }
    }

    revalidatePath('/dashboard/doctors')
    redirect('/dashboard/doctors')
}

export async function updateDoctor(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = DoctorSchema.safeParse({
        name: formData.get('name'),
        hospitalId: formData.get('hospitalId'),
        staffId: formData.get('staffId'),
        studentId: formData.get('studentId'),
        mobileNo: formData.get('mobileNo') || undefined,
        email: formData.get('email') || undefined,
        specialization: formData.get('specialization') || undefined,
        description: formData.get('description') || undefined,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Doctor.',
        }
    }

    const { name, hospitalId, staffId, studentId, mobileNo, email, specialization, description } = validatedFields.data

    try {
        await prisma.doctors.update({
            where: { doctor_id: id },
            data: {
                doctor_name: name,
                hospital_id: hospitalId,
                staff_id: staffId || null,
                student_id: studentId || null,
                mobile_no: mobileNo || null,
                email: email || null,
                specialization: specialization || null,
                description: description || null,
                user_id: 1,
                modified: new Date(),
            },
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Update Doctor.',
        }
    }

    revalidatePath('/dashboard/doctors')
    redirect('/dashboard/doctors')
}

export async function deleteDoctor(id: number): Promise<{ message: string; success: boolean }> {
    try {
        // Get all OPD entries for this doctor
        const opdEntries = await prisma.opd.findMany({
            where: { treated_by_doctor_id: id },
            select: { opd_id: true }
        })

        // Delete in cascade order
        if (opdEntries.length > 0) {
            const opdIds = opdEntries.map(o => o.opd_id)

            // Delete receipts that reference these OPD entries
            await prisma.receipts.deleteMany({
                where: { opd_id: { in: opdIds } }
            })

            // Delete opd_diagnosis_types that reference these OPD entries
            await prisma.opd_diagnosis_types.deleteMany({
                where: { opd_id: { in: opdIds } }
            })

            // Delete the OPD entries themselves
            await prisma.opd.deleteMany({
                where: { treated_by_doctor_id: id }
            })
        }

        // Now delete the doctor
        await prisma.doctors.delete({
            where: { doctor_id: id },
        })
        revalidatePath('/dashboard/doctors')
        return { message: 'Deleted Doctor.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Doctor.',
            success: false
        }
    }
}

export async function createPatient(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = PatientSchema.safeParse({
        patientName: formData.get('patientName'),
        mobileNo: formData.get('mobileNo'),
        age: formData.get('age'),
        gender: formData.get('gender'),
        bloodGroup: formData.get('bloodGroup'),
        occupation: formData.get('occupation'),
        address: formData.get('address'),
        hospitalId: formData.get('hospitalId'),
        stateId: formData.get('stateId'),
        cityId: formData.get('cityId'),
        pinCode: formData.get('pinCode') || undefined,
        referredBy: formData.get('referredBy') || undefined,
        emergencyContactNo: formData.get('emergencyContactNo') || undefined,
        description: formData.get('description') || undefined,
    })

    if (!validatedFields.success) {
        console.error('Validation Errors:', validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Patient.',
        }
    }

    const {
        patientName, mobileNo, age, gender, bloodGroup, occupation, address,
        hospitalId, stateId, cityId, pinCode, referredBy, emergencyContactNo, description
    } = validatedFields.data

    try {
        const maxId = await prisma.patients.aggregate({
            _max: { patient_id: true }
        })
        const newId = (maxId._max.patient_id || 0) + 1


        const lastPatient = await prisma.patients.findFirst({
            orderBy: { patient_id: 'desc' }
        })
        const lastPatientNo = lastPatient ? lastPatient.patient_no : 0
        const newPatientNo = lastPatientNo + 1

        await prisma.patients.create({
            data: {
                patient_id: newId,
                patient_name: patientName,
                patient_no: newPatientNo,
                registration_datetime: new Date(),
                age: age || null,
                gender: gender,
                blood_group: bloodGroup || null,
                occupation: occupation || null,
                address: address || null,
                hospital_id: hospitalId,
                state_id: stateId || null,
                city_id: cityId || null,
                pin_code: pinCode || null,
                mobile_no: mobileNo,
                referred_by: referredBy || null,
                emergency_contact_no: emergencyContactNo || null,
                description: description || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Create Patient.',
        }
    }

    revalidatePath('/dashboard/patients')
    redirect('/dashboard/patients')
}

export async function createOPD(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = OPDSchema.safeParse({
        patientId: formData.get('patientId'),
        doctorId: formData.get('doctorId'),
        registrationFee: formData.get('registrationFee'),
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create OPD.',
        }
    }

    const { patientId, doctorId, registrationFee, description } = validatedFields.data

    try {
        const maxId = await prisma.opd.aggregate({
            _max: { opd_id: true }
        })
        const newId = (maxId._max.opd_id || 0) + 1

        // Generate OPD No based on hospital's opening number
        const newOPDNo = await generateOPDNumber(doctorId)

        await prisma.opd.create({
            data: {
                opd_id: newId,
                opd_no: newOPDNo,
                opd_datetime: new Date(),
                patient_id: patientId,
                is_follow_up_case: false, // Default to false for new entry
                treated_by_doctor_id: doctorId,
                registration_fee: registrationFee,
                description: description || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
                old_opd_no: null,
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Create OPD.',
        }
    }

    revalidatePath('/dashboard/opd')
    redirect('/dashboard/opd')
}

export async function createReceipt(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = ReceiptSchema.safeParse({
        opdId: formData.get('opdId'),
        totalAmount: formData.get('totalAmount'),
        discount: formData.get('discount'),
        netAmount: formData.get('netAmount'),
        paymentModeId: formData.get('paymentModeId'),
        remarks: formData.get('remarks'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Receipt.',
        }
    }

    const {
        opdId, totalAmount, discount, netAmount,
        paymentModeId, remarks
    } = validatedFields.data

    try {
        const maxId = await prisma.receipts.aggregate({
            _max: { receipt_id: true }
        })
        const newId = (maxId._max.receipt_id || 0) + 1

        // Generate Receipt No based on hospital's opening number
        const newReceiptNo = await generateReceiptNumber(opdId)

        await prisma.receipts.create({
            data: {
                receipt_id: newId,
                receipt_no: newReceiptNo,
                receipt_date: new Date(),
                opd_id: opdId,
                amount_paid: netAmount,
                description: remarks || null,
                user_id: 1,
                created: new Date(),
                modified: new Date(),
                payment_mode_id: paymentModeId || 1, // Default to 1 if not provided

            }
        })
    } catch (error: any) {
        console.error('Database Error:', error)
        return {
            message: `Database Error: Failed to Create Receipt. ${error.message}`,
        }
    }

    revalidatePath('/dashboard/receipts')
    redirect('/dashboard/receipts')
}

export async function updateTreatmentType(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = TreatmentTypeSchema.safeParse({
        name: formData.get('name'),
        shortName: formData.get('shortName'),
        hospitalId: formData.get('hospitalId'),
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Treatment Type.',
        }
    }

    const { name, shortName, hospitalId, description } = validatedFields.data

    try {
        await prisma.treatment_types.update({
            where: { treatment_type_id: id },
            data: {
                treatment_type_name: name,
                treatment_type_short_name: shortName || null,
                hospital_id: hospitalId,
                description: description || null,
                user_id: 1,
                modified: new Date(),
            },
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Update Treatment Type.',
        }
    }

    revalidatePath('/dashboard/treatment-types')
    redirect('/dashboard/treatment-types')
}

export async function deleteTreatmentType(id: number): Promise<{ message: string; success: boolean }> {
    try {
        // Delete all sub-treatment types linked to this treatment type
        await prisma.sub_treatment_types.deleteMany({
            where: { treatment_type_id: id }
        })

        // Delete the treatment type
        await prisma.treatment_types.delete({
            where: { treatment_type_id: id },
        })
        revalidatePath('/dashboard/treatment-types')
        return { message: 'Deleted Treatment Type.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Treatment Type.',
            success: false
        }
    }
}

export async function updatePatient(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = PatientSchema.safeParse({
        patientName: formData.get('patientName'),
        mobileNo: formData.get('mobileNo'),
        age: formData.get('age'),
        gender: formData.get('gender'),
        bloodGroup: formData.get('bloodGroup'),
        occupation: formData.get('occupation'),
        address: formData.get('address'),
        hospitalId: formData.get('hospitalId'),
        stateId: formData.get('stateId'),
        cityId: formData.get('cityId'),
        pinCode: formData.get('pinCode') || undefined,
        referredBy: formData.get('referredBy') || undefined,
        emergencyContactNo: formData.get('emergencyContactNo') || undefined,
        description: formData.get('description') || undefined,
    })

    if (!validatedFields.success) {
        console.error('Validation Errors:', validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Patient.',
        }
    }

    const {
        patientName, mobileNo, age, gender, bloodGroup, occupation, address,
        hospitalId, stateId, cityId, pinCode, referredBy, emergencyContactNo, description
    } = validatedFields.data

    try {
        await prisma.patients.update({
            where: { patient_id: id },
            data: {
                patient_name: patientName,
                age: age || null,
                gender: gender,
                blood_group: bloodGroup || null,
                occupation: occupation || null,
                address: address || null,
                hospital_id: hospitalId,
                state_id: stateId || null,
                city_id: cityId || null,
                pin_code: pinCode || null,
                mobile_no: mobileNo,
                referred_by: referredBy || null,
                emergency_contact_no: emergencyContactNo || null,
                description: description || null,
                user_id: 1,
                modified: new Date(),
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Update Patient.',
        }
    }

    revalidatePath('/dashboard/patients')
    redirect('/dashboard/patients')
}

export async function deletePatient(id: number): Promise<{ message: string; success: boolean }> {
    try {
        // Get all OPD entries for this patient
        const opdEntries = await prisma.opd.findMany({
            where: { patient_id: id },
            select: { opd_id: true }
        })

        // Delete in cascade order
        if (opdEntries.length > 0) {
            const opdIds = opdEntries.map(o => o.opd_id)

            // Delete receipts that reference these OPD entries
            await prisma.receipts.deleteMany({
                where: { opd_id: { in: opdIds } }
            })

            // Delete opd_diagnosis_types that reference these OPD entries
            await prisma.opd_diagnosis_types.deleteMany({
                where: { opd_id: { in: opdIds } }
            })

            // Delete the OPD entries themselves
            await prisma.opd.deleteMany({
                where: { patient_id: id }
            })
        }

        // Now delete the patient
        await prisma.patients.delete({
            where: { patient_id: id },
        })
        revalidatePath('/dashboard/patients')
        return { message: 'Deleted Patient.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Patient.',
            success: false
        }
    }
}

export async function updateOPD(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = OPDSchema.safeParse({
        patientId: formData.get('patientId'),
        doctorId: formData.get('doctorId'),
        registrationFee: formData.get('registrationFee'),
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update OPD.',
        }
    }

    const { patientId, doctorId, registrationFee, description } = validatedFields.data

    try {
        await prisma.opd.update({
            where: { opd_id: id },
            data: {
                patient_id: patientId,
                treated_by_doctor_id: doctorId,
                registration_fee: registrationFee,
                description: description || null,
                user_id: 1,
                modified: new Date(),
            }
        })
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Update OPD.',
        }
    }

    revalidatePath('/dashboard/opd')
    redirect('/dashboard/opd')
}

export async function deleteOPD(id: number): Promise<{ message: string; success: boolean }> {
    try {
        // Delete receipts that reference this OPD entry
        await prisma.receipts.deleteMany({
            where: { opd_id: id }
        })

        // Delete opd_diagnosis_types that reference this OPD entry
        await prisma.opd_diagnosis_types.deleteMany({
            where: { opd_id: id }
        })

        // Delete the OPD entry
        await prisma.opd.delete({
            where: { opd_id: id }
        })

        revalidatePath('/dashboard/opd')
        return { message: 'Deleted OPD Entry.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete OPD Entry.',
            success: false
        }
    }
}

export async function cancelReceipt(id: number): Promise<{ message: string; success: boolean }> {
    try {
        await prisma.receipts.update({
            where: { receipt_id: id },
            data: {
                cancellation_datetime: new Date(),
                cancellation_by_user_id: 1, // User ID
                cancellation_remarks: 'Cancelled by user', // generic cancel reason since this is just a quick action
                modified: new Date()
            }
        })
        revalidatePath('/dashboard/receipts')
        return { message: 'Receipt Cancelled Successfully.', success: true }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Cancel Receipt.',
            success: false
        }
    }
}
