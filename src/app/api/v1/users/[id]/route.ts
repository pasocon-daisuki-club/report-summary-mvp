import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    try {
        const prompt = await prisma.user.findUniqueOrThrow({
            where: {
                id: Number(params.id)
            }
        });
        return NextResponse.json(prompt);
    } catch (e) {
        return NextResponse.json(
            {error: e},
            {status: 404}
        )
    }
}

export async function DELETE(request: NextRequest, {params}: { params: { id: number } }) {
    try {
        const prompt = await prisma.user.update({
            where: {
                id: Number(params.id)
            },
            data: {
                isActive: false
            }
        });
        return NextResponse.json(prompt);
    } catch (e) {
        return NextResponse.json(
            {error: e},
            {status: 404}
        )
    }
}
