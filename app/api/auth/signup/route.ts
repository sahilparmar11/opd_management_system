import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/db';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password, first_name, last_name, user_type } = await request.json();

    // Validate required fields
    if (!email || !password || !first_name || !last_name || !user_type) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        first_name,
        last_name,
        user_type
      }
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: userWithoutPassword
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
