import {PrismaClient} from "@prisma/client";
import {ReportsTable} from "@/ui/report";

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
    const reports = await prisma.report.findMany({
        where: {
            userId: userId,
            isActive: true
        }
    });
    return (
        <div>
            <h1>Reports</h1>
            <ReportsTable reports={reports}/>
        </div>
    );
}
