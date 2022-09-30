import { getEmployeeActivityLogsModel, getEmployeeWorkLogsModel, saveEmployeeActivityLogsModel, saveEmployeeWorkLogsModel } from "../LogModels/LogModels";

export async function getEmployeeActivityLogsLogic (id : number)
{
    const employeeActivityLog = await getEmployeeActivityLogsModel(id);
    return employeeActivityLog;
}
export async function saveEmployeeActivityLogsLogic (payload : any)
{
    const employeeActivityLog = await saveEmployeeActivityLogsModel(payload);
    return employeeActivityLog;
}
async function getActivityObj(obj)
{
    // let activityLog = new Acti
}

export async function getEmployeeWorkLogsLogic (id : number)
{
    const employeeActivityLog = await getEmployeeWorkLogsModel(id);
    return employeeActivityLog;
}
export async function saveEmployeeWorkLogsLogic (payload : any)
{
    const employeeActivityLog = await saveEmployeeWorkLogsModel(payload);
    return employeeActivityLog;
}