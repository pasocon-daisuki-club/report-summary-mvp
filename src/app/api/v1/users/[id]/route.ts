import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, {params}: { params: { id: number } }) {
    try {
        const prompt = await prisma.user.findUniqueOrThrow(
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
