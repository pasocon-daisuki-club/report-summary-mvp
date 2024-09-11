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
        const user = await prisma.user.create({
            data: data
        });
        return NextResponse.json(user);
    } catch (e) {
        return NextResponse.json(
            {error: `User not created`},
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
        const user = await prisma.user.update({
            where: {
                id: data.id
            },
            data: data
        });
        return NextResponse.json(user);
    } catch (e) {
        return NextResponse.json(
            {error: e},
            {status: 404}
        )
    }
}
