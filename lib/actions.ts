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

// --- Actions ---

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

export async function deleteHospital(id: number): Promise<{ message: string }> {
    try {
        // Check for dependencies (Doctors, Patients, etc.)
        const doctors = await prisma.doctors.findFirst({
            where: { hospital_id: id }
        })
        if (doctors) return { message: 'Cannot delete: Doctors are linked to this Hospital.' }

        const patients = await prisma.patients.findFirst({
            where: { hospital_id: id }
        })
        if (patients) return { message: 'Cannot delete: Patients are linked to this Hospital.' }

        await prisma.hospitals.delete({
            where: { hospital_id: id },
        })
        revalidatePath('/dashboard/hospitals')
        return { message: 'Deleted Hospital.' }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Hospital.',
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

export async function createDoctor(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = DoctorSchema.safeParse({
        name: formData.get('name'),
        hospitalId: formData.get('hospitalId'),
        staffId: formData.get('staffId'),
        studentId: formData.get('studentId'),
        description: formData.get('description') || undefined,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Doctor.',
        }
    }

    const { name, hospitalId, staffId, studentId, description } = validatedFields.data

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
        description: formData.get('description') || undefined,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Doctor.',
        }
    }

    const { name, hospitalId, staffId, studentId, description } = validatedFields.data

    try {
        await prisma.doctors.update({
            where: { doctor_id: id },
            data: {
                doctor_name: name,
                hospital_id: hospitalId,
                staff_id: staffId || null,
                student_id: studentId || null,
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

export async function deleteDoctor(id: number): Promise<{ message: string }> {
    try {
        // Check for dependencies (OPD)
        const opdEntries = await prisma.opd.findFirst({
            where: { treated_by_doctor_id: id }
        })

        if (opdEntries) {
            return {
                message: 'Cannot delete: This Doctor has OPD entries linked to them.'
            }
        }

        await prisma.doctors.delete({
            where: { doctor_id: id },
        })
        revalidatePath('/dashboard/doctors')
        return { message: 'Deleted Doctor.' }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Doctor.',
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

        // Generate OPD No (simple increment for now, or match existing pattern)
        const lastOPD = await prisma.opd.findFirst({
            orderBy: { opd_id: 'desc' }
        })
        // Assuming OPD No format or just simple increment string
        const lastOPDNo = lastOPD && lastOPD.opd_no ? parseInt(lastOPD.opd_no) : 0
        const newOPDNo = (lastOPDNo + 1).toString()

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

        // Generate Receipt No
        const lastReceipt = await prisma.receipts.findFirst({
            orderBy: { receipt_id: 'desc' }
        })
        const lastReceiptNo = lastReceipt && lastReceipt.receipt_no ? parseInt(lastReceipt.receipt_no) : 0
        const newReceiptNo = (lastReceiptNo + 1).toString()

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

export async function deleteTreatmentType(id: number): Promise<{ message: string }> {
    try {
        // Check for dependencies (Sub Treatment Types)
        const subTreatments = await prisma.sub_treatment_types.findFirst({
            where: { treatment_type_id: id }
        })

        if (subTreatments) {
            return {
                message: 'Cannot delete: This Treatment Type has Sub-Treatment Types linked to it.'
            }
        }

        await prisma.treatment_types.delete({
            where: { treatment_type_id: id },
        })
        revalidatePath('/dashboard/treatment-types')
        return { message: 'Deleted Treatment Type.' }
    } catch (error) {
        console.error('Database Error:', error)
        return {
            message: 'Database Error: Failed to Delete Treatment Type.',
        }
    }
}
