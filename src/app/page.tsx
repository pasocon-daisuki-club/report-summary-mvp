import {PrismaClient} from "@prisma/client";

// Login function is not implemented yet
const userId = 1;


export default async function Home() {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            reports: true
        }
    });
    return (
        <div>
            <h1>Reports</h1>
            <ul>
                {user?.reports.map((report) => (
                    <li key={report.id}>
                        <p>{report.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
