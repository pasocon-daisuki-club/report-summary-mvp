import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    if (request.headers.get('content-type') !== 'application/json') {
        return NextResponse.json(
            {error: `Invalid content type`},
            {status: 400}
        )
    }

    try {
        const data = await request.json();
        const prompt = await prisma.prompt.create({
            data: data
        });
        return NextResponse.json(prompt);
    } catch (e) {
        return NextResponse.json(
            {error: `Prompt not created`},
            {status: 404}
        )
    }
}

export async function PUT(request: NextRequest) {

    if (request.headers.get('content-type') !== 'application/json') {
        return NextResponse.json(
            {error: `Invalid content type`},
            {status: 400}
        )
    }

    try {
        const data = await request.json();
        const prompt = await prisma.prompt.update({
            where: {
                id: data.id
            },
            data: data
        });
        return NextResponse.json(prompt);
    } catch (e) {
        return NextResponse.json(
            {error: e},
            {status: 404}
        )
    }
}
