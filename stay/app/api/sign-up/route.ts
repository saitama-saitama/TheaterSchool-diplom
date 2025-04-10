import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { method, period, teacher, courseName, userId } = await req.json();

        // Log incoming data
        console.log("Incoming data:", { method, period, teacher, courseName, userId });

        // Find the course by its unique name
        const course = await prisma.course.findUnique({
            where: { name: courseName },
        });

        if (!course) {
            console.error("Course not found:", courseName);
            return NextResponse.json({ error: "Курс не найден." }, { status: 404 });
        }

        // Log the course
        console.log("Course found:", course);

        // Log the userId and verify it
        console.log("User ID:", userId);
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            console.error("User not found:", userId);
            return NextResponse.json({ error: "Пользователь не найден." }, { status: 404 });
        }

        // Log the user
        console.log("User found:", user);

        // Create the sign-up record
        const signUp = await prisma.singUp.create({
            data: {
                method,
                period,
                teacher,
                user: {
                    connect: { id: userId },
                },
                course: {
                    connect: { id: course.id },
                },
            },
        });

        // Log the created sign-up record
        console.log("Sign-up created successfully:", signUp);

        return NextResponse.json(signUp, { status: 200 });
    } catch (error) {
        console.error("Error creating sign-up:", error);
        return NextResponse.json(
            { error: "Ошибка при записи на курс.", details: error.message || error },
            { status: 500 }
        );
    }
}