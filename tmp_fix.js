const fs = require('fs');
let code = fs.readFileSync('lib/actions.ts', 'utf8');

const correctCreateDoctor = `export async function createDoctor(prevState: State, formData: FormData): Promise<State> {
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
`;

const startIndex = code.indexOf('export async function createDoctor');
const endIndex = code.indexOf('export async function updateDoctor');

if (startIndex !== -1 && endIndex !== -1) {
    code = code.substring(0, startIndex) + correctCreateDoctor + "\n" + code.substring(endIndex);
    fs.writeFileSync('lib/actions.ts', code);
    console.log('Fixed successfully.');
} else {
    console.error('Could not find functions!');
}
