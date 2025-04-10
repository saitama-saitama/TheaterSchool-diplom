import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/shared/constans/auth-options";


// Load environment variables
require("dotenv").config();

export async function POST(req: Request) {
    console.log("Request method: POST"); // Debugging

    // Get the logged-in user's session
    const session = await getServerSession(authOptions);
    console.log("Session:", session); // Debugging

    // Check if the user is logged in
    if (!session || !session.user?.email) {
        console.log("Unauthorized"); // Debugging
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userEmail = session.user.email; // Email of the logged-in user
    console.log("Sending email to:", userEmail); // Debugging

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Email content
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: userEmail, // Send email to the logged-in user
        subject: "Запись на курс",
        text: "Вы успешно записаны на курс!",
        html: `<p>Вы успешно записаны на курс!</p>`,
    };

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info); // Debugging
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error); // Debugging
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}