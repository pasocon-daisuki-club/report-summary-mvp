import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, {params}: { params: { id: number } }) {
    try {
        const prompt = await prisma.prompt.findUniqueOrThrow(
            {
                where: {
                    id: params.id
                }
            }
        );
        return NextResponse.json(prompt);
    } catch (e) {
        return NextResponse.json(
            {error: `Prompt with id ${params.id} not found`},
            {status: 404}
        )
    }
}

export async function DELETE(request: NextRequest, {params}: { params: { id: number } }) {
    try {
        const prompt = await prisma.prompt.update({
            where: {
                id: params.id
            },
            data: {
                isActive: false
            }
        });
        return NextResponse.json(prompt);
    } catch (e) {
        return NextResponse.json(
            {error: `Prompt with id ${params.id} not found`},
            {status: 404}
        )
    }
}

