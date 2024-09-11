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
        request.json().then(async (data) => {
            const prompt = await prisma.result.create({
                data: data
            });
            return NextResponse.json(prompt);
        });
    } catch (e) {
        return NextResponse.json(
            {error: `Result not created`},
            {status: 404}
        )
    }
}

export async function PUT(request: NextRequest, {params}: { params: { id: number } }) {

    if (request.headers.get('content-type') !== 'application/json') {
        return NextResponse.json(
            {error: `Invalid content type`},
            {status: 400}
        )
    }

    try {
        request.json().then(async (data) => {
            const prompt = await prisma.result.update({
                where: {
                    id: params.id
                },
                data: data
            });
            return NextResponse.json(prompt);
        });
    } catch (e) {
        return NextResponse.json(
            {error: `Result with id ${params.id} not found`},
            {status: 404}
        )
    }
}
