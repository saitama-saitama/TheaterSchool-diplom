import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get("query") || "";
    const test = await prisma.performance.findFirst();

    const performance = await prisma.performance.findMany({
        where: {
            name: {
                contains: query,
                mode: "insensitive"
            },
        },
        take: 5,
    });
    return NextResponse.json(performance);
}