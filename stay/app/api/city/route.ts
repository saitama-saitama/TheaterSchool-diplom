import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const city = await prisma.city.findMany();
    
    return NextResponse.json(city);
}