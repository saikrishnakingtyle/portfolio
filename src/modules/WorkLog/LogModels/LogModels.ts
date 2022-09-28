import { PrismaClient } from "@prisma/client";

export async function getEmployeeActivityLogsModel (id: number)
{
    const prisma = new PrismaClient();
    const employeeActivityLogs = await prisma.activityLogs.findMany(
        {
            where: {
                userId: id
            }
        }
        )
        return employeeActivityLogs;
}
export async function saveEmployeeActivityLogsModel (payload: any)
{
    const prisma = new PrismaClient();
    const employeeActivityLogs = await prisma.activityLogs.create(
        {
            data: {
                date: payload.date,
                description: payload.description,
                userId: payload.userId
            }
        }
        )
        return employeeActivityLogs;
}
export async function getEmployeeWorkLogsModel (id: number)
{
    const prisma = new PrismaClient();
    const employeeWorkLogs = await prisma.workLogs.findMany(
        {
            where : {
                activityLogId : id
            }
        }
        )
        
        return employeeWorkLogs;
}

export async function saveEmployeeWorkLogsModel (payload: any)
{
    const prisma = new PrismaClient();
    const employeeWorkLogs = await prisma.workLogs.create(
        {
            data : {
                    activityLogId: payload.id,
                    title: payload.title,
                    description: payload.description,
                    content: payload.content
            }
        }
        )
        return employeeWorkLogs;
}