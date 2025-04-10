import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const genre = await prisma.genre.findMany();
    
    return NextResponse.json(genre);
}