const fs = require('fs');
let code = fs.readFileSync('lib/actions.ts', 'utf8');

const correctUpdateDoctor = `export async function updateDoctor(
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
`;

const startIndex = code.indexOf('export async function updateDoctor');
const endIndex = code.indexOf('export async function deleteDoctor');

if (startIndex !== -1 && endIndex !== -1) {
    code = code.substring(0, startIndex) + correctUpdateDoctor + "\n" + code.substring(endIndex);
    fs.writeFileSync('lib/actions.ts', code);
    console.log('Fixed updateDoctor successfully.');
} else {
    console.error('Could not find updateDoctor!');
}
