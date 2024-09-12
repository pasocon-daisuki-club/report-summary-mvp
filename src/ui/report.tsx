import {Report} from "@prisma/client"
import {ReactNode} from "react";


export function ReportsTable(props: {reports: Report[]}): ReactNode {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Content</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Updated At</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Results</th>
                    <th className="px-4 py-2"></th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {props.reports.map((report) => (
                    <ReportRow key={report.id} report={report}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export function ReportRow(props: {report: Report}): ReactNode {
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{props.report.id}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.report.content}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.report.createdAt.toLocaleTimeString()}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{props.report.updatedAt.toLocaleTimeString()}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    View
                </a>
            </td>
        </tr>
    );
}
