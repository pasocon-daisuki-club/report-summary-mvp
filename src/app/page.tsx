import {PrismaClient} from "@prisma/client";
import {ReportForm, ReportsTable} from "@/ui/report";
import {ContentHeader} from "@/ui/element";

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

            <ContentHeader>Report Form</ContentHeader>
            <div className="flex justify-center w-full bg-gray-50">
                <ReportForm/>
            </div>

            <ContentHeader>Reports</ContentHeader>
            <div className="flex justify-center w-full">
                <ReportsTable reports={reports}/>
            </div>
        </div>
    );
}
