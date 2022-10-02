import { ActivityLogs, PrismaClient, WorkLogs } from "@prisma/client";

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
    console.log("into the model")
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
        console.log("the ourput is this")
        console.log(employeeActivityLogs)
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
                    activityLogId: payload.activityId,
                    title: payload.title,
                    description: payload.description,
                    content: payload.content
            }
        }
        )
        console.log("what the hell")
        return employeeWorkLogs;
}

export async function updateEmployeeActivityLogsModel (payload: any) : Promise< ActivityLogs >
{
    const prisma = new PrismaClient();
    const employeeActivityLogs = await prisma.activityLogs.update(
        {
            where: {
                id: payload.id
            },
            data: {
                date: payload.date,
                description: payload.description,
                userId: payload.userId
            }
        }
        )
        console.log("the ourput is this")
        console.log(employeeActivityLogs)
        return employeeActivityLogs;
}

export async function updateEmployeeLogModel (payload: any) : Promise < WorkLogs >
{
    try {
    console.log("into to update ")
    console.log(payload);
    const prisma = new PrismaClient();
    const employeeWorkLogs = await prisma.workLogs.update(
        {
            where: {
                id: payload.id
            },
            data: {
                activityLogId: payload.activityId,
                title: payload.title,
                description: payload.description,
                content: payload.content
            }
        }
        )
        console.log("the result of a model create is this : ")
        console.log(employeeWorkLogs)
        return employeeWorkLogs;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteEmployeeActivityLogsModel (id: any) : Promise< ActivityLogs >
{
    const prisma = new PrismaClient();
    const employeeActivityLogs = await prisma.activityLogs.delete(
        {
            where: {
                id: id
            }
        }
        )
        console.log("the ourput is this")
        console.log(employeeActivityLogs)
        return employeeActivityLogs;
}

export async function deleteEmployeeLogModel (id: any) : Promise < WorkLogs >
{
    try {
    console.log("into to update ")
    // console.log(payload);
    const prisma = new PrismaClient();
    const employeeWorkLogs = await prisma.workLogs.delete(
        {
            where: {
                id: id
            }
        }
        )
        console.log("the result of a model create is this : ")
        console.log(employeeWorkLogs)
        return employeeWorkLogs;
    } catch (error) {
        console.log(error);
    }
}