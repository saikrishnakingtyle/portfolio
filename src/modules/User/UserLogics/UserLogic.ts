import { User } from "@prisma/client";
import {getUser, getUserData} from "../UserModels/UserModel"
export async function getUserLogic (email: string, password: string) : Promise<User> {
    const userData = await getUser(email,password);
    return userData;
}
export async function getUserDataLogic(id: number) : Promise<User>
{
     const userData = await getUserData (id);
     return userData;
}