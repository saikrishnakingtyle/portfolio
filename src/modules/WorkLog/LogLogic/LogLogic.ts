import { 
    deleteEmployeeActivityLogsModel,
    deleteEmployeeLogModel,
    getEmployeeActivityLogsModel, 
    getEmployeeWorkLogsModel, 
    saveEmployeeActivityLogsModel, 
    saveEmployeeWorkLogsModel,
    updateEmployeeActivityLogsModel,
    updateEmployeeLogModel } from "../LogModels/LogModels";

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

export async function updateEmployeeActivityLogsLogic (payload : any)
{
    console.log("into the logic")
    const employeeActivityLog = await updateEmployeeActivityLogsModel(payload);
    return employeeActivityLog;
}

export async function updateEmployeeWorkLogLogic (payload : any)
{                                
    console.log("into the logic")    
    const employeeActivityLog = await updateEmployeeLogModel(payload);
    return employeeActivityLog;
}

export async function deleteEmployeeActivityLogsLogic (id : any)
{
    console.log("into the logic")
    const employeeActivityLog = await deleteEmployeeActivityLogsModel(id);
    return employeeActivityLog;
}

export async function deleteEmployeeWorkLogLogic (id : any)
{                                
    console.log("into the logic")    
    const employeeActivityLog = await deleteEmployeeLogModel(id);
    return employeeActivityLog;
}